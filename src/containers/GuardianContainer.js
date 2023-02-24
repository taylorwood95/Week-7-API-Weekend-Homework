import React, {useEffect, useState} from "react";
import ArticleItem from "../components/ArticleItem";
import ArticleList from "../components/ArticleList";



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

    return (
        <div>
            <h1>Guardian News</h1>
             <ArticleList articles={articles} /> 
            
        </div>
    )
}


export  default GuardianContainer