import React, { useState } from 'react'
import "./Searchbar.css"
import { FiSearch } from "react-icons/fi";
const Searchbar = () => {
    const[searchvalue,setsearchvalue]=useState("");
  return (
    <div class="search-container">
    <form action="/action_page.php">
      <input type="text" placeholder="Search.." name="search"/>
      <FiSearch className="serach"/>
      {/* <button type="submit"><i class="fa fa-search"></i></button> */}
    </form>
  </div>

 
  )
}

export default Searchbar
