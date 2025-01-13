import { useEffect, useState } from "react";
import { fetchArticle } from "../../services/Article.service";
import { ArticleResponseWP } from "../../types/Article";

const nbArticlePerRequest = 2;

const ArticleList = () => {
    const [articles, setArticles] = useState<ArticleResponseWP[]>([]);

    useEffect(() => {
        fetchArticle(nbArticlePerRequest, 1)
            .then((result) => {
                setArticles(articles => [...articles, ...result]);
            });
    }, []);

    return (

        <div>test...</div>

    );
};

export default ArticleList;