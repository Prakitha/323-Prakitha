import dotenv from 'dotenv'
import './data/index.js'
import express from "express";
import articlesRouter from './routes/article.js';
import indexRouter from './routes/pages/index.js'
import articlesPageRouter from './routes/pages/article.js';
import HttpError from './utils/HttpError.js';
import fs from 'fs';
import path from 'path';

const app = express();
app.set( 'views', path.join( process.cwd(), 'src', 'views' ) );
app.set( 'view engine', 'ejs' );
// custom middleware
app.use(( req, res, next ) => {
    const logMessage = `${req.method} ${req.url} at time ${new Date().toTimeString()}\n`;

    fs.writeFile( path.join( process.cwd(), 'src', 'server.log' ), logMessage, { encoding: 'utf-8', flag: 'a+' }, ( err ) => {
        if( err ) {
            console.log( err.message );
        }

        next(); // pass control to the next middleware
    });
});
app.use(express.static(path.join(process.cwd(),'src','public','bootstrap-5.1.3-dist')));
app.use(express.json({extended:true}));
app.use(express.urlencoded({extended:true}));
app.use('/articles',articlesRouter);
app.use( '/', indexRouter );
//app.use('/article/id',(req,res)=>console.log(req.params.id));
app.use( '/page/articles', articlesPageRouter );
app.use((req,res,next)=>{
    const httpError=new HttpError('Resource not found',404);
    next(httpError);
})
app.use((httpError,req,res,next)=>{
    res.status(httpError.statusCode||500).json({
        message:httpError.message
    })
})
dotenv.config();
const PORT = process.env.PORT || 5000;
app.listen(PORT, err => {
    if (err) {
        console.log(err.message);
        return;
    }
    console.log(`sucessfully started http://localhost:${PORT}`);
}
)