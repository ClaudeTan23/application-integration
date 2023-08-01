import React from "react";
import { Link } from "react-router-dom";
import "../css/bootstrap.min.css";
import "../css/templatemo-diagoona.css";

export namespace Home 
{
    export const Body = (): JSX.Element =>
    {
        return (
            <div className="tm-row" style={{ display: "flex", flex: 1 }}>
                <div className="tm-col-left" style={{display: "flex", justifyContent: "center", alignItems: "center", height: "500px"}}>
                    <img src="/img/cat.png" alt="cat.png" style={{width: "500px", borderRadius: "10px"}}/>
                </div>
                <main className="tm-col-right">
                    <section className="tm-content">
                        <h2 className="mb-5 tm-content-title">K Y N: Know Your Neighborhood</h2>
                        <p className="mb-5">The goal of this application is to provide login/sign up using existing API. For this to happen, the application should have login button with available APIs.</p>
                        <hr className="mb-5" />
                        <p className="mb-5">User can sign in with Google, Facebook and our own Registration System. After Authorized the user can perform CRUD with RESTFUL API.</p>                        
                    </section>
                </main>
            </div>
        )
    }
}