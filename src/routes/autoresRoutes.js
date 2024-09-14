import express from "express";
import AutorController from "../controllers/autoresController.js";
import filtrarPaginacao from "../middlewares/filtroDePaginacao.js";

const router = express.Router();

router
  .get("/autores", AutorController.listarAutores, filtrarPaginacao)
  .get("/autores/:id", AutorController.listarAutorPorId)
  .post("/autores", AutorController.cadastrarAutor)
  .put("/autores/:id", AutorController.atualizarAutor)
  .delete("/autores/:id", AutorController.excluirAutor);

export default router;   