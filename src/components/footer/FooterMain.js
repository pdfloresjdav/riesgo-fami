import React from 'react';
import { Footer } from "@wfp/ui";

// Footer component
export const FooterMain = () => {
    return (
        <div className="footer-section">
        <Footer
        logo={<div><img src="./assets/idWFPp.png" alt="footer logo" className="footer-img"></img></div>}
        logoExtended={<div></div>}
        >
            &nbsp;
        </Footer>
        </div>
    )
}
