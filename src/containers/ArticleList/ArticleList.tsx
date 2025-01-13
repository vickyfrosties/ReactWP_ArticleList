import { useEffect, useState } from "react";
import { fetchArticle } from "../../services/Article.service";
import { ArticleResponseWP } from "../../types/Article";

const nbArticlePerRequest = 2;

const ArticleList = () => {
    const [articles, setArticles] = useState<ArticleResponseWP[]>([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetchArticle(nbArticlePerRequest, 1)
            .then((result) => {
                setArticles(articles => [...articles, ...result]);
                setLoading(false);
            });
    }, []);

    return (

        <div>test...</div>

    );
};

export default ArticleList;