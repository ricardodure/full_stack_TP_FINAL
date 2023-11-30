import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductoItem from '../components/productos/ProductoItem';
import '../styles/productos.css'

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
        <section className="holder">
            <h2>Productos</h2>
            {loading ? (
                <p>Cargando </p>
            ) : (
                productos.map(item => <ProductoItem key={item.id}
                    title={item.titulo} subtitle={item.subtitulo}
                    imagen={item.imagen} body={item.cuerpo} />)
            )}
        </section>
    );
}

export default ProductosPage;