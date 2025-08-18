import '../styles/Components/Footer.module.css';

import Logo from '../assets/Icons/New Logo.svg';  

function Footer() {
  return (
    <footer>
      <p>Feito por</p>
      <img src={Logo} />
    </footer>
  );
}

export default Footer;
