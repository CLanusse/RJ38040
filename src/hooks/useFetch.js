import { useEffect, useState } from "react"



export const useFetch = (url, dep = []) => {
    
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => setData(data))
    }, dep)

    return ({
        data
    })
}