import React from "react";

const ArticleSelector =({handleSelectChange, articles}) => {
    return (
        <div>
            <select onChange={handleSelectChange}>
                {articles.map(article => {
                    
                    return <option value={article['sectionId']}>{article['sectionName']}</option>

                })}


            </select>
        </div>
    )
}

export default ArticleSelector