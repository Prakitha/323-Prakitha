import NewsItem from "./NewsItem";
import Button from "./Button";
import Loading from "./Loading";
import NewsItemsErrorBoundary from "./error_boundaries/NewsItemErrorBoundary";
//import NavBar from "./NavBar";
const NewsRenderDemo = () =>{
    return(
        <div>
           
            <Button /><br/>
            
            <Loading /><br/>
            {/*<NewsItemsErrorBoundary>*/}
                <NewsItem />
            {/*</NewsItemsErrorBoundary>*/}
        </div>
    )

} 

export default NewsRenderDemo;