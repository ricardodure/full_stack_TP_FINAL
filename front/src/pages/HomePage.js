import React from 'react';
import '../styles/home.css'
import { useState, useEffect } from 'react';

const HomePage = (props) => {

    const [imagenIndex, setImagenIndex] = useState(0);

    // Lista de imágenes
    const imagenes = Array.from({ length: 5 }, (_, i) => `img/home/img${String(i + 1).padStart(2, '0')}.png`);

    useEffect(() => {
        // Cambiar la imagen cada 2 segundos
        const interval = setInterval(() => {
            setImagenIndex((prevIndex) => (prevIndex + 1) % imagenes.length);
        }, 2000);

        // Limpieza del intervalo al desmontar el componente
        return () => clearInterval(interval);
    }, [imagenes.length]);

    return (
        <main className="holder">
            <div className="homeing">
                <img src={imagenes[imagenIndex]} alt={`Imagen ${imagenIndex + 1}`} />
            </div>

            <div className="columnas">
                <div className="bienvenidos">
                    <h2>Potencia tu Vida Digital: Hardware Innovador para Gaming y Productividad</h2>
                    <p>Explora nuestro extenso catálogo de hardware diseñado para elevar tanto tus sesiones de gaming como tu productividad diaria. Desde potentes tarjetas gráficas y procesadores ideales para gamers apasionados, hasta soluciones eficientes para uso hogareño y de oficina, tenemos todo lo que necesitas para optimizar tu experiencia digital.</p>
                    <p>Ya seas un estudiante que busca un rendimiento confiable, un profesional que trabaja desde casa o un entusiasta gamer, nuestra selección de hardware de alta calidad te proporcionará el poder y la versatilidad que necesitas para enfrentar cualquier desafío.</p>
                </div>

                <div className="testimonios">
                    <h2>Comentarios</h2>
                    <div className="testimonioscroll">
                        <div className="testimonio">
                            <span className="cita">Excelente atención</span>
                            <span className="autor">Juan Perez - zapatos.com</span>
                        </div>
                        <div className="testimonio">
                            <span className="cita">Todo de calidad y a buen precio</span>
                            <span className="autor">Pedro Garcia - cualquiercosa.com</span>
                        </div>
                        <div className="testimonio">
                            <span className="cita">No tuvieron inconvenientes en cambiarme la memoria defectuosas!!</span>
                            <span className="autor">José Gonzalez - losgonzalez.com</span>
                        </div>
                        <div className="testimonio">
                            <span className="cita">Simplemente Excelente</span>
                            <span className="autor">Juan Perez - zapatos.com</span>
                        </div>
                        <div className="testimonio">
                            <span className="cita">Un lujo!!</span>
                            <span className="autor">Pedro Garcia - cualquiercosa.com</span>
                        </div>
                        <div className="testimonio">
                            <span className="cita">Sin problemas!!</span>
                            <span className="autor">José Gonzalez - losgonzalez.com</span>
                        </div>
                    </div>

                </div>

            </div>
        </main>
    );
}
export default HomePage;