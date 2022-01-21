/**
 * Service talks to the database (data layer)
 */
import mongoose from "mongoose";
//import normalize from "normalize_mongoose";
import config from '../utils/config.js'
const Article = mongoose.model('article');

const fetchArticles = (sort, order, page, q) => {
  const skipClause = (page - 1) * config.PAGE_SIZE;

  const filterClause = {}
  if (q) {
    filterClause.description = {
      $regex: q,
      $options: 'i'// ignore case
    }

  }
  console.log(filterClause);

  const sortClause = {
    [sort]: order === 'desc' ? -1 : 1
  }



  return Article.find(filterClause).
    select('author title abstract body imageUrl  createdAt')
    .sort(sortClause).skip(skipClause).limit(config.PAGE_SIZE);
};
const fetchArticlesById = (_id) => {
  return Article.findById(_id);
};


const addArticle = (article) => {
  return Article.create(article);
}
const updateArticle = (_id, newArticleDetails) => {
  return Article.findByIdAndUpdate(_id, newArticleDetails, { new: true, runValidators: true });
}
const removeArticle = (_id) => {
  return Article.findByIdAndRemove(_id);
}
const addComment = (_id, comments) => {
  return Article.findByIdAndUpdate(
    _id,
    {
      $push: {
        comments: comments
      }
    },
    {
      new: true,
      runValidators: true
    }
  );
};
const fetchComments = (_id) => {
  return Article
    .findById(_id)
    .select('comments')
    .then(articleComment=> articleComment.comments)
}
export {
  fetchArticles,
  fetchArticlesById,
  addArticle,
  updateArticle,
  removeArticle,
  addComment,
  fetchComments

};