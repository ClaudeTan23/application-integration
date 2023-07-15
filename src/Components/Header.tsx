import React from "react";
import { Container } from "./Container.tsx";

export namespace Headers 
{
    export class Header extends React.Component
    {
        render(): JSX.Element 
        {
            return (
                <div style={{ display: "flex", padding: "15px 0", fontSize: "20px", fontFamily: "sans-serif", fontWeight: "600", width: "100%", boxShadow: "0 0 10px #404040", backgroundColor: "#e8e8e8", color: "#404040", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ padding: "0 15px" }}>Assignment 2 React Fetch API</div>
                    <Container.Body />
                </div>
            )    
        }
    }
}