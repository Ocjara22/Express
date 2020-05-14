import models from "../models";

export default {
  add: async (req, res, next) => {
    try {
      const reg = await models.Article.create(req.body);
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrio un problema",
      });
      next(e);
    }
  },
  query: async (req, res, next) => {
    try {
      const reg = await models.Article.findOne({
        _id: req.query._id,
      }).populate("category", { nombre: 1 });
      if (!reg) {
        res.status(404).send({
          message: "No existe el registro",
        });
      } else {
        res.status(200).json(reg);
      }
    } catch (e) {
      res.status(500).send({
        message: "Ocurrio un problema",
      });
      next(e);
    }
  },
  list: async (req, res, next) => {
    try {
      let valor = req.query.valor;
      const reg = await models.Article.find(
        {
          $or: [
            { name: new RegExp(valor, "i") },
            { description: new RegExp(valor, "i") },
          ],
        },
        { createAt: 0 }
      )
        .populate("category", { name: 1 })
        .sort({ createAt: -1 });
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrio un problema",
      });
      next(e);
    }
  },
  update: async (req, res, next) => {
    try {
      const reg = await models.Article.findByIdAndUpdate(
        { _id: req.body._id },
        {
          category: req.body.category,
          code: req.body.code,
          name: req.body.name,
          description: req.body.description,
          sale_price: req.body.sale_price,
          stock: req.body.stock,
        }
      );
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrio un problema",
      });
      next(e);
    }
  },
  remove: async (req, res, next) => {
    try {
      const reg = await models.Article.findByIdAndDelete({
        _id: req.body._id,
      });
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrio un problema",
      });
      next(e);
    }
  },
  activate: async (req, res, next) => {
    try {
      const reg = await models.Article.findByIdAndUpdate(
        { _id: req.body._id },
        { status: 1 }
      );
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrio un problema",
      });
      next(e);
    }
  },
  deactivate: async (req, res, next) => {
    try {
      const reg = await models.Article.findByIdAndUpdate(
        { _id: req.body._id },
        { status: 0 }
      );
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrio un problema",
      });
      next(e);
    }
  },
};
