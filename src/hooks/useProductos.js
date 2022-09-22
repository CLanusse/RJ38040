import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where} from 'firebase/firestore'
import { db } from '../firebase/config'

export const useProductos = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        // 1.- Armar la referencia (sync)
        const productosRef = collection(db, 'productos')
        const q = categoryId 
                    ? query(productosRef, where('category', '==', categoryId) )
                    : productosRef
        // 2.- Consumir esa ref (async)
        getDocs(q)
            .then((resp) => {
                const productosDB = resp.docs.map( (doc) => ({id: doc.id, ...doc.data()}) )
                console.log(productosDB)

                setProductos(productosDB)
            })
            .finally(() => {
                setLoading(false)
            })
        
    }, [categoryId])

    return ({
        productos, loading
    })
}
