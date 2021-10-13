import { createContext, useState, useEffect } from "react"
import api from "../services/api/api"

const DataContext = createContext()

const storedProduct = JSON.parse(localStorage.getItem("cart") || '[]')

function DataContextProvider(props) {
    const [data, setData] = useState()
    const [cart, setCart] = useState(storedProduct)

    useEffect(() => {
        api.get("/items").then((response) => {
            setData(response.data)
        })

        localStorage.setItem("cart", JSON.stringify(cart))

    }, [cart])

    const addToCart = (product) => {
        let itemInCart = cart.find((item) =>
            product.id === item.id)
        let newCart = [...cart]
        if (itemInCart) {
            itemInCart.available++
        } else {
            itemInCart = {
                ...product,
                available: 1
            }
            newCart.push(itemInCart)
        }
        setCart(newCart)
    }

    const removeFromCart = (productToRemove) => {
        setCart(
            cart.filter((product) => product.id !== productToRemove)
        );
    };

    const clearCart = () => {
        setCart([]);
    };

    const getCartTotal = () => {
        return cart.reduce((sum, { available }) => sum + available, 0)
    }

    const setQuantity = (product, amount) => {
        const newCart = [...cart]
        newCart.find((item) => item.id === product.id).available = amount || 0
        setCart(newCart)
    }

    const getTotalSum = () => {
        return cart.reduce((sum, { sellingPrice, available }) => sum + sellingPrice * available, 0)
    }

    return (
        <DataContext.Provider value={{
            data,
            cart,
            addToCart,
            getCartTotal,
            setQuantity,
            getTotalSum,
            removeFromCart,
            clearCart
        }}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataContext
export { DataContextProvider }