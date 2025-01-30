interface Product {
    id: number;
    name: string;
    image: string;
    price: number;
    description: string;
}

interface ProductModalProps {
    product: Product;
    onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>X</button>
                <img src={product.image} alt={product.name} />
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>R$ {product.price.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default ProductModal;
