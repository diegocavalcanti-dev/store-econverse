import styles from "../styles/components/CategoryStore.module.scss";

import tecnologiaIcon from "../assets/images/tecnologia.svg";
import supermercadosIcon from "../assets/images/supermercados.svg";
import bebidasIcon from "../assets/images/bebidas.svg";
import ferramentasIcon from "../assets/images/ferramentas.svg";
import saudeIcon from "../assets/images/saude.svg";
import esportesIcon from "../assets/images/esportes.svg";
import modaIcon from "../assets/images/moda.svg";

const CategoryStore: React.FC = () => {
    return (
        <div className={styles.categoryMenu}>
            <div className={styles.container}>
                <ul>
                    <li>
                        <div className={styles.imageContainer}>
                            <img src={tecnologiaIcon} alt="Tecnologia" />
                        </div>
                        <p className={styles.categoryName}>Tecnologia</p>
                    </li>
                    <li>
                        <div className={styles.imageContainer}>
                            <img src={supermercadosIcon} alt="Supermercado" />
                        </div>
                        <p className={styles.categoryName}>Supermercado</p>
                    </li>
                    <li>
                        <div className={styles.imageContainer}>
                            <img src={bebidasIcon} alt="Bebidas" />
                        </div>
                        <p className={styles.categoryName}>Bebidas</p>
                    </li>
                    <li>
                        <div className={styles.imageContainer}>
                            <img src={ferramentasIcon} alt="Ferramentas" />
                        </div>
                        <p className={styles.categoryName}>Ferramentas</p>
                    </li>
                    <li>
                        <div className={styles.imageContainer}>
                            <img src={saudeIcon} alt="Saúde" />
                        </div>
                        <p className={styles.categoryName}>Saúde</p>
                    </li>
                    <li>
                        <div className={styles.imageContainer}>
                            <img src={esportesIcon} alt="Esportes" />
                        </div>
                        <p className={styles.categoryName}>Esportes e Fitness</p>
                    </li>
                    <li>
                        <div className={styles.imageContainer}>
                            <img src={modaIcon} alt="Moda" />
                        </div>
                        <p className={styles.categoryName}>Moda</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CategoryStore