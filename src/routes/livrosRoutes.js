import express from "express";
import LivroController from "../controllers/livrosController.js";
import filtrarPaginacao from "../middlewares/filtroDePaginacao.js";

const router = express.Router();

router
  .get("/livros", LivroController.listarLivros, filtrarPaginacao)
  .get("/livros/busca", LivroController.listarLivrosPorFiltro, filtrarPaginacao)
  .get("/livros/:id", LivroController.listarLivroPorId)
  .post("/livros", LivroController.cadastrarLivro)
  .put("/livros/:id", LivroController.atualizarLivro)
  .delete("/livros/:id", LivroController.excluirLivro);

export default router;   