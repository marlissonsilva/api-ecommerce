import ProductService from "../services/product.service.js";

const createProduct = async (req, res) => {
  try {
    const {title, description, price, stock, category, images} = req.body;
    const created = await ProductService.create({
      title,
      description,
      price,
      stock,
      category,
      images,
    });
    console.log("Criado", created);
    res.send("Novo Produto");
  } catch (error) {
    console.error("Erro ao criar produto:", error);
    res.status(500).send("Erro ao criar produto");
  }
};

const findAllProducts = async (req, res) => {
  try {
    const response = await ProductService.findAll();
    console.log(response);
    res.send(response);
  } catch (error) {
    console.error("Erro ao buscar produtos");
    res.status(502).send("Erro ao buscar produtos");
  }
};

const updateProduct = async (req, res) => {
  const {title, description, price, stock, category, images} = req.body;
  const {id} = req.body;
  try {
    const updated = await ProductService.update({
      id,
      title,
      description,
      price,
      stock,
      category,
      images,
    });
    console.log("Atualizado", updated);
    res.send("Produto atualizado");
  } catch (error) {
    console.error("Erro ao criar atualizar produto:", error);
    res.status(500).send("Erro ao criar atualizar produto");
  }
};

const deleteByIdProduct = async (req, res) => {
  await ProductService.deleteById(req.id);
  console.log("Deletar produto");
  res.send("Produto deletado");
};

export default {
  createProduct,
  findAllProducts,
  updateProduct,
  deleteByIdProduct,
};
