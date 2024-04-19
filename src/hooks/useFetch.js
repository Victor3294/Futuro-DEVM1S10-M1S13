import { useEffect, useState } from "react"

function useFetch(url) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        fetch(url)
            .then((res) => {
                if(!res.ok){
                    throw new Error('Erro ao carregar os dados');
                }
                return res.json();
            })
            .then((value) => {
                setData(value);
                setIsLoading(false);
            })
    }, [url]);

    return [data, isLoading];
}

export default useFetch;