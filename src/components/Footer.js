import React, { Component } from "react";

import instagramIcon from "../assets/instagram.png";
import linkedinIcon from "../assets/linkedin.png";
import githubIcon from "../assets/github.png";
import mailIcon from "../assets/mail_icon.png";

export default class Footer extends Component {
    
    render() {
        const socialItems = [
            {
                "name":"linkedin",
                "url":"https://www.linkedin.com/in/alecbcampbeell/",
                "className":"linkedin",
                "imgsrc": linkedinIcon
            },
            {
                "name":"github",
                "url":"https://github.com/uvacoder",
                "className":"github",
                "imgsrc":githubIcon
            },
            {
                "name":"instagram",
                "url":"https://instagram.com/stylipth",
                "className":"instagram",
                "imgsrc":instagramIcon
            }
            ,
            {
                "name":"mail",
                "url":"mailto: freeunioncoder",
                "className":"mail",
                "imgsrc": mailIcon
            }
        ];
        return <React.Fragment>
            <div id="container">
                <div className="d-flex flex-row justify-content-center pt-4 pb-4">
                        {socialItems.map((item, index) =>{
                            return(
                                <div className="col-md-1" key={index} >
                                    <a href={item.url}>
                                        <i className={item.className} />
                                        <img src={item.imgsrc} alt="" width="50px"/>
                                    </a>
                                </div>
                            );
                        })}
                </div>
            </div>
        </React.Fragment>
    }
}
