import {React,useState} from "react";
//import TextField from "@mui/material/TextField";
import List from "../SearchComponents/List";
import "../Styles/searchbar.css";
import {InputGroup , FormControl}from "react-bootstrap";

function Searchbar() {
    const [inputText,setInputText]=useState("");
    let inputHandler =(e) =>
    {
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };
    return (
        <div className="main">
        <div className="search">
            <InputGroup variant="dark">
            <InputGroup.Text>Search</InputGroup.Text>
            <FormControl id="outline-basic" 
            onChange={inputHandler}/>
            </InputGroup>
            
        </div>
        <List input={inputText}/></div>
    );
}

export default Searchbar;