/* <-----  FUNCTIONS REACT -----> */
import React, { useRef, useState, useEffect } from "react";

/* <-----  CSS -----> */
import styles from "../styles/pages/LinksPage.module.css";

/* <-----  COMPONENTS -----> */
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";

/* <-----  ASSETS - ICONS TECHS-----> */
import FigmaIcon from "../assets/Icons/Icons Techs/Figma.svg";
import ReactIcon from "../assets/Icons/Icons Techs/ReactJS.svg";
import CssIcon from "../assets/Icons/Icons Techs/CSS.svg";
/* <-----  ASSETS - ICONS REDES -----> */
import LinkedIn from "../assets/Icons/LinkedIn.svg";
import Email from "../assets/Icons/Email.svg";
import Github from "../assets/Icons/GitHub.svg";
/* <-----  ASSETS -----> */
import Foto from "../assets/Perfil.png";
import PortfolioIcon from "../assets/Icons/Portfolio.svg";
import Icon from "../assets/Vector.svg";

/* <---- AOS ANIMATIONS ----> */
import AOS from "aos";
import "aos/dist/aos.css";

function LinksPage() {
  /* Chama a animação com aos */
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);

  const meuEmail = "emersonsantossales245@gmail.com";

  /* Declara os cards dos meus projetos */

  const projects = [
    {
      title: "My Service",
      description:
        "Projeto desenvolvido no meu TCC da ETEC, com foco em Front-End e UI/UX. Sugestões são bem-vindas!",
      techIcons: [FigmaIcon, ReactIcon, CssIcon],
      linkLabel: "Veja o site no ar",
      link: "https://app-myservice.vercel.app",
    },
    {
      title: "AlphaDev’s",
      description:
        "Projeto em grupo para apresentar uma empresa fictícia, aplicando nossos conhecimentos. Feedbacks são bem-vindos!",
      techIcons: [FigmaIcon, ReactIcon, CssIcon],
      linkLabel: "Veja o site no ar",
      link: "https://alphadevs.vercel.app",
    },
    {
      title: "SupportX",
      description:
        "Projeto em grupo para apresentar uma empresa fictícia, aplicando nossos conhecimentos. Feedbacks são bem-vindos!",
      techIcons: [FigmaIcon, ReactIcon, CssIcon],
      linkLabel: "Veja o site no ar",
      link: "https://emersonsalesdev.vercel.app",
    },
  ];

  return (
    <section className={styles.LinksPage}>
      <section className={styles.sectionOne}>
        <section className={styles.sectionInformations} data-aos="fade-down">
          <img src={Foto} />
          <div className={styles.Informations}>
            <h1>Emerson Sales</h1>
            <h2>Web Developer Junior & WebDesign</h2>
          </div>
        </section>
        <section className={styles.sectionLinks}>
          <section className={styles.ContainerLink} data-aos="fade-right">
            <a
              href="https://www.linkedin.com/in/emersonssales/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.CardContainer}>
                <div className={styles.CardLink}>
                  <div className={styles.InfoLink}>
                    <div className={styles.Icon}>
                      <img src={LinkedIn} />
                    </div>
                    <p> LinkedIn </p>
                  </div>
                </div>
              </div>
            </a>
          </section>
          <section className={styles.ContainerLink} data-aos="fade-right">
            <a
              href={`mailto:${meuEmail}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.CardContainer}>
                <div className={styles.CardLink}>
                  <div className={styles.InfoLink}>
                    <div className={styles.Icon}>
                      <img src={Email} />
                    </div>
                    <p> E-mail </p>
                  </div>
                </div>
              </div>
            </a>
          </section>
          <section className={styles.ContainerLink} data-aos="fade-right">
            <a
              href="https://github.com/emersonslls"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.CardContainer}>
                <div className={styles.CardLink}>
                  <div className={styles.InfoLink}>
                    <div className={styles.Icon}>
                      <img src={Github} />
                    </div>
                    <p> Github </p>
                  </div>
                </div>
              </div>
            </a>
          </section>
          <section className={styles.ContainerLink} data-aos="fade-right">
            <a
              href="https://salesdev.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.CardContainer}>
                <div className={styles.CardLink}>
                  <div className={styles.InfoLink}>
                    <div className={styles.Icon}>
                      <img src={PortfolioIcon} />
                    </div>
                    <p> Portfólio </p>
                  </div>
                </div>
              </div>
            </a>
          </section>
        </section>
        <Footer />
      </section>
      <section className={styles.sectionTwo}>
        <div className={styles.ContainerTitle}  data-aos="fade-down">
          <h1>Meus projetos mais recentes</h1>
          <img src={Icon} />
        </div>
        {/* Grid dos projetos */}
        <section className={styles.ProjectGrid}>
          {projects.map((proj, index) => (
            <ProjectCard key={index} {...proj} />
          ))}
        </section>
      </section>
    </section>
  );
}

export default LinksPage;
