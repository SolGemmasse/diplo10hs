var express = require('express');
var router = express.Router();
var productosmodel = require('../../models/productosmodel');
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);




router.get('/', async function(req, res, next) {

    var productos = await productosmodel.getProductos();

    productos = productos.map(producto => { 
        if (producto.img_id) { 
            const imagen = cloudinary.image(producto.img_id, { 
                width: 100, 
                height: 100, 
                crop: 'fill' 
            }); 
            return { 
                ...producto, 
                imagen 
            } 
        } else { 
            return { 
                ...producto, 
                imagen: ''
            } 
        } 
    });

    res.render('admin/productos', {
        layout:'admin/layout',
        usuario: req.session.nombre,
        productos 

    })

});

module.exports = router;

router.get('/agregar', (req, res, next) => {
    res.render('admin/agregar', {
        layout: 'admin/layout'

    })
});

router.post('/agregar', async (req, res, next) => {
    try {

        var img_id = ''; 
        if (req.files && Object.keys(req.files).length > 0) { 
            imagen = req.files.imagen; 
            img_id = (await uploader (imagen.tempFilePath)).public_id;
        }    

        if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "") {
            await productosmodel.insertProductos ({
                ...req.body,
                img_id
            });
            res.redirect('/admin/productos')
        } else {
            res.render('admin/agregar', {
                layout: 'admin/layout',
                error: true, 
                message: 'Todos los campos son requeridos'
    
             })
    
        }
    
    } catch (error) {
        console.log(error)
        res.render('admin/agregar', {
            layout: 'admin/layout',
            error: true, 
            message: 'No se cargo el producto'
        });
    
    }
    
})

router.get('/eliminar/:id', async (req, res, next) => { 
    var id = req.params.id; 

    let producto = await productosmodel.getProductosById(id); 
    if (producto.img_id) { 
        await (destroy (producto.img_id)); 
    }

    await productosmodel.deleteProductosById(id); 
    res.redirect('/admin/productos') 
});

router.get('/modificar/:id', async (req, res, next) => { 
    var id = req.params.id; 
    var productos = await productosmodel.getProductosById(id);

    res.render('admin/modificar', { 
     layout: 'admin/layout', 
     productos 
    })
});


router.post('/modificar', async (req, res, next) => { 
    try { 

        let img_id = req.body.img_original; 
        let borrar_img_vieja = false; 
        if (req.body.img_delete === "1") { 
            img_id= null; 
            borrar_img_vieja = true; 
        } else { 
            if (req.files && Object.keys(req.files).length > 0) { 
                imagen = req.files.imagen; 
                img_id = (await uploader(imagen.tempFilePath)).public_id; 
                borrar_img_vieja = true; 
            } 
        } 
        if (borrar_img_vieja && req.body.img_original) { 
            await (destroy(req.body.img_original)); 
        }

        var obj = { 
            titulo: req.body.titulo, 
            subtitulo: req.body.subtitulo, 
            cuerpo: req.body.cuerpo, 
            img_id
        } 

        await productosmodel.modificarProductosById(obj, req.body.id); 
        res.redirect('/admin/productos'); 
    } 
    catch (error) { 
        console.log(error) 
        res.render('admin/modificar', { 
            layout: 'admin/layout', 
            error: true, 
            message: 'No se modifico el producto' 
        }) 
    } 
})
