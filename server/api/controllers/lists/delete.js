const Errors = {
  LIST_NOT_FOUND: {
    notFound: 'List is not found',
  },
};

module.exports = {
  inputs: {
    id: {
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

    const listToProjectPath = await sails.helpers
      .getListToProjectPath(inputs.id)
      .intercept('notFound', () => Errors.LIST_NOT_FOUND);

    let { list } = listToProjectPath;
    const { project } = listToProjectPath;

    const isUserMemberForProject = await sails.helpers.isUserMemberForProject(
      project.id,
      currentUser.id,
    );

    if (!isUserMemberForProject) {
      throw Errors.LIST_NOT_FOUND; // Forbidden
    }

    list = await sails.helpers.deleteList(list, this.req);

    if (!list) {
      throw Errors.LIST_NOT_FOUND;
    }

    return exits.success({
      item: list,
    });
  },
};
