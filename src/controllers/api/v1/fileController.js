const { find, create } = require("../../../services/api/v1/fileService");

const fileController = {
  post: async (req, res) => {
    let response;
    try {
      let data = req.body;
      if (req.file) data["filename"] = req.file.filename;
      const result = await create(data);

      response = res.json(result);
    } catch (error) {
      response = res.status(500).json({ error: "Data save failed" });
    }

    return response;
  },

  get: async (req, res) => {
    let response;
    try {
      const result = await find();
      if (!result) {
        return res.status(404).json({ error: "Result not found" });
      }

      response = res.json(result);
    } catch (error) {
      response = res.status(500).json({ error: "Result retrieval failed" });
    }

    return response;
  },
};

module.exports = fileController;
