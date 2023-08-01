import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import "../css/header.css";

export namespace FbAuth
{
    export const Body = (): JSX.Element =>
    {
        let LOAD: boolean = false;
        const navigate: any = useNavigate();
        const [cookies, setCookies, removeCookies] = useCookies();

        useEffect((): void =>
        {
            if(!LOAD)
            {
                const FbAccessURI: Array<string> = window.location.href.split("/");
                const accessToken: string = FbAccessURI[FbAccessURI.length - 1].split("?#")[FbAccessURI[FbAccessURI.length - 1].split("?#").length - 1];
                const token: any = accessToken.split("&")[0];

                if(token.split("=")[0] === "access_token")
                {
                    const fbToken: string = token.split("=")[1];

                    fetch(`http://localhost:8080/oauth?token=${fbToken}&type=fb`)
                    .then(res => res.json())
                    .then(result =>
                    {
                        setCookies("auth", `${fbToken}%null%fb`);
                        navigate("/");
                    })
                    .catch(err => console.log(err));

                } else 
                {
                    navigate("/");
                }

                LOAD = true;
            }
        });

        return (
            <div className="load">
                <hr/><hr/><hr/><hr/>
            </div>
        )
    }
}