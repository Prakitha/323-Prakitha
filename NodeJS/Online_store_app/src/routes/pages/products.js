import express from 'express';
import { getProductsPage } from "../../controllers/pages/products.js";

const router = express.Router();

/*router.get( '/', ( req, res, next ) => {
    res.render( 'products' );
});*/
router.get( '/', getProductsPage);
export default router;