import React from "react";
import "./Input.css";

function Input(props) {
    return (
        <section className="row">
            <div className="col-12">
                <input type="text" name="search" placeholder="Search Your Favorite Movies Here" onChange={props.onChange} />
            </div>
        </section>
    )
}

export default Input;