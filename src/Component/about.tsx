import React from "react";
import { Link } from "react-router-dom";
import "../css/bootstrap.min.css";
import "../css/templatemo-diagoona.css";

export namespace About 
{
    export const Body = (): JSX.Element =>
    {
        return (
            <div className="tm-row" style={{ display: "flex", flex: 1 }}>
                <div className="tm-col-left" style={{display: "flex", justifyContent: "center", alignItems: "center", height: "500px"}}>
                    <img src="/img/rest-api.png" alt="cat.png" style={{width: "500px", borderRadius: "10px"}}/>
                </div>
                <main className="tm-col-right">
                    <section className="tm-content tm-about">
                        <h2 className="mb-5 tm-content-title">About K Y N</h2>
                        <hr className="mb-4" />
                        <div className="media my-3">
                            <i className="fas fa-shapes fa-3x p-3 mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z"/>
                                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2Zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2Z"/>
                                </svg>
                            </i>
                            <div className="media-body">
                                <p>K Y N known as Know Your Neighborhood, use to track or find your Neighborhood location.</p>
                            </div> 
                        </div>
                        <div className="media my-3">
                            <i className="fas fa-draw-polygon fa-3x p-3 mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"  viewBox="0 0 16 16">
                                    <path d="M6.646 6.24v.07H5.375v-.064c0-1.213.879-2.402 2.637-2.402 1.582 0 2.613.949 2.613 2.215 0 1.002-.6 1.667-1.287 2.43l-.096.107-1.974 2.22v.077h3.498V12H5.422v-.832l2.97-3.293c.434-.475.903-1.008.903-1.705 0-.744-.557-1.236-1.313-1.236-.843 0-1.336.615-1.336 1.306Z"/>
                                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2Zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2Z"/>
                                </svg>
                            </i>
                            <div className="media-body">
                                <p>User can sign in / sign up using Google account or Facebook account to Know Your Neighborhood.</p>
                            </div> 
                        </div>
                        <div className="media my-3">
                            <i className="fab fa-creative-commons-share fa-3x p-3 mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M7.918 8.414h-.879V7.342h.838c.78 0 1.348-.522 1.342-1.237 0-.709-.563-1.195-1.348-1.195-.79 0-1.312.498-1.348 1.055H5.275c.036-1.137.95-2.115 2.625-2.121 1.594-.012 2.608.885 2.637 2.062.023 1.137-.885 1.776-1.482 1.875v.07c.703.07 1.71.64 1.734 1.917.024 1.459-1.277 2.396-2.93 2.396-1.705 0-2.707-.967-2.754-2.144H6.33c.059.597.68 1.06 1.541 1.066.973.006 1.6-.563 1.588-1.354-.006-.779-.621-1.318-1.541-1.318Z"/>
                                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2Zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2Z"/>
                                </svg>
                            </i>
                            <div className="media-body">
                                <p>Know Your Neighborhood developed by using Spring Boot for back-end and React for front-end.</p>
                            </div> 
                        </div>
                        <div className="media my-3">
                            <i className="fas fa-bookmark fa-3x p-3 mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M7.519 5.057c.22-.352.439-.703.657-1.055h1.933v5.332h1.008v1.107H10.11V12H8.85v-1.559H4.978V9.322c.77-1.427 1.656-2.847 2.542-4.265ZM6.225 9.281v.053H8.85V5.063h-.065c-.867 1.33-1.787 2.806-2.56 4.218Z"/>
                                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2Zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2Z"/>
                                </svg>
                            </i>
                            <div className="media-body">
                                <p>Know Your Neighborhood perform RESTFUL API known as two computer systems use to exchange information securely over the internet.</p>
                            </div> 
                        </div>                        
                    </section>
                </main>
            </div>

        )
    }
}