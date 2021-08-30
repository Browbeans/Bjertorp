import "../style/news.css"
import axios from "axios"
import { useContext } from "react"
import { RequestContext } from "../contexts/request-context"


function News() {
    const requestContext = useContext(RequestContext)

    const anrop = async function () {
        const request = await axios.get('/getUser')
        const result = request.data
        console.log(result)
    }

    return( 
        <div className="news-container">
            {requestContext.allPosts.map((post) =>(
                <div id={post.text}>
                    <h2>{post.headline}</h2>
                </div>
            ))}
        </div>
    )
}

export default News