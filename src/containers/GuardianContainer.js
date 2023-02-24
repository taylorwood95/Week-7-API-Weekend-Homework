import React, {useEffect, useState} from "react";
import ArticleItem from "../components/ArticleItem";
import ArticleList from "../components/ArticleList";
import ArticleSelector from "../components/ArticleSelector";



const GuardianContainer = () => {

    const [articles, setArticles] = useState([])
    const [selectedArticles, setSelectedArticles] = useState(null)

    useEffect(() => {
        getArticles()
    }, [])

    const getArticles = () => {
        fetch("https://content.guardianapis.com/search?q=brexit&format=json&api-key=test")
        .then(results => results.json())
        .then(articlesData => setArticles(articlesData.response.results))
    }

    const handleSelectChange = event => {
        getArticles(event.target.value)
    }

    return (
        <div>
            <h1>Guardian News</h1>
            <ArticleSelector articles={articles} handleSelectChange={handleSelectChange}/>
             <ArticleList articles={articles} /> 
             
            
        </div>
    )
}


export  default GuardianContainer