import Hoot from "../models/hoot.js";

export const getHoots = async () => {};

export const getHoot = async () => {};

export const createHoot = async () => {};

export const updateHoot = async () => {};

export const deleteHoot = async (req, res) => {
  try {
    const { hootId } = req.params;

    const deleted = await Hoot.findByIdAndDelete(hootId);

    if (!deleted) {
      res.status(404);
      throw new Error("Hoot not found.");
    }

    res.status(200).json(deleted);
  } catch (error) {
    if (res.statusCode === 404) {
      res.json({ err: err.message });
    } else {
      res.status(500).json({ err: err.message });
    }
  }
};

export const addComment = async (req, res) => {};
