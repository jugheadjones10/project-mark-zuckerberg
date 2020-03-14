const Errors = {
  CARD_NOT_FOUND: {
    notFound: 'Card is not found',
  },
  CARD_MEMBERSHIP_NOT_FOUND: {
    notFound: 'Card membership is not found',
  },
};

module.exports = {
  inputs: {
    cardId: {
      type: 'string',
      regex: /^[0-9]+$/,
      required: true,
    },
    userId: {
      type: 'string',
      regex: /^[0-9]+$/,
      required: true,
    },
  },

  exits: {
    notFound: {
      responseType: 'notFound',
    },
  },

  async fn(inputs, exits) {
    const { currentUser } = this.req;

    const { board, project } = await sails.helpers
      .getCardToProjectPath(inputs.cardId)
      .intercept('notFound', () => Errors.CARD_NOT_FOUND);

    const isUserMemberForProject = await sails.helpers.isUserMemberForProject(
      project.id,
      currentUser.id,
    );

    if (!isUserMemberForProject) {
      throw Errors.CARD_NOT_FOUND; // Forbidden
    }

    let cardMembership = await CardMembership.findOne({
      cardId: inputs.cardId,
      userId: inputs.userId,
    });

    if (!cardMembership) {
      throw Errors.CARD_MEMBERSHIP_NOT_FOUND;
    }

    cardMembership = await sails.helpers.deleteCardMembership(cardMembership, board, this.req);

    if (!cardMembership) {
      throw Errors.CARD_MEMBERSHIP_NOT_FOUND;
    }

    return exits.success({
      item: cardMembership,
    });
  },
};
