import React from "react";


const ArticleItem = ({article, index}) => {

    return (
        <div>
            <ul value={index}>Headline: {article["webTitle"]}</ul>
            <a target= "_blank" href={article["webUrl"]}>Click for more info</a>
        </div>
    )
}


export default ArticleItem