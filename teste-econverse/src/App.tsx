import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/global.scss"; // Importando estilos globais

function App () {
  return (
    <div>
      <Header />
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
