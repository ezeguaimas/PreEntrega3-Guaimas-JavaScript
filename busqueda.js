const inputBuscar = document.getElementById("inputBuscar");
const botonBuscar = document.getElementById("botonBuscar");

const buscarProducto = (aBuscar) => {
    console.log(aBuscar)

    limpiarInner()

    if (inputBuscar.value == ""){
        document.getElementById("busqueda").innerHTML = '<h2 id="mensajeError">Debe ingresar un parámetro de búsqueda</h2>'
    
    }else{ 

        let productoBuscado = productos.filter(producto => producto.tipo.includes(aBuscar));
        console.log(productoBuscado);

        if (productoBuscado.length === 0) {
            document.getElementById("busqueda").innerHTML = '<h2 id="mensajeError">No se encontró ningún producto</h2>';
        
        } else {
            mostrarProductos(productoBuscado)
        }
    }
}

botonBuscar.addEventListener("click", () => {
    buscarProducto(inputBuscar.value.toUpperCase());
    inputBuscar.value = ""
});

console.log(inputBuscar.value);
