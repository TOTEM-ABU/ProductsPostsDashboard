import { useEffect, useState } from 'react';

const Products = ({ isGrid }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                setProducts(json);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            {loading && <p className="text-center text-lg font-semibold text-slate-700">Loading products...</p>}

            <div className={`grid ${isGrid ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-6`}>
                {products.map(product => (
                    <div
                        key={product.id}
                        className={`rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 ${isGrid ? "bg-gradient-to-br from-slate-100 to-slate-200" : "flex items-center gap-4 bg-gradient-to-br from-white to-gray-100"
                            } p-4`}
                    >
                        <img
                            className={`object-contain ${isGrid ? "w-full h-40" : "w-28 h-28"} rounded-md bg-white`}
                            src={product.image}
                            alt={product.title}
                        />
                        <div className="mt-4 space-y-2">
                            <h3 className="font-semibold text-lg line-clamp-2">{product.title}</h3>
                            <p className="text-indigo-700 font-bold">${product.price}</p>
                            <button className="bg-indigo-600 text-white px-4 py-1 rounded hover:bg-indigo-700 transition-all">Buy</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
