import "./FooterStyles.css";

const Footer =() => {
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Sri Lanka Tourism</h1>
                    <p>Choose your favorite Destination</p>

                </div>

                <div>
                    <a href="https://www.facebook.com/tourismsrilanka.gov.lk/">
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href="https://www.instagram.com/destination_srilanka/?hl=en">
                        <i className="fa-brands fa-instagram-square"></i>
                    </a>
                    <a href="https://www.behance.net/search/projects/sri%20lanka%20tourism">
                        <i className="fa-brands fa-behance-square"></i>
                    </a>
                    <a href="https://x.com/tourismlk?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor&mx=2">
                        <i className="fa-brands fa-twitter-square"></i>
                    </a>


                </div>
            </div>

            <div className="bottom">
                <div>
                    <h4>Project</h4>
                    <a href="https://www.sltda.gov.lk/en">Changelog</a>
                    <a href="https://www.sltda.gov.lk/en/about-us">About Us</a>
                    <a href="/">License</a>
                    <a href="/">All Versions</a>
                </div>

                <div>
                    <h4>Community</h4>
                    <a href="/">GitHub</a>
                    <a href="/">Issues</a>
                    <a href="/">Project</a>
                    <a href="https://x.com/tourismlk?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor&mx=2">X</a>
                </div>

                <div>
                    <h4>Help</h4>
                    <a href="https://www.tourismawards.lk/">Support</a>
                    <a href="https://www.sltda.gov.lk/en/careers">Careers</a>
                    <a href="https://www.sltda.gov.lk/en/contact">Contact Us</a>
                </div>

                <div>
                    <h4>Others</h4>
                    <a href="https://www.sltda.gov.lk/en/terms-conditions">Terms of Service</a>
                    <a href="https://www.sltda.gov.lk/en/privacy-policy">Privacy Policy</a>
                    <a href="/">Tourism Hotline - 1912</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;
