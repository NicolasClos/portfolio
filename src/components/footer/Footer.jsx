const Footer = ()=>{
    return(
        <footer class="footer">
            <section class="footer__proyecto">
                <div class="div_flex-item">
                    <h3>EMPEZÁ TU PROYECTO</h3>
                </div>
                <div class="div_flex-item">
                    <p>¿Interesado en que trabajemos juntos? Deberíamos arreglar por chat. Yo invito el café.</p>
                </div>
                <div class="div_flex-item">
                    <a href="#">Hagámoslo</a>
                </div>
            </section>
            <div class="footer__logo">
                <img class="footer__logo-img" alt="Logo" src="images/logo-violeta.png" />
                <p>Viviendo, aprendiendo y subiendo de nivel un dia a la vez</p>
            </div>
            <div class="footer__redes">
                <a target="blank_" href="https://wa.link/rt7iq3">
                    <div><i class="fab fa-whatsapp"></i></div><span>WhatsApp</span>
                </a>
                <a target="blank_" href="https://www.instagram.com/nicolas_clos/">
                    <div><i class="fab fa-instagram"></i></div><span>Instagram</span>
                </a>
                <a target="blank_" href="https://twitter.com/nicolasclos">
                    <div><i class="fab fa-twitter"></i></div><span>Twitter</span>
                </a>
                <a target="blank_" href="https://dribbble.com/">
                    <div><i class="fab fa-dribbble"></i></div><span>Dribbble</span>
                </a>
                <a target="blank_" href="contacto.html">
                    <div><i class="far fa-envelope"></i></div><span>Mail</span>
                </a>
                <a target="blank_" href="https://www.linkedin.com/in/nicolas-clos-46b896204/">
                    <div><i class="fab fa-linkedin-in"></i></div><span>LinkedIn</span>
                </a>
            </div>
            <div class="copyright">
                <p>Hecho por mi..</p>
                <p>© NicolasClos</p>
            </div>
    </footer>
    );
}