import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/global.scss"; // Importando estilos globais
import Hero from "./components/Hero";
import CategoryStore from "./components/CategoryStore";

function App () {
  return (
    <div>
      <Header />
      <Hero />
      <CategoryStore />
      <main className="container">
        <h3>Substituir aqui pela vitrina de produtos</h3>
        <div className="product-grid">
          {/* Produto exemplo, colocar componentes de produtos aqui */}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
