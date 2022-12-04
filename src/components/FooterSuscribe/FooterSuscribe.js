import './FooterSuscribe.css'

const FooterSubscribe = () => {
    return (
        <div className="col-lg-4 col-md-12">
            <div className="footer__widget">
                <h6>Suscríbete a nuestro correo</h6>
                <p>Obtené información acerca de nuestras ofertas y descuentos.</p>
                <form action="#">
                    <input type="text" placeholder="Ingresa tu correo" />
                    <button type="submit" className="suscribe__btn">Suscríbete</button>
                </form>
                <div className="footer__widget__social">
                    <a href="https://api.whatsapp.com/send?phone=+5493855027799" target="_blank" rel="noreferrer"><i className="fa fa-whatsapp"></i></a>
                    <a href="https://www.instagram.com/cayenadietetica/" target="_blank" rel="noreferrer"><i className="fa fa-instagram"></i></a>
                    <a href="https://www.facebook.com/Cayena.Dietetica" target="_blank" rel="noreferrer"><i className="fa fa-facebook"></i></a>
                </div>
            </div>
        </div> 
    )
}

export default FooterSubscribe;
