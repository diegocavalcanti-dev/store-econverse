import styles from "../styles/components/Header.module.scss";

import cartao from "../assets/images/CreditCard.svg";
import check from "../assets/images/ShieldCheck.svg";
import truck from "../assets/images/Truck.svg";
import logo from "../assets/images/logo.svg";
import cart from "../assets/images/ShoppingCart.svg";
import heart from "../assets/images/Heart.svg";
import box from "../assets/images/Group.jpg";
import lupa from "../assets/images/lupa.svg";
import person from "../assets/images/person.svg";
import coroa from "../assets/images/CrownSimple.svg";

const Header: React.FC = () => {
    return (
        <header className={styles.headerBar}>
            <div className={styles.headerShip}>
                <div>
                    <img src={check} alt="Compra Segura" />
                    <p>
                        Compra <span>100% segura</span>
                    </p>
                </div>
                <div>
                    <img src={truck} alt="Frete grátis" />
                    <p>
                        <span>Frete grátis</span> acima de R$ 200
                    </p>
                </div>
                <div>
                    <img src={cartao} alt="Parcele suas compras" />
                    <p>
                        <span>Parcele</span> suas compras
                    </p>
                </div>
            </div>

            <div className={styles.headerLogo}>
                <div>
                    <div>
                        <img src={logo} alt="Econverse Store" />
                    </div>
                    <div>
                        <input type="text" placeholder="O que você está buscando?" />
                        <img src={lupa} alt="Buscar" />
                    </div>
                    <div>
                        <img src={box} alt="Pedidos" />
                        <img src={heart} alt="Favoritos" />
                        <img src={person} alt="Perfil" />
                        <img src={cart} alt="Carrinho" />
                    </div>
                </div>
            </div>

            <nav className={styles.headerMenu}>
                <div>
                    <ul>
                        <li>TODAS AS CATEGORIAS</li>
                        <li>SUPERMERCADO</li>
                        <li>LIVROS</li>
                        <li>MODA</li>
                        <li>LANÇAMENTOS</li>
                        <li>OFERTAS DO DIA</li>
                        <li><img src={coroa} alt="Buscar" />ASSINATURA</li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;

