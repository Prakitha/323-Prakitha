
import { fetchArticles, fetchArticlesById, addArticle, updateArticle, removeArticle,addComment ,fetchComments} from "../services/article.js";
import HttpError from '../utils/HttpError.js'

const getArticles = (req, res,next) => {
    let { sort, order, page, q } = req.query;


    let pageInt = parseInt(page);
    if (isNaN(pageInt)) {
        pageInt = 1;
    }
    if (!sort) {
        sort = 'title';
    }
    if (!order) {
        order = 'asc';
    }
    


    fetchArticles(sort, order,page, q)
        .then(articles=> {
            res.json(articles);
        })
        .catch(err => {
            const httpError = new HttpError(err.message, 500);
            next(httpError)
        });
  

}

const getArticlesById = (req, res, next) => {
    const { _id } = req.params;
    fetchArticlesById(_id)
        .then((article) => {
            if (!article) {
                const httpError = new HttpError('article with gievn id does not exists', 404)
                next(httpError);
                return;
            }
            res.json(article);
        })
        .catch((err) => {
            if (err.kind === 'ObjectId') {
                const httpError = new HttpError('Invalid article id', 400)
                next(httpError);
            } else {
                const httpError = new HttpError(err.message, 500)
                next(httpError)
            }
        });
}
const postArticle = (req, res, next) => {
    const { body } = req;
    // const { _id } = req.params;
    console.log(Object.keys(body));
    if (Object.keys(body).length === 0) {
        const httpError = new HttpError('request body is empty.product details are missing', 400);
        next(httpError);
        return;
    }
    addArticle(body)
        .then(article => {
               res.status(201).json(article);
        })
        .catch(err => {
            const httpError=new HttpError(err.message,400);
            next(httpError);
        });
}
const putArticle = (req, res, next) => {
    const { body } = req;
    const { _id } = req.params;
    if (Object.keys(body).length === 0) {
        const httpError = new HttpError('request body is empty.product details are missing', 400);
        next(httpError);
        return;
    }
    updateArticle(_id, body)
        .then(article => {
            res.json(article);
        })
        .catch(err => {
            res.json(err.message);
        })
}
const deleteArticle = (req, res, next) => {
    const { _id } = req.params;
    removeArticle(_id)
        .then(() => {
            res.status(204).json()
        })
        .catch((err) => {
            if (err.kind === 'ObjectId') {
                const httpError = new HttpError('Invalid product id', 400)
                next(httpError);
            } else {
                const httpError = new HttpError(err.message, 500)
                next(httpError)
            }
        })
}
const postComment = (req, res, next) => {
    const { _id } = req.params;
    const { body } = req;
  
    // check if the body is an empty object
    if( Object.keys( body ).length === 0 ) {
      const httpError = new HttpError( 'Request body is empty. Review details are missing.', 400 );
      next( httpError );
      return;
    }
  
    addComment( _id, body )
      .then(article => {
        res.status( 201 ).json( article );
      })
      .catch(err => {
        const httpError = new HttpError( err.message, 400 );
        next( httpError );
      });
  };
  const getComments = (req, res, next) => {
    const { _id } = req.params;
  
    fetchComments( _id )
      .then((comments) => {
          res.json(comments);
      })
      .catch((err) => {
          const httpError = new HttpError( err.message, 500 );
          next( httpError );
      });
  }
export {
    getArticles,
    getArticlesById,
    postArticle,
    putArticle,
    deleteArticle,
    postComment,
    getComments
    

}