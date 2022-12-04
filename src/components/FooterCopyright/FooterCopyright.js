import './FooterCopyright.css'

const FooterCopyright = () => {
    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="footer__copyright">
                    <div className="footer__copyright__text">
                        <p>Copyright &copy;<b>{new Date().getFullYear()}</b> | Cayena Almacén Orgánico & Natural | Santiago del Estero, Argentina. 
                                Desarrollado por <b>SONet</b>
                        </p>
                    </div>
                    <div className="footer__copyright__payment">
                        <i className="fa-brands fa-cc-paypal"></i>
                        <i className="fa-brands fa-cc-visa"></i>
                        <i className="fa-brands fa-cc-mastercard"></i>
                        <i className="fa-brands fa-cc-amex"></i>
                        <i className="fa-solid fa-money-bill-1-wave"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FooterCopyright;