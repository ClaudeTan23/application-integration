import React from "react";
import { Link } from "react-router-dom";
import "../css/bootstrap.min.css";
import "../css/templatemo-diagoona.css";

export namespace Term 
{
    export const Body = (): JSX.Element =>
    {
        return (
            <div className="tm-row" style={{ display: "flex", flex: 1, justifyContent: "center" }}>
                    <section className="tm-content tm-about">
                        <h2 className="mb-5 tm-content-title">Terms and Conditions</h2>
                        <hr className="mb-4" />
                        <div className="media my-4">
                            <div className="media-body">
                                <p>
                                    These Terms and Conditions govern your use of KYN, so please read them carefully before accessing or using the site. By using the Website, you agree to be bound by these Terms, and if you do not agree with any part of these Terms, you must not use the Website.
                                </p>
                                <p>Intellectual Property: The content, design, graphics, logos, and all other elements of the Website are protected by intellectual property laws and belong to Know Your Neighborhood or its licensors. You are granted a limited, non-exclusive, and non-transferable license to use the Website for personal, non-commercial purposes only. You must not modify, distribute, reproduce, or create derivative works based on the Website without our explicit written consent.</p>
                                <p>User Conduct: You agree to use the Website for lawful purposes only and to refrain from any activity that may disrupt or interfere with the proper functioning of the Website. Prohibited actions include but are not limited to unauthorized access, distribution of malicious software, and any activity that infringes upon the rights of others.</p>                     
                                <p>Contact Information: If you have any questions, concerns, or feedback regarding these Terms or the Website, please contact us at knowyourneighborhood@gmail.com.</p>
                                <p>By using the Website, you acknowledge that you have read, understood, and agree to be bound by these Terms and any other policies or guidelines posted on the Website. Thank you for visiting KYN Know Your Neighborhood!</p>
                            </div> 
                        </div>                     
                    </section>
            </div>
        )
    }
}