const File = require("../../../models/file");

const fileService = {
  find: async () => {
    const result = await File.findAll();

    result.forEach(async (data) => {
      data.filename = `http://localhost:3000/uploads/${data.filename}`;
    });

    return result;
  },

  create: async (data) => {
    const description = data.description;
    const filename = data.filename;

    const result = await File.create({ description, filename });
    result.filename = `http://localhost:3000/uploads/${result.filename}`;

    return result;
  },
};

module.exports = fileService;
