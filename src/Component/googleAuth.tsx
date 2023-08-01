import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import "../css/header.css";

export namespace GoogleAuth
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
                const googleAccessURI: Array<string> = window.location.href.split("/");
                const accessToken: string = googleAccessURI[3].split("&")[1];
                const token: any = accessToken.split("=");

                if(token[0] === "access_token")
                {
                    const googleToken: string = token[1];

                    fetch(`http://localhost:8080/oauth?token=${googleToken}&type=google`)
                    .then(res => res.json())
                    .then(result => 
                    {
                        setCookies("auth", `${googleToken}%null%google`);
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