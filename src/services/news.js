// hooks/useNews.js
import { useEffect, useState } from "react";
import API from "../config/axios";

const useNews = (url) => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                setLoading(true);
                const response = await API.get(url);
                setNews(response.data.news || response.data); // API formatiga qarab o'zgartiriladi
            } catch (err) {
                setError(err.message || "Xatolik yuz berdi");
            } finally {
                setLoading(false);

            }
        };

        fetchNews();
    }, [url]);

    return { news, loading, error };
};

export default useNews;
