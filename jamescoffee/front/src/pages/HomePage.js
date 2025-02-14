import "../style/home.css"
import CarouselCom from './Carousel';
import CardComponent from './Cards';
import CarouselCom2 from './Carousel2';


import React from "react";

const HomePage = (props) => {
    return (

        <main className="holder">



            <div className="columnas">
                <div className="bienvenidos">
                    <h2 className="bientitulo">BIENVENIDOS AL MEJOR CAFE DE BUENOS AIRES</h2>
                    <p className="bientexto">En nuestra cafetería nos dedicamos a ofrecerte una experiencia única con cafés de calidad excepcional. Cada taza está llena de sabor, frescura y el cálido ambiente porteño, creado para que disfrutes de un momento especial en cada sorbo</p>
                </div>
            </div>

            <div className="carouselbox">
                <CarouselCom />
                <div className="boxderecha">
                    <h2 className="cafeteriatitulo">NUESTRA CAFETERIA</h2>
                    <p className="cafeteriatexto">Ubicada en el vibrante corazón de Buenos Aires, nuestra cafetería es un refugio perfecto para los amantes del buen café y los momentos de conexión. Con un ambiente acogedor y una decoración que fusiona lo moderno con lo clásico, ofrecemos una experiencia única donde cada detalle está pensado para hacerte sentir como en casa. Nuestros baristas expertos preparan cada bebida con pasión, utilizando solo los mejores granos seleccionados.</p>
                </div>
            </div>

            <div className="cardcontainer">
                <div className="boxmedio">
                    <h2 className="titulomedio">VENI A CONOCERNOS</h2>
                    <p className="textomedio">Vení a disfrutar de un ambiente único, con un café de calidad y la calidez de un espacio pensado para vos, donde todo el mundo, incluyendo mascotas, es bienvenido.</p>
                </div>

                <div>
                    <CardComponent />
                </div>
            </div>


            <div className="carouselbox">

                <div className="boxderecha">
                    <h2 className="cafeteriatitulo">NUESTRO CAFE ARTESANAL</h2>
                    <p className="cafeteriatexto">El café artesanal es mucho más que una bebida: es un arte. Cada grano es cultivado, seleccionado y tostado con esmero, buscando resaltar sus características únicas. Nuestro café artesanal se caracteriza por su frescura y sabor auténtico, logrado gracias a procesos cuidadosos y una atención al detalle en cada etapa. Desde el origen hasta la taza, cada paso es pensado para ofrecerte una experiencia de café única, que te conecta con la tradición y el esfuerzo detrás de cada sorbo.</p>
                </div>
                <CarouselCom2 />
            </div>


        </main>



    );


}

export default HomePage;