import React from "react";
import '../styles/nosotros.css'

const NosotrosPage = (props) => {
    return (
        <main className="holder">
            <div className="historia">
                <h2>Historia</h2>
                <p>Nuestra empresa nació de la visión compartida de un grupo apasionado de entusiastas de la informática. Desde sus modestos inicios, nuestro compromiso ha sido claro: democratizar el acceso a la tecnología de vanguardia. </p>
                <p>Fundada para satisfacer la creciente demanda de hardware innovador tanto para gamers como para usuarios hogareños, hemos construido alianzas sólidas con los principales fabricantes.</p>
                <p>A lo largo de los años, hemos evolucionado en un destino confiable que ofrece productos de la más alta calidad. Nuestra historia es un viaje de dedicación y creencia en el impacto transformador de la tecnología en nuestras vidas.</p>
            </div>
            <div className="staff">
                <h2>Nuestro Equipo</h2>
                <div className="personas">
                    <div className="persona">
                        <img src="img/nosotros/AlejandroMendez.png" alt="Alejandro Méndez" />
                        <h5>Alejandro Méndez</h5>
                        <h6>Director Ejecutivo</h6>
                        <p>Con más de una década de experiencia en la industria, Alejandro lidera nuestra visión estratégica y dirige el equipo con pasión y dedicación, impulsando la excelencia en cada aspecto.</p>
                    </div>
                    <div className="persona">
                        <img src="img/nosotros/CarolinaHerrera.png" alt="Carolina Herrera " />
                        <h5>Carolina Herrera </h5>
                        <h6>Especialista en Tecnología de Productos</h6>
                        <p>Carolina, experta en las últimas innovaciones, asegura que nuestro catálogo ofrezca hardware de primera calidad, satisfaciendo las necesidades de gamers y usuarios cotidianos con soluciones eficientes.</p>
                    </div>
                    <div className="persona">
                        <img src="img/nosotros/DanielGonzalez.png" alt="Daniel González" />
                        <h5>Daniel González</h5>
                        <h6>Gerente de Operaciones y Logística</h6>
                        <p>Encargado de la eficiencia operativa, Daniel supervisa la cadena de suministro y logística para garantizar entregas rápidas y seguras, proporcionando una experiencia sin contratiempos a nuestros clientes.</p>
                    </div>
                    <div className="persona">
                        <img src="img/nosotros/ElenaSanchez.png" alt="Elena Sánchez" />
                        <h5>Elena Sánchez</h5>
                        <h6>Gerente de Marketing</h6>
                        <p>Liderando estrategias innovadoras, Elena impulsa la presencia de nuestra empresa. Su enfoque creativo y analítico maximiza la visibilidad del producto y fortalece las relaciones con los clientes.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default NosotrosPage;