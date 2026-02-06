import Hoot from "../models/hoot.js";

export const getHoots = async (req, res) => {
  try {
    const hootsData = await Hoot.find({});
    res.json(hootsData);
  } catch (error) {
    console.log(error);
  }
};

export const getHoot = async (req, res) => {
  try {
    const hootData = await Hoot.findById(req.params.hootId);
    res.json(hootData);
  } catch (error) {
    console.log(error);
  }
};

export const createHoot = async () => {};

export const updateHoot = async () => {};

export const deleteHoot = async () => {};

export const addComment = async () => {};
