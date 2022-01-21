import express from 'express';
import { getArticles,getArticlesById, postArticle, putArticle ,deleteArticle,postComment,getComments} from '../controllers/article.js';

// create a router
const router = express.Router();

router.get('/', getArticles);
router.get('/:_id', getArticlesById);
router.post('/', postArticle);
router.put('/:_id', putArticle);
router.delete('/:_id',deleteArticle);
router.post(   '/:_id/comments', getComments );
router.post(   '/:_id/comments', postComment );

export default router;
