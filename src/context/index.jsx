import { createContext, useContext, useState, useEffect } from "react";

const Context = createContext();

function Provider({ children }) {
    const [search, setSearch] = useState("");
    const [modal, setModal] = useState(false);
    const [favorites, setFavorites] = useState([]);
    const [comparison, setComparison] = useState([]);

    useEffect(() => {
        const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(savedFavorites);

        const savedComparison = JSON.parse(localStorage.getItem("comparison")) || [];
        setComparison(savedComparison);
    }, []);

    const toggleFavorite = (product) => {
        let updatedFavorites;
        if (favorites.some((fav) => fav.id === product.id)) {
            updatedFavorites = favorites.filter((fav) => fav.id !== product.id);
        } else {
            updatedFavorites = [...favorites, product];
        }
        setFavorites(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    };

    const toggleComparison = (product) => {
        let updatedComparison;
        if (comparison.some((comp) => comp.id === product.id)) {
            updatedComparison = comparison.filter((comp) => comp.id !== product.id);
        } else {
            updatedComparison = [...comparison, product];
        }
        setComparison(updatedComparison);
        localStorage.setItem("comparison", JSON.stringify(updatedComparison));
    };
    useEffect(() => {
        localStorage.setItem("comparison", JSON.stringify(comparison));
    }, [comparison]);


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
            }}
        >
            {children}
        </Context.Provider>
    );
}

export { Context, Provider };
export const UseStateValue = () => useContext(Context);
