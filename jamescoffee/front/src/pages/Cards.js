import React from 'react';

const CardComponent = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12 col-md-6 col-lg-4 mb-4">
                    <div className="card">
                        <img src="/imagenes/torta3.jpg" className="card-img-top" alt="Card" />
                        <div className="card-body">
                            <h5 className="card-title">MENU CAFETERIA</h5>
                            <p className="card-text">Menú con café, tortas y otras delicias, ideal para disfrutar en cualquier momento del día."</p>
                            <a href="https://linktr.ee/strangebrewing?fbclid=PAZXh0bgNhZW0CMTEAAaY8Tcy9objy2LZkk55DhlheQWxrptvzJqLueQVzglzWo2b10k101wX_3BQ_aem_uePqI4OwXRckcrdW062nwQ" className="btn btn-primary">Ir a Menu</a>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4 mb-4">
                    <div className="card">
                        <img src="/imagenes/cafeteria.jpg" className="card-img-top" alt="Card" />
                        <div className="card-body">
                            <h5 className="card-title">DONDE ESTAMOS</h5>
                            <p className="card-text">Veni a visitarnos a nuestro local en Palermo</p>
                            <a href="https://maps.app.goo.gl/QPHNLhJL7KwcRYDs7" className="btn btn-primary">Ir a Mapa</a>
                        </div>
                    </div>
                </div>


                <div className="col-12 col-md-6 col-lg-4 mb-4">
                    <div className="card">
                        <img src="/imagenes/risoto2.jpg" className="card-img-top" alt="Card" />
                        <div className="card-body">
                            <h5 className="card-title">MENU LUNCH</h5>
                            <p className="card-text">Si venis con hambre, tambien tenemos un menu mas potente, con opciones celiacas y veganas</p>
                            <a href="https://linktr.ee/strangebrewing?fbclid=PAZXh0bgNhZW0CMTEAAaY8Tcy9objy2LZkk55DhlheQWxrptvzJqLueQVzglzWo2b10k101wX_3BQ_aem_uePqI4OwXRckcrdW062nwQ" className="btn btn-primary">Ir a Menu</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardComponent;