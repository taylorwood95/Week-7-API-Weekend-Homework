import React from "react";

const ArticleList = ({articles}) => {
    const articleItems = articles.map((article, index) => {
        return <ArticleItem article={article} key={index}/>
    })

    return (
        <div>
            <h1>News</h1>
            <ul>{articleItems}</ul>
        </div>
    )
}

export default ArticleList