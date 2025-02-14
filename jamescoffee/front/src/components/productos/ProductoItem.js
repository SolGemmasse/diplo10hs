import React from 'react'; 
import "../../style/productos.css"


const ProductoItem = (props) => { 
    const { title, subtitle, imagen, body} = props; 

    return ( 
        <div className="contenedor">
            <div className="productos"> 
                <h1 className='prodtitulo'>{title}</h1> 
                <h2 className='prodsubtitulo'>{subtitle}</h2> 
                <img src={imagen} alt='imagen' style={{width: 'auto', height:'auto'}}/> 
                <div dangerouslySetInnerHTML={{__html: body }} /> 
                <hr /> 
            </div> 
        </div>
    ); 
} 

export default ProductoItem;