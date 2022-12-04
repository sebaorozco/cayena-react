import './FooterContainer.css';
import logoWhatsapp from "../../images/redes/whatsapp.png";
import logoInstagram from "../../images/redes/instagram.png";
import logoFacebook from "../../images/redes/facebook.png";
import FooterLogo from "../FooterLogo/FooterLogo"
import FooterMap from '../FooterMap/FooterMap';
import FooterSuscribe from '../FooterSuscribe/FooterSuscribe';
import FooterCopyright from '../FooterCopyright/FooterCopyright';



const FooterContainer = () => {

    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="row footer__line">
                        <FooterLogo />
                        <FooterMap />
                        <FooterSuscribe />
                    </div>
                    <FooterCopyright />
                </div>
            </footer>
        </>
    );
}

export default FooterContainer;