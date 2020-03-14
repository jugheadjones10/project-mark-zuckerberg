module.exports = {
  inputs: {
    id: {
      type: 'json',
      custom: value => _.isString(value) || _.isArray(value),
      required: true,
    },
  },

  async fn(inputs, exits) {
    const projectMemberships = await sails.helpers.getProjectMemberships({
      userId: inputs.id,
    });

    return exits.success(projectMemberships);
  },
};
