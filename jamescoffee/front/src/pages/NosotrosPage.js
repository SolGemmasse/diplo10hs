import "../style/nosotros.css"

const NosotrosPage = (props) => {


    return (
        <div className="maincont">
            <div className="tituloback">
                <div className="contentitulo">
                    <h1>SOBRE JAMES' COFFEE</h1>
                </div>
            </div>



            <div className="maincontenscrol">


                <div className="scrolcont">

                    <div className="introbox">
                        <h1 className="introtitulo"> SOMOS UN EMPRENDIMIENTO FAMILIAR </h1>
                        <p className="introtexto">Nos enorgullece tostar nuestro propio café, seleccionando granos de la mejor calidad para ofrecerte un sabor único en cada taza. Con un enfoque artesanal y lleno de tradición, cada sorbo refleja el esfuerzo y la pasión de nuestra familia por brindarte una experiencia auténtica y cercana.</p>
                    </div>



                    <div className="col-4">
                        <div id="list-example" className="list-group">
                            <a className="list-group-item list-group-item-action" href="#list-item-1">
                                Nuestros inicios
                            </a>
                            <a className="list-group-item list-group-item-action" href="#list-item-2">
                                Nuestros Tostadores
                            </a>
                            <a className="list-group-item list-group-item-action" href="#list-item-3">
                                Nuestro Fundador
                            </a>

                        </div>
                    </div>
                </div>


                <div className="texto">
                    <div
                        data-bs-spy="scroll"
                        data-bs-target="#list-example"
                        data-bs-smooth-scroll="true"
                        className="scrollspy-example"
                        tabIndex="0"
                        style={{ height: '600px', overflowY: 'scroll' }}
                    >
                        <h4 className="list-item" id="list-item-1">Nuestros inicios</h4>
                        <p className="parrafoinfo">
                            Nuestra cafetería nació de una pasión profunda por el café auténtico y el deseo de ofrecer algo único en cada taza. Desde el principio, decidimos dar un paso más allá de lo convencional: tostar nuestros propios granos. Con una pequeña máquina de tostado y mucha dedicación, comenzamos a experimentar con granos de distintas regiones del mundo, buscando ese sabor perfecto que solo se obtiene con un proceso artesanal. Cada grano es seleccionado con cuidado, y el tostado se realiza con precisión, respetando sus matices y características naturales. Queremos que nuestros clientes no solo disfruten de un buen café, sino que vivan una experiencia sensorial completa. Hoy, más que una cafetería, somos un espacio donde el café se convierte en arte, un lugar donde cada taza refleja el esfuerzo y la pasión que ponemos en cada paso del proceso, desde el grano hasta el último sorbo. Aquí, cada visita es una oportunidad para descubrir algo nuevo y auténtico, hecho con amor y dedicación.

                        </p>

                        <h4 className="list-item" id="list-item-2">Nuestros Tostadores</h4>
                        <p className="parrafoinfo">
                            En nuestra cafetería, el proceso de tostar el café es una tradición que cuidamos con dedicación y pasión. Seleccionamos solo los granos de la más alta calidad, provenientes de diferentes regiones del mundo, y los tostamos de manera artesanal en pequeñas cantidades. Usamos una máquina de tostado manual, lo que nos permite controlar meticulosamente el tiempo y la temperatura para resaltar los matices únicos de cada grano. A lo largo de todo el proceso, desde el momento en que los granos entran en la tostadora hasta el último toque final, nos aseguramos de que cada lote sea fresco y esté perfectamente equilibrado, creando un café con un sabor profundo, complejo y lleno de personalidad. Este cuidado artesanal no solo preserva la autenticidad del café, sino que también brinda a nuestros clientes una experiencia única, llena de aromas y sabores que solo un café tostado con amor puede ofrecer.

                        </p>

                        <h4 className="list-item" id="list-item-3">Nuestro Fundador</h4>
                        <p className="parrafoinfo">
                            James Corrigan, el fundador de nuestra cafetería, es un amante del café desde que era joven. Su pasión por esta bebida lo llevó a explorar cada aspecto de su preparación, desde el cultivo hasta el tostado. Con una visión clara de ofrecer algo auténtico, decidió fundar su propia cafetería, con un enfoque completamente artesanal. James comenzó con la idea de tostar su propio café, seleccionando cuidadosamente granos de calidad superior y controlando cada detalle del proceso para crear sabores únicos y profundos. Su dedicación y curiosidad lo impulsan a seguir aprendiendo y perfeccionando su técnica. Para James, cada taza de café es una oportunidad para compartir su amor por esta bebida y brindar a sus clientes una experiencia que va más allá del simple consumo, convirtiendo cada sorbo en una conexión auténtica con la tradición y el arte del café.

                        </p>


                    </div>
                </div>
            </div>


        </div>
    );

}

export default NosotrosPage;