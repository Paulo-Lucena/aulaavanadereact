import React, { useEffect, useState } from "react";
import logo from "../logo.svg";
import "../App.css";


function Header(props) {

    const [company, setCompany] = useState(props.options.empresa || "Avanade");
    const [name, setName] = useState(props.options.name || "Paulo Lucena");
    const [site, setSite] = useState(props.options.site || "https://www.google.com");

    useEffect( () => {
      setCompany(company.toUpperCase());
    }, [company]);

    return(
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {props.title}
        </p>
        <a
          className={props.options.className}
          href={props.options.site}
          target="_blank"
          rel="noopener noreferrer"
        >
          {company}
          {name}
          {site}
        </a>
        <button onClick={(e) => setCompany("Avanade")}>{`Mudando o nome de: ${company} para Avanade`}</button>  
      </header>
    );

};

export default Header;