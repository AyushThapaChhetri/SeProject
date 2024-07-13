import Card from "./Card";
import { Products } from "../products";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../Css/Shop.css";

export default function Shop() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filters, setFilters] = useState([]); // State for filters

    // Function to toggle the "Away" filter
    const toggleAwayFilter = () => {
        if (filters.includes("Away")) {
            setFilters(prevFilters => prevFilters.filter(filter => filter !== "Away"));
        } else {
            setFilters(prevFilters => [...prevFilters, "Away"]);
        }
    };

    const toggleHomeFilter = () => {
        if (filters.includes("Home")) {
            setFilters(prevFilters => prevFilters.filter(filter => filter !== "Home"));
        } else {
            setFilters(prevFilters => [...prevFilters, "Home"]);
        }
    };

    // Search products based on searchTerm
    const searchProducts = () => {
        return Products.filter(
            product =>
                product.productName.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };

    // Filter products based on selected filters
    const filterProducts = () => {
        if (filters.length === 0) {
            return searchProducts(); // If no filters applied, return all searched products
        } else {
            return searchProducts().filter(product => filters.includes(product.category));
        }
    };

    return (
        <>
            <input
                onChange={event => setSearchTerm(event.target.value)}
                type="text"
                className="search-box"
                placeholder="Search products..."
            />
            <button onClick={toggleAwayFilter}>
                {filters.includes("Away") ? "Remove Away" : "Add Away"}
            </button>

            <button onClick={toggleHomeFilter}>
                {filters.includes("Home") ? "Remove Home" : "Add Home"}
            </button>

            <div className="shop">
                {filterProducts().map(product => (
                    <Card key={product.id} data={product} />
                ))}
            </div>
            {/* <Link to="/cart">
                <button>cart</button>
            </Link> */}
            <Link to="/favs">
                <button>favs</button>
            </Link>
        </>
    );
}
