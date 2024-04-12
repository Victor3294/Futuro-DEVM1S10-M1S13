import {useEffect, useState} from "react"

function useFetch(url){
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    useEffect(() => {
        setIsLoading(true)
        fetch(url)
        .then((res) => res.json())
        .then((value) => {
            setData(value)
            setIsLoading(false)
        })
    }, [url])
    
    return[data, isLoading];
}