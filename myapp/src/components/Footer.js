import '../css_files/Footer.css'

const Footer = () => {
    return (
        <footer>
            <h6>Made with ❤ by PD</h6>
            <div className='social-links'>
                <a href="https://www.instagram.com/" target={'_blank'} rel={"noreferrer"} style={{ color: "rgb(240, 92, 171)" }}><i className="fab fa-instagram"></i></a>
                <a href="https://github.com/poojaduddalwar" target={'_blank'} rel={"noreferrer"} style={{ color: "white" }}><i className="fab fa-github-square"></i></a>
                <a href="https://in.linkedin.com/in/pooja-duddalwar-8a72301a9?original_referer=https%3A%2F%2Fwww.google.com%2F" target={'_blank'} rel={"noreferrer"} style={{ color: "rgb(79, 118, 233)" }}><i className="fab fa-linkedin"></i></a>
            </div>
        </footer>
    );
}

export default Footer;