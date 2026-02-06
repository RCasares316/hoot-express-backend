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

export const createHoot = async (req, res) => {
  try {
    const newHoot = await Hoot.create(req.body);
    res.json(newHoot);
  } catch (error) {
    console.log(Error);
  }
};

export const updateHoot = async (req, res) => {
  try {
    const updatedHoot = await Hoot.findByIdAndUpdate(
      req.params.hootId,
      req.body,
    );
    res.json(updatedHoot);
  } catch (error) {
    console.log(Error);
  }
};

export const deleteHoot = async () => {};

export const addComment = async () => {};
