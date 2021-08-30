import "../style/news.css"
import { useContext, useEffect } from "react"
import { RequestContext } from "../contexts/request-context"
import { Link } from "react-router-dom" 


function News() {
    const {allPosts, setPosts} = useContext(RequestContext)


   useEffect(() => {
        setPosts()
   }, [setPosts])

    return( 
        <div className="news-container">
                {allPosts.map((post) =>(
                    <div className="single-news" key={post._id}>
                        <Link to={"/specificNews/" + post._id}>
                            <h2>{post.headline}</h2>
                        </Link>
                    </div>
                ))}
        </div>
    )
}

export default News