const cardProducto = document.getElementById("contenedorProductos")
mostrarProductos(productos)

function mostrarProductos(arrayComoParametro) {
    arrayComoParametro.forEach(producto => {
    let productoMostrado = document.createElement("div")
    productoMostrado.innerHTML = `
    <div id="cardItem" class="cardItem">
        <div id="cardBody" class="card" style="width: 18rem;">
            <img src="${producto.foto}" class="card-img-top card-imagen" alt="...">
            <div class="card-body">
                <h5 class="card-title">${producto.tipo}</h5>
                <p class="card-text">Color ${producto.color}</p>
                <h6 class="card-title card-precio">$${producto.precio}</h6>
                <hr>
                <button id=${producto.codigo} class="btn btn-primary text-center">Agregar al carrito</button>
            </div>
        </div>
    </div>
    `
    cardProducto.append(productoMostrado);

    const agregarAlCarrito = document.getElementById(producto.codigo)
    agregarAlCarrito.addEventListener("click", () => meterAlCarrito(producto));
    agregarAlCarrito.addEventListener("click", () => console.log(producto));
})
}

function limpiarInner() {
    document.getElementById("contenedorProductos").innerHTML = ``;
    document.getElementById("carritoAbajo").innerHTML = ``;
    document.getElementById("busqueda").innerHTML = ``;
    document.getElementById("titulo-carrito").innerHTML = ``;
    document.getElementById("comprar").innerHTML = ``;
    document.getElementById("agregarProducto").innerHTML = ``;
    document.getElementById("comprar").innerHTML = ``;
}