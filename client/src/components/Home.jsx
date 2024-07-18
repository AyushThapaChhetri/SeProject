import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Link } from "react-router-dom";
import SimpleSlider from "./SimpleSlider";
import About from "./About";
import "../Css/Home.css"


function Home() {
    const [userName, setUserName] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
        } else {
            axios.get("http://localhost:3001/verify", {
                headers: { Authorization: `Bearer ${token}` }
            })
                .then(response => {
                    if (response.data.status === "success") {
                        setUserName(response.data.name);
                    } else {
                        localStorage.removeItem("token");
                        navigate("/login");
                    }
                })
                .catch(error => {
                    console.error("Error verifying token:", error);
                    localStorage.removeItem("token");
                    navigate("/login");
                });
        }
    }, [navigate]);
    return (
        <>
            <div className="home-main">
                <div className="home-title">
                    <p>
                        Welcome to <span id="title-text">HamroJerseys</span> {userName}
                        {/* <h1>Welcome , {userName}!</h1> */}
                    </p>
                </div>
                <p className="home-desc">
                    Discover top-tier football kits for every fan.
                    From the classics to the latest, we've got your team spirit covered.
                    <br />Shop at HamroJerseys - where every kit tells a story!
                </p>
                <Link to="/shop">
                    <div className="">
                        <button className="shop-btn">
                            Shop Now
                        </button>
                    </div>
                </Link>
            </div>
            <SimpleSlider />
            <About />
        </>
    );
};

export default Home;