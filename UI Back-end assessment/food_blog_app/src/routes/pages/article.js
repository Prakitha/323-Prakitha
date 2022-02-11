import express from 'express';
import { getArticlePage } from "../../controllers/pages/article.js";

const router = express.Router();


router.get( '/', getArticlePage);

export default router;