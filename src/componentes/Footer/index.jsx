import "./Footer.css"

const Footer = () =>{
    return <footer className="footer" style={{backgroundImage:"url(/img/footer.png)"}}>
            <div className="redes">
                <a href="https://www.facebook.com/yorleis.ariasrocha.1" target="_blank">
                    <img src="/img/facebook.png" alt="Facebook"/>
                </a>
                <a href="https://www.linkedin.com/in/yorleis-arias-software/"target="_blank">
                    <img src="/img/Linkedin.png" alt="Linkedin"/>
                </a>
                <a href="https://www.instagram.com/yarias127/" target="_blank">
                    <img src="/img/instagram.png" alt="Instagram"/>
                </a>
            </div>
            <img src="/img/Logo.png" alt="org"/>
            <strong>Desarrollado por Yorleis Arias</strong>
    </footer>
}

export default Footer
