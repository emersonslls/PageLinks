/* <--- FUNCTIONS REACT ---> */
import React, { useRef, useState, useEffect } from "react";

/* <-----  CSS -----> */
import styles from '../styles/Components/ProjectCard.module.css';

/* <-----  ASSETS - ICON -----> */
import IconArrow from '../assets/Icons/Arrow.svg'

function ProjectCard({ title, description, techIcons, link }) {

    return (
        <div className={styles.CardWrapper} >
            {/* Card do projeto */}
            <div className={styles.Card} >
                <div className={styles.Detail} />

                {/* Textos */}
                <h1 className={styles.NameProject}>{title}</h1>
                <p className={styles.Description}>{description}</p>

                {/* Tecnologias usadas */}
                <div className={styles.Techs}>
                    <div className={styles.IconsTechs}>
                        {techIcons.map((icon, index) => (
                            <img key={index} src={icon} alt="tecnologia" />
                        ))}
                    </div>
                </div>
                {/* Button para acessar o projeto */}
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <button className={styles.Btn}>  
                        <img src={IconArrow} alt="arrow" />
                    </button>
                </a>
            </div>
        </div>
    );
}

export default ProjectCard;
