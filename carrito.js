const renderizarCarrito = document.getElementById("carritoAbajo")
const btnVerCarro = document.getElementById("icono-carrito")
const tituloCarrito = document.getElementById("titulo-carrito")
const comprar = document.getElementById("comprar")

const meterAlCarrito = (producto) => {
    let productoEnCarrito = carrito.find(item => item.codigo === producto.codigo)
    if (productoEnCarrito !== undefined) {
        productoEnCarrito.cantidad = productoEnCarrito.cantidad + 1
    } else {
        carrito.push({
            codigo: producto.codigo,
            tipo: producto.tipo,
            color:producto.color,
            talle:producto.talle,
            precio:producto.precio,
            foto: producto.foto,
            cantidad: 1,
        })
    }
}

function elementosEnCarrito() {
    
    const totalCarrito = carrito.reduce((acumulador, producto) => acumulador + (producto.precio * producto.cantidad), 0)

    document.getElementById("titulo-carrito").innerHTML = `<h2>CARRITO DE COMPRAS</h2>`;
    document.getElementById("comprar").innerHTML = `
        <div id="carrito-total" class="h3">TOTAL $ ${totalCarrito}</div>
        <button id="btn-comprar" class="btn btn-primary text-center">Comprar / Enviar al LocalStorage</button>
    `;

    if (carrito.length === 0){
        limpiarInner()
        document.getElementById("carritoAbajo").innerHTML = `<h2 id="mensajeError">El carrito está vacio</h2>`;
    }else{
        carrito.forEach(producto => {
            let mostrarCarrito = document.createElement("div")
            mostrarCarrito.innerHTML = `
                <hr>
                <li id="li-carrito" class="list-group-item d-flex justify-content-between">
                    <div><img src="${producto.foto}" id="img-carrito" alt=""></div>
                    <div class="ms-2 me-auto">
                      <div id="tipo-carrito" class="fw-bold h5">${producto.tipo}</div>
                      <h4 class="h6">Color ${producto.color}</h4>
                      <h4 class="h6">Precio: ${producto.precio}</h4>
                      <h4 class="h6">Cantidad: ${producto.cantidad}</h4>
                    </div>
                    <div id="precio-carrito" class="fw-bold h4">Precio $${producto.precio * producto.cantidad}</div>
                    <span><img src="./img/basura.png" id="img-basura" alt="" title="Eliminar Productos"></span>
                </li>
                <hr>
                <hr>
            `
            renderizarCarrito.append(mostrarCarrito);
            
            const btnComprar = document.getElementById("btn-comprar")
            btnComprar.addEventListener("click", () => {
                mandarAlLocalStorage("carritoLs",JSON.stringify(carrito))
            });
        })
    }
}
btnVerCarro.addEventListener("click", () => {
    limpiarInner()
    elementosEnCarrito(carrito)
});
