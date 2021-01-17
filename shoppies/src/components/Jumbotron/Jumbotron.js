import React from "react";
import "./Jumbotron.css";

function Jumbotron() {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Welcome to the Shoppies</h1>
                <p className="lead">Nominate your 5 favorite movies</p>
            </div>
        </div>
    )
}

export default Jumbotron;