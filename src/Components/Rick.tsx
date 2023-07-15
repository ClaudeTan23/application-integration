import React from "react";

export namespace Rick 
{
    export class Ricks extends React.Component
    {
        render(): JSX.Element
        {
            return (
                <div style={{ width: "100%", height: "800px", display: "flex", justifyContent: "center" }}>
                    <iframe width="80%" height="80%" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            )
        }
    }
}