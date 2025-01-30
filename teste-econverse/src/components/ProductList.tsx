import { useEffect, useState } from "react";
import { getProducts } from "../services/api";

export function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(data => setProducts(data.products));
    }, []);

    return (
        <div>
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}
