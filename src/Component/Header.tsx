import React, { useEffect, useRef, useLayoutEffect, useState } from "react";
import "../css/header.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "../css/bootstrap.min.css";
import "../css/templatemo-diagoona.css";
import { useCookies } from "react-cookie";


export namespace Header
{
    export const Body = (): JSX.Element =>
    {
        const [cookies, setCookies, removeCookies] = useCookies();
        let LOAD: boolean = false;
        let [authorized, setAuthorized]: any = useState(false);
        let [user, setUser]: any = useState("");
        let navigate: any = useNavigate();

        const callAuth = async(): Promise<void> =>
        {
            if(cookies.auth !== undefined)
            {
                const token: Array<any> = cookies.auth.split("%");
                
                const promise: any = await fetch(`${process.env.REACT_APP_API_URL}/oauth?token=${token[0]}&type=${token[2]}`, { headers: {"Authorization": token[0], "uid": token[1], "Type": token[2]} });

                if(promise.ok)
                {
                    const result: any = await promise.json();
                    setUser(result.name);
                    setAuthorized(true);
                
                } else
                {
                    setAuthorized(false);
                    setUser("");
                    removeCookies("auth");
                }
            }
        }

        const logOut = (): void =>
        {
            setAuthorized(false);
            setUser("");
            removeCookies("auth");
            navigate("/home");
        }

        useEffect((): void =>
        {
            if(!LOAD)
            {
                callAuth();
                LOAD = true;
            }
        });
        
        return (
            <div className="body-container-header">   
                <div className="tm-row pt-4">
                    <div className="tm-col-left">
                        <div className="tm-site-header media">
                            <i className="fas fa-umbrella-beach fa-3x mt-1 tm-logo">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z"/>
                                </svg>
                            </i>
                            <div className="media-body">
                                <h1 className="tm-sitename text-uppercase">
                                    <Link className="link-tag" to="/home">K Y N</Link>
                                </h1>
                            </div>        
                        </div>
                    </div>
                    <div className="tm-col-right">
                        <nav className="navbar navbar-expand-lg" id="tm-main-nav">
                            
                            <div className="collapse navbar-collapse tm-nav" id="navbar-nav">
                                <ul className="navbar-nav text-uppercase">
                                    <li className="nav-item">
                                        <Link className="link-tag" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item active">
                                        <Link className="link-tag" to="/about">About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="link-tag" to="/contact">Contact</Link>
                                    </li>
                                    {authorized ?
                                    <li className="nav-item">
                                        <div className="user-link">
                                            {user}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                                            </svg>
                                            <div className="logout-link" onClick={logOut}>Log out</div>
                                        </div>
                                    </li>
                                    :
                                    <li className="nav-item">
                                        <Link className="link-tag" to="/signup">Sign Up</Link>
                                    </li>
                                    }                            
                                </ul>                            
                            </div>                        
                        </nav>
                    </div>
                </div>
                <Outlet />
                <div className="tm-row">       
                    <div className="tm-col-right tm-col-footer">
                        <footer className="tm-site-footer text-right">
                            <p className="mb-0">Copyright 2023 KYN
                            |
                            <Link className="link-tag" to="/term">Terms and Conditions</Link>
                            | Design: <a rel="nofollow" href="https://templatemo.com" className="tm-text-link" target="_blank">TemplateMo</a></p>
                        </footer>
                    </div>  
                </div>
            </div>
        )
    }
}
