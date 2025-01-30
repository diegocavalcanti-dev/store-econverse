import { useState } from "react";
import ProductModal from "./ProductModal";

interface Product {
    id: number;
    name: string;
    image: string;
    price: number;
    description: string;
}

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>R$ {product.price.toFixed(2)}</p>
            <button onClick={() => setIsModalOpen(true)}>Ver detalhes</button>

            {isModalOpen && (
                <ProductModal product={product} onClose={() => setIsModalOpen(false)} />
            )}
        </div>
    );
};

export default ProductCard;
