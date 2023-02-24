import React from "react";
import ArticleItem from "./ArticleItem";



const ArticleList = ({articles}) => {
    const articleItems = articles.map((article, index) => {
        return <ArticleItem article={article} key={index}/>
    })

    return (
        <div>
            <h2>Latest News</h2>
            <ul>{articleItems}</ul>
        </div>
    )
}

export default ArticleList