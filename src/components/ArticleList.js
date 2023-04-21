import React from "react";
import Article from "./Article";

function ArticleList(posts) {
    const propElements = posts.props.map(post => {
        return <Article key={post.id} props={post} />
    })
    return(
        <main>
            {propElements}
        </main>
    )
}


export default ArticleList