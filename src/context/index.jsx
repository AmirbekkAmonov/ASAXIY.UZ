import { createContext, useContext, useState, useEffect } from "react";

const Context = createContext();

function Provider({ children }) {
    const [search, setSearch] = useState("");
    const [modal, setModal] = useState(false);
    const [favorites, setFavorites] = useState([]);
    const [comparison, setComparison] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        setFavorites(JSON.parse(localStorage.getItem("favorites")) || []);
        setComparison(JSON.parse(localStorage.getItem("comparison")) || []);
        setCart(JSON.parse(localStorage.getItem("cart")) || []);
    }, []);

    const toggleFavorite = (product) => {
        let updatedFavorites = favorites.some((fav) => fav.id === product.id)
            ? favorites.filter((fav) => fav.id !== product.id)
            : [...favorites, product];
        setFavorites(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    };

    const toggleComparison = (product) => {
        let updatedComparison = comparison.some((comp) => comp.id === product.id)
            ? comparison.filter((comp) => comp.id !== product.id)
            : [...comparison, product];
        setComparison(updatedComparison);
        localStorage.setItem("comparison", JSON.stringify(updatedComparison));
    };

    const toggleCart = (product) => {
        let updatedCart;
        if (cart.some((item) => item.id === product.id)) {
            updatedCart = cart.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
        } else {
            updatedCart = [...cart, { ...product, quantity: 1 }];
        }

        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const updateCartQuantity = (productId, newQuantity) => {
        let updatedCart = cart.map((item) =>
            item.id === productId ? { ...item, quantity: Math.max(1, newQuantity) } : item
        );
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const removeFromCart = (id) => {
        let updatedCart = cart.filter((item) => item.id !== id);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };
    


    return (
        <Context.Provider
            value={{
                search,
                setSearch,
                modal,
                setModal,
                favorites,
                toggleFavorite,
                comparison,
                toggleComparison,
                cart,
                toggleCart,
                updateCartQuantity,
                removeFromCart,
            }}
        >
            {children}
        </Context.Provider>
    );
}

export { Context, Provider };
export const UseStateValue = () => useContext(Context);
