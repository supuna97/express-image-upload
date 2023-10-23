const File = require("../../../models/file");

const fileService = {
  find: async () => {
    const result = await File.findAll();

    return result;
  },

  create: async (data) => {
    const description = data.description;
    const filename = data.filename;

    const result = await File.create({ description, filename });

    return result;
  },
};

module.exports = fileService;
