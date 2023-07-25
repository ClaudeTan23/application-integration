import React, { useRef } from "react";
import "../css/webhook.css"; 

export namespace WebHook
{
    export const Body = (): React.JSX.Element =>
    {
        const inputRef: React.RefObject<HTMLInputElement> = useRef(null);
        const ApiURL: string = "http://localhost:8080/msg"

        const submit = async (): Promise<void> =>
        {
            if(inputRef.current?.value.trim() !== "")
            {
                const val: string | undefined = inputRef.current?.value.trim();
                
                const promise: any = await fetch(ApiURL, 
                {
                    method: "POST",
                    headers: 
                    {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ text: val })
                });

                if(promise.ok)
                {
                    const result: any = await promise.text();
                    
                    if(result === "ok")
                    {
                        inputRef.current!.value = "";
                        alert("message has sended!");
                    }
                }

            }

        }

        return (
            <div className="main-body">
                <h1>Webhook Integration</h1>
                <div className="title-container">Send Notification to Slack API</div>
                <div className="input-container">
                    <input type="text" autoComplete="off" placeholder="Type here..." ref={inputRef}/>
                    <button onClick={submit}>Send</button>
                </div>
            </div>
        );
    }
}