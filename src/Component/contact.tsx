import React from "react";
import { Link } from "react-router-dom";
import "../css/bootstrap.min.css";
import "../css/templatemo-diagoona.css";

export namespace Contact 
{
    export const Body = (): JSX.Element =>
    {
        return (
            <div className="tm-row" style={{ display: "flex", flex: 1 }}>
                <div className="tm-col-left" style={{ display: "flex", justifyContent: "center"}}>
                    <section className="tm-content tm-about">
                        <h2 className="mb-4 tm-content-title">Contact Us</h2>
                        <hr className="mb-4" />
                        <div className="media my-3" style={{ display: "flex", alignItems: "center" }}>
                            <i className="fas fa-shapes fa-3x p-3 mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                                </svg>
                            </i>
                            <div className="media-body">
                                <span>knowyourneighborhood@gmail.com</span>
                            </div> 
                        </div>
                        <div className="media my-3" style={{ display: "flex", alignItems: "center" }}>
                            <i className="fas fa-draw-polygon fa-3x p-3 mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
                                    <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                                </svg>
                            </i>
                            <div className="media-body">
                                <span>012-1234567</span>
                            </div> 
                        </div>
                        <div className="media my-3" style={{ display: "flex", alignItems: "center" }}>
                            <i className="fab fa-creative-commons-share fa-3x p-3 mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                </svg>
                            </i>
                            <div className="media-body">
                                <span>7, 9, 13, Gat Lebuh China, George Town, 10300 George Town, Pulau Pinang</span>
                            </div> 
                        </div>                      
                    </section>
                </div>
                <main className="tm-col-right tm-contact-main"> 
                    <section className="tm-content tm-contact">
                        <h2 className="mb-4 tm-content-title">Google Map Navigation</h2>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.006605671628!2d100.3391897760187!3d5.41596233503986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304ac342acce72e1%3A0x9c29a8120eb9585d!2sSchool%20of%20Digital%20Technology%2C%20Wawasan%20Open%20University!5e0!3m2!1sen!2smy!4v1690639770524!5m2!1sen!2smy" width="600" height="450" style={{ borderRadius: "12px", border: "none" }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </section>
                </main>
            </div>
        )
    }
}