import Product from "../models/Product.js";

const create = async (body) => await Product.create(body);

const findAll = async () => await Product.find();

const update = async (body) => await Product.updateOne(body);

const deleteById = async (id) => await Product.deleteOne(id);

export default {
  create,
  findAll,
  deleteById,
  update,
};
