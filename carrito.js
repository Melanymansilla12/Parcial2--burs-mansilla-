class Carrito {
    constructor() {
        this.productos = JSON.parse(localStorage.getItem('carrito')) || [];
        this.actualizarCarrito();  
    }

    agregarProducto(producto) {
        const prod = this.productos.find(p => p.id === producto.id);
        if (prod) {
            prod.cantidad++;
        } else {
            this.productos.push({ ...producto, cantidad: 1 });
        }
        this.guardar();  
    }

    actualizarCarrito() {
        const cantidadItems = document.getElementById('items-cantidad');
        const totalCarrito = document.getElementById('carrito-total');
        const cantidadTotal = this.productos.reduce((acc, item) => acc + item.cantidad, 0);
        const precioTotal = this.productos.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
        cantidadItems.textContent = cantidadTotal;
        totalCarrito.textContent = precioTotal.toFixed(2);
    }

    guardar() {
        localStorage.setItem('carrito', JSON.stringify(this.productos));
    }

   
    limpiarCarrito() {
        localStorage.removeItem('carrito'); 
        this.productos = [];
        this.actualizarCarrito(); 
    }
}