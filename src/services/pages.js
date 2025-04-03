// hooks/useNews.js
import { useEffect, useState } from "react";
import API from "../config/axios";

const usePages = (url) => {
    const [pages, setPages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setError(null)
        setPages([])
        const fetchNews = async () => {
            try {
                setLoading(true);
                const response = await API.get(url);
                setPages(response.data.page || response.data); // API formatiga qarab o'zgartiriladi
                console.log(response.data)
            } catch (err) {
                setError(err.message || "Xatolik yuz berdi");
            } finally {
                setLoading(false);

            }
        };
        setError("")

        fetchNews();
    }, [url]);

    return { pages, loading, error };
};

export default usePages;
