import React from "react";
import { Headers } from "./Header.tsx";
import { Link } from "react-router-dom";
import "../css/main.css";

export namespace Container 
{
    export class Body extends React.Component
    {
        render(): JSX.Element
        {
            return (
                <div className="nav-container">
                    <Link to="/" className="link-block">
                        Home
                        <div></div>
                    </Link>
                    <Link to="/cats" className="link-block">
                        Cats
                        <div></div>
                    </Link>
                    <Link to="/rick" className="link-block">
                        Money
                        <div></div>
                    </Link>
                </div>
            )
        }
    }
}