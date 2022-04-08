import React from "react";
import Search from "../Search/Index";
import Navbar from "./style.module.css";
import Profile from "../Profile/Profile"

function Index({ handleSearch }) {
  return (
    <header>
      <div className={Navbar.logo}>JOFY</div>
      <div>
        <Search handleSubmit={handleSearch} />
      </div>
      <Profile />
    </header>
  );
}

export default Index;
