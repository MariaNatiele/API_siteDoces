import  Express from "express";
import ProdutosController from "./controllers/produtoController.js";
const router = Express()

router.get('/produtos',ProdutosController.index );

export default router;