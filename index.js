document.addEventListener("DOMContentLoaded", () => {
    
    const carrito = new Carrito();

   
    const botonLimpiar = document.getElementById('limpiar-carrito');
    botonLimpiar.addEventListener('click', () => {
        carrito.limpiarCarrito();
    });

    
    const productos = [
        {
            id: 1,
            nombre: "Agua prebiótica mango rosa",
            descripcion: "Calma, refresca e hidrata. Repone sales y minerales naturales. Fórmula no grasa.",
            precio: 9512,
            imagen: "imagenes/producto-1.jpg",
            categoria: "Línea 'TODO DIA'"
        },
        {
            id: 2,
            nombre: "Jabones en barra puro vegetal mango rosa",
            descripcion: "Limpieza purificante y textura cremosa. Piel perfumada y protegida. Mantiene la hidratación natural de la piel.",
            precio: 7871,
            imagen: "imagenes/producto-2.jpg",
            categoria: "Línea 'TODO DIA'"
        },
        {
            id: 3,
            nombre: "Crema nutritiva dátiles y canela",
            descripcion: "Tecnología inteligente, piel profundamente nutrida. Acelera la renovación celular. Piel saludable e iluminada.",
            precio: 14240,
            imagen: "imagenes/producto-3.jpg",
            categoria: "Línea 'TODO DIA'"
        },
        {
            id: 4,
            nombre: "Perfume maracuyá",
            descripcion: "Cítrico floral. Maracuyá nocturno, Bergamota, Mandarina, Hierba limón. Vegano.",
            precio: 36020,
            imagen: "imagenes/producto-4.jpg",
            categoria: "Línea 'EKOS'"
        },
        {
            id: 5,
            nombre: "Crema para manos maracuyá",
            descripcion: "Calma, protege e hidrata. Combate indicadores de estrés cutáneo. Textura ligera. Vegano.",
            precio: 9580,
            imagen: "imagenes/producto-5.jpg",
            categoria: "Línea 'EKOS'"
        },
        {
            id: 6,
            nombre: "Jabón líquido exfoliante",
            descripcion: "Este jabón líquido corporal con partículas exfoliantes hechas con semillas naturales del maracuyá, exfolia suavemente la piel, dejándola limpia, perfumada y renovada.",
            precio: 7930,
            imagen: "imagenes/producto-6.jpg",
            categoria: "Línea 'EKOS'"
        },
        {
            id: 7,
            nombre: "Clásico Femenino",
            descripcion: "Deslumbrante explosión cítrica de bergamota y naranja, con notas femeninas de jazmín.",
            precio: 34741,
            imagen: "imagenes/producto-7.jpg",
            categoria: "Línea 'KAIAK'"
        },
        {
            id: 8,
            nombre: "Clásico Masculino",
            descripcion: "Una fragancia acuática. Una combinación icónica de notas aromáticas, cítricas y acuosas, que aportan una poderosa frescura.",
            precio: 34741,
            imagen: "imagenes/producto-8.jpg",
            categoria: "Línea 'KAIAK'"
        },
        {
            id: 9,
            nombre: "Urbe Masculino",
            descripcion: "El inusual contraste entre la frescura acuática y la calidez de la copaiba, un ingrediente de la biodiversidad brasileña.",
            precio: 49630,
            imagen: "imagenes/producto-9.jpg",
            categoria: "Línea 'KAIAK'"
        }
    ];

    function mostrarProductos(listaProductos) {
        let contenedor = document.getElementById('productos');
        contenedor.innerHTML = ''; 
    
        listaProductos.forEach(producto => {
            
            let div = document.createElement('div');
            div.setAttribute('class', 'producto');
        
           
            let img = document.createElement('img');
            img.setAttribute('src', producto.imagen);
            img.setAttribute('alt', producto.nombre);
            img.setAttribute('class', 'producto-img');
        
           
            let nombre = document.createElement('h3');
            nombre.setAttribute('class', 'producto-nombre');
            nombre.innerText = producto.nombre;
        
           
            let precio = document.createElement('p');
            precio.setAttribute('class', 'producto-precio');
            precio.innerText = `$${producto.precio}`;
        
            
            let boton = document.createElement('button');
            boton.setAttribute('class', 'btn-agregar');
            boton.innerText = 'Agregar al carrito';
            boton.addEventListener('click', () => {
                carrito.agregarProducto(producto);
                carrito.actualizarCarrito();
            });

            
            let botonDescripcion = document.createElement('button');
            botonDescripcion.setAttribute('class', 'btn-descripcion');
            botonDescripcion.innerText = 'Ver descripción';
            botonDescripcion.addEventListener('click', () => {
                mostrarModalDescripcion(producto);
            });
        
           
            div.appendChild(img);
            div.appendChild(nombre);
            div.appendChild(precio);
            div.appendChild(boton);
            div.appendChild(botonDescripcion);
        
            
            contenedor.appendChild(div);
        });
    }

    
    mostrarProductos(productos);

    
    const selectCategoria = document.getElementById('categoria');
    const selectOrdenar = document.getElementById('ordenar');

   
    selectCategoria.addEventListener('input', filtrosProductos);
    selectOrdenar.addEventListener('input', filtrosProductos);

    
    function filtrosProductos() {
        const categoriaSeleccionada = selectCategoria.value;
        let productosFiltrados;

        
        if (categoriaSeleccionada === 'todos') {
            productosFiltrados = productos;
        } else {
            productosFiltrados = productos.filter(producto => producto.categoria === categoriaSeleccionada);
        }

        const ordenSeleccionado = selectOrdenar.value;

       
        if (ordenSeleccionado === 'menor-mayor') {
            productosFiltrados.sort((a, b) => a.precio - b.precio);
        } else if (ordenSeleccionado === 'mayor-menor') {
            productosFiltrados.sort((a, b) => b.precio - a.precio);
        }

       
        mostrarProductos(productosFiltrados);
    }

    
    function mostrarModalDescripcion(producto) {
        
        const modal = document.createElement('div');
        modal.classList.add('modal-descripcion');

        
        const modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');

       
        const nombre = document.createElement('h3');
        nombre.textContent = producto.nombre;
        modalContent.appendChild(nombre);

        
        const descripcion = document.createElement('p');
        descripcion.textContent = producto.descripcion;
        modalContent.appendChild(descripcion);

       
        const botonCerrar = document.createElement('button');
        botonCerrar.textContent = 'Cerrar';
        botonCerrar.onclick = () => modal.remove();
        modalContent.appendChild(botonCerrar);

        
        modal.appendChild(modalContent);
        document.body.appendChild(modal);

       
        modal.classList.add('mostrar');
    }
});