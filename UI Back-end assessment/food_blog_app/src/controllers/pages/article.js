import { fetchArticles } from "../../services/article.js";
const getArticlePage=(req,res,next)=>{
    fetchArticles()
    .then(articles=>{
    res.render('articles',{
        articles:articles
    })
})
}
export{
    getArticlePage
}