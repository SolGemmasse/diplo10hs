import "../style/productos.css"


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductoItem from '../components/productos/ProductoItem';


const ProductosPage = (props) => {

    const [loading, setLoading] = useState(false);
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const cargarProductos = async () => {

            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/productos');
            setProductos(response.data);
            setLoading(false);
        };

        cargarProductos();

    }, []);



    return (
        <section className="holderprod">
            <h2 className="mainprodtitulo">NUESTROS CAFES</h2>
            <h3 className="prodsubtituloh3">Conseguilos todos en nuestra tienda fisica!</h3>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <div className="productos-container">
                    {productos.map(item => (
                        <ProductoItem
                            key={item.id}
                            title={item.titulo}
                            subtitle={item.subtitulo}
                            imagen={item.imagen}
                            body={item.cuerpo}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}

export default ProductosPage;