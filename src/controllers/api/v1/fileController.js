const File = require("../../../models/file");

const fileController = {
  // Image upload controller
  upload: async (req, res) => {
    try {
      const { filename, description } = req.body;
      const image = await File.create({ filename, description });
      return res.json(image);
    } catch (error) {
      return res.status(500).json({ error: "Image upload failed" });
    }
  },
  // Image retrieval controller
  get: async (req, res) => {
    try {
      const { imageId } = req.params;
      const image = await File.findByPk(imageId);
      if (!image) {
        return res.status(404).json({ error: "Image not found" });
      }
      return res.json(image);
    } catch (error) {
      return res.status(500).json({ error: "Image retrieval failed" });
    }
  },
};

module.exports = fileController;
