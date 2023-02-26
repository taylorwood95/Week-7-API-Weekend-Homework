import React from "react";


const ArticleItem = ({article, index}) => {

    return (
        <div>
            <ul className = "ul-list"value={index}>{article["webTitle"]}</ul>
            <a className="a-tag" target= "_blank" href={article["webUrl"]}>Click for more info...</a>
        </div>
    )
}


export default ArticleItem