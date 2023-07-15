import React from "react";

export namespace Cats 
{
    export class Cat extends React.Component
    {
        render(): JSX.Element 
        {
            return (
                <div style={{ width: "100%", height: "80vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <img style={{ width: "50%", borderRadius: "10px", boxShadow: "0 0 10px #808080" }} src="https://people.com/thmb/EsqVUOeWvgNh3L9VWRsUrouGkv8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2)/most-expensive-cats-5-1-0d89655d8eb84641b2b32716897dd487.jpg"  />
                </div>
            )    
        }
    }
}