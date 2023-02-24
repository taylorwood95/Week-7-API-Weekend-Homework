import React, {useEffect, useState} from "react";
import ArticleList from "../components/ArticleList";



const GuardianContainer = () => {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        getArticles()
    }, [])

    const getArticles = () => {
        fetch("https://content.guardianapis.com/search?q=brexit&format=json&api-key=test")
        .then(results => results.json)
        .then(articlesData => setArticles(articlesData))
    }

    return (
        <div>
            <h1>Guardian Container</h1>
            <ArticleList />
        </div>
    )
}


export  default GuardianContainer