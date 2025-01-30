import React from "react";
import styles from "../styles/components/Hero.module.scss"; // arquivo SCSS

const Hero: React.FC = () => {
    return (
        <section className={styles.heroSection}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1>Venha conhecer nossas promoções</h1>
                    <p>
                        <span>50% Off</span> nos produtos
                    </p>
                    <button className={styles.ctaButton}>Ver produto</button>
                </div>
            </div>
        </section>
    )
}

export default Hero
