import type { ArticleResponseWP } from "../types/Article";

const { VITE_BASE_URL_WP } = import.meta.env;

export async function fetchArticle(nbElement: number, page = 1): Promise<ArticleResponseWP[]> {

    const data = await fetch(VITE_BASE_URL_WP + `wp/v2/post?page=${page}&per_page=${nbElement}`);

    // ! This type is only available for devs. This static type is only here to help when coding. It helps to code "statically". It does not check if the type is well writted after all. 
    const result: ArticleResponseWP[] = await data.json();

    return result;
}