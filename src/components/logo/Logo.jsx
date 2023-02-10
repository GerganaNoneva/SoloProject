import React from "react";

export default function Logo ({type='default'}) {
    let logo;
    if (type==='default') {
        logo = <img src='./images/logo.svg' alt="Default logo"/>;
    } else if (type ==='muted') {
        logo = <img src='./images/logo-muted.svg' alt="Muted logo"/>;
    }
    return logo;
};
