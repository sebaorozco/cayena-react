import logoCayena from '../../images/Logo/LogoCayena-small.png';
import './FooterLogo.css'

const FooterLogo = () => {
    return (
        <>
            <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer__about">
                    <div className="footer__about__logo">
                        <a href="/"><img src={logoCayena} alt="logo Cayena" className='img__cayena'/></a>
                    </div>
                    <ul>
                        <li><b>Dir:</b> Jujuy esq. Leandro Alem - Local 2</li>
                        <li><b>Tel:</b> 0385-4214413</li>
                        <li><b>Email:</b> cayenadietetica@hotmail.com</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default FooterLogo;