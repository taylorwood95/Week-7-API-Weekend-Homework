import React from "react";


const ArticleItem = ({article, index}) => {

    return (
        <div>
            <ul value={index}>Headline: {article.response.results[0]["webTitle"]}</ul>
            <a target= "_blank" href={article.response.results[0]["webUrl"]}>Click for more info</a>
        </div>
    )
}


export default ArticleItem