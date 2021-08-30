import { useContext, useEffect } from "react"
import { useRouteMatch } from "react-router-dom"
import { RequestContext } from "../contexts/request-context"
import { Link } from "react-router-dom"

function SingleNews() {
    const { addSpecificPost, specificPost, allPosts } = useContext(RequestContext)
    const match = useRouteMatch()

    useEffect(() => {
        addSpecificPost(match.params.id)
    }, [addSpecificPost])

    return(
        <div className="news-container">
            <div className="post-container">
                <h2>{specificPost.headline}</h2>
                <p>{specificPost.text}</p>
            </div>
            <div className="post-headlines">
                {allPosts.map((post) =>(
                        <div className="headline-box" key={post._id} onClick={() => addSpecificPost(post._id)}>
                            <Link to={"/specificNews/" + post._id}>
                                <h2>{post.headline}</h2>
                            </Link>
                        </div>
                ))}
            </div>
        </div>
    )
}

export default SingleNews