import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/global.scss"; // Importando estilos globais
import Hero from "./components/Hero";

function App () {
  return (
    <div>
      <Header />
      <Hero />
      <main className="container">
        <h2>Vitrine de Produtos</h2>
        <div className="product-grid">
          {/* Produto exemplo, colocar componentes de produtos aqui */}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
