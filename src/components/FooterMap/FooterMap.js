import './FooterMap.css';

const FooterMap = () => {
    return (
        <>
            <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
                <div className="footer__widget">
                    <h6>Mapa del Sitio</h6>
                        <ul>
                            <li><span>About Us</span></li>
                            <li><span>About Our Shop</span></li>
                            <li><span>Secure Shopping</span></li>
                            <li><span>Delivery infomation</span></li>
                            <li><span>Privacy Policy</span></li>
                            <li><span>Our Sitemap</span></li>
                        </ul>
                        <ul>
                            <li><span>Who We Are</span></li>
                            <li><span>Our Services</span></li>
                            <li><span>Projects</span></li>
                            <li><span>Contact</span></li>
                            <li><span>Innovation</span></li>
                            <li><span>Testimonials</span></li>
                        </ul>
                </div>
            </div>
        </>
    )
}

export default FooterMap;