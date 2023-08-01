import React,{ useEffect, useRef, useState } from "react";
import "../css/form.css";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export namespace Form 
{
    export const Body = (): JSX.Element =>
    {
        const usernameR: React.RefObject<HTMLInputElement> = useRef(null);
        const passwordR: React.RefObject<HTMLInputElement> = useRef(null);
        const usernameL: React.RefObject<HTMLInputElement> = useRef(null);
        const passwordL: React.RefObject<HTMLInputElement> = useRef(null);
        const [cookies, setCookie, removeCookie] = useCookies();
        const navigate: any = useNavigate();

        let [sign, setSign]: any = useState(false);

        async function Register(): Promise<void>
        {
            if(usernameR.current!.value.trim() !== "" && passwordR.current!.value.trim() !== "")
            {
                const promise: any = await fetch(`${process.env.REACT_APP_API_URL}/register`,
                {
                    method: "POST",
                    headers:
                    {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ username: usernameR.current?.value.trim(), password: passwordR.current?.value.trim() })
                });

                if(promise.ok)
                {
                    const result: any = await promise.text();

                    if(result == "ok")
                    {
                        usernameR.current!.value = "";
                        passwordR.current!.value = "";

                        alert("Successful register.");

                    } else 
                    {
                        alert(result);
                    }
                }

            } else 
            {
                alert("please fill the empty input.")
            }
        }

        async function Login(): Promise<void>
        {
            if(usernameL.current!.value.trim() !== "" && passwordL.current!.value.trim() !== "")
            {
                const promise: any = await fetch(`${process.env.REACT_APP_API_URL}/login`,
                {
                    method: "POST",
                    headers:
                    {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ username: usernameL.current?.value.trim(), password: passwordL.current?.value.trim() })
                });

                if(promise.ok)
                {
                    const result: any = await promise.json();

                    if(result.status == "ok")
                    {
                        alert("Successful login.");
                        setCookie("auth", `${result.token}%${result.id}%${result.type}`);
                        navigate("/");

                    } else 
                    {
                        alert("Wrong username or password");
                    }
                }

            } else 
            {
                alert("please fill the empty input.")
            }
        }

        return (
            <div className="form-container">
                <div id="login-box">
                    {sign === false ?
                    <div className="left">
                        <h1>Sign up</h1>
                        
                        <input type="text" ref={usernameR} placeholder="Username" />
                        <input type="password" ref={passwordR} placeholder="Password" />
                        
                        <input type="submit" name="signup_submit" value="Sign up" onClick={Register}/>
                        <div style={{ padding: "10px 0", cursor: "pointer" }} onClick={() => setSign(true)}>Click here to sign in</div>
                    </div>
                    :
                    <div className="left">
                        <h1>Sign In</h1>
                        
                        <input type="text" ref={usernameL} placeholder="Username" />
                        <input type="password" ref={passwordL} placeholder="Password" />
                        
                        <input type="submit" name="signup_submit" value="Sign In" onClick={Login} />
                        <div style={{ padding: "10px 0", cursor: "pointer" }} onClick={() => setSign(false)} > Click here to sign up</div>
                    </div>
                    }
                    
                    <div className="right">
                        <span className="loginwith">Sign in with<br />social network</span>
                        
                        <a href={`https://www.facebook.com/v17.0/dialog/oauth?client_id=${process.env.REACT_APP_FACEBOOK_CLIENT_ID}&redirect_uri=http://localhost:3000/fbauth&response_type=token`}>
                            <button className="social-signin facebook">Log in with Facebook</button>
                        </a>
                        <a href={`https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.REACT_APP_GOOGLE_CLIENT_ID}&redirect_uri=http://localhost:3000/googleauth&response_type=token&include_granted_scopes=true&scope=https://www.googleapis.com/auth/drive.metadata.readonly&state=try_sample_request`}>
                            <button className="social-signin google">Log in with Google+</button>
                        </a>
                    </div>
                    <div className="or">OR</div>
                    </div>
            </div>
        )
    }
}