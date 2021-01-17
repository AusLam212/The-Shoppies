import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import Input from "../components/Input/Input";
import List from "../components/List/List";
import API from "../utils/API";

function Search() {
    const [search, setSearch] = useState("");
    const [list, setList] = useState([]);

    useEffect(() => {
        API.search(search)
        .then((result) => {
            setList(result);
            console.log(list);
        })
    }, [search])

    function handleChange(event) {
        const { name, value } = event.target;
        setSearch({
            [name]: value
        })
        console.log(search);
    }

    return (
        <div>
            <Jumbotron />
            <div className="container">
                <Input onChange={handleChange} />
                {/* {list.map(item => (
                    <List image={item}/>
                ))} */}
            </div>
        </div>
    )
}

export default Search;