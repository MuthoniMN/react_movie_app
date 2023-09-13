import React, {useState} from "react";
import SearchBar from "./SearchBar";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
    const [searchTerm, setSearchTerm] = useState("")

    return (
        <nav className="d-flex mt-2 mb-2 align-items-center">
            <Logo />
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            <a href="#">Sign In</a>
            <button className="menu">
            <FontAwesomeIcon icon={faBars} />
            </button>
        </nav>
    )
}

export default Navigation;