const renderizarFormulario = document.getElementById("agregarProducto");
//const divBtnFormulario = document.getElementById("div-btn-formulario");
//const inputCodigo = document.getElementById("input-codigo");
//const inputTipo = document.getElementById("input-tipo");
//const inputColor = document.getElementById("input-color");
//const inputTalle = document.getElementById("input-talle");
//const inputStock = document.getElementById("input-stock");
//const inputPrecio = document.getElementById("input-precio");
//const inputFoto = document.getElementById("input-foto");
const formIngresar = document.getElementById("form-ingresar");


function verFormulario() {

    let mostrarFormulario = document.createElement("div")
        mostrarFormulario.innerHTML = `
            <form id="form-ingresar">
                <div class="form-titulo">
                    <label class="form-label h2">Ingrese un nuevo producto</label>
                </div>
                <hr>
                <div class="mb-3">
                    <input id="input-codigo" class="form-control me-2" type="text" placeholder="Ingrese el código de producto" required>
                    <br>
                    <input id="input-tipo" class="form-control me-2" type="text" placeholder="Tipo de producto" required>
                    <br>
                    <input id="input-color" class="form-control me-2" type="text" placeholder="Color" required>
                    <br>
                    <select id="input-talle" class="form-select" required>
                        <option selected disabled>Seleccione el talle</option>
                        <option value="s">Small</option>
                        <option value="m">Medium</option>
                        <option value="l">Large</option>
                    </select>
                    <br>
                    <input id="input-stock" class="form-control me-2" type="text" placeholder="Stock" required>
                    <br>
                    <input id="input-precio" class="form-control me-2" type="text" placeholder="Precio" required>
                    <br>
                    <input id="input-foto" class="form-control me-2" type="text" placeholder="Link de la foto del producto" required>
                    <br>
                </div>
                <hr>
                <input id="botonForm" class="btn btn-primary" type="button" value="Ingresar Producto">
            </form>
        `
        renderizarFormulario.append(mostrarFormulario);

        const botonFormulario = document.getElementById("botonForm")
        botonFormulario.addEventListener("click", () => productos.push(new Producto(inputCodigo.value, inputTipo.value, inputColor.value, inputTalle.value, inputStock.value, inputPrecio.value, inputFoto.value)));
}



////CICLO - CONDICIONAL

//let nuevoProducto = 0
//
//while (nuevoProducto < 3){
//
//    let ingreso = new Producto
//        ((prompt("Ingrese el código del producto")),
//        (prompt("Ingrese el tipo de producto (pantalon, remera, medias, etc)")),
//        (prompt("Ingrese el color")), 
//        (prompt("Ingrese el talle (S, M, L)")), 
//        (prompt("Ingrese el stock")), 
//        (prompt("Ingrese el precio de venta"))
//        (prompt("Ingrese la url de la imagen del producto")));
//        
//        productos.push(ingreso)
//
//        alert("Ha ingresado correctamente un nuevo producto");
//        
//        nuevoProducto++
//}
//
//console.log(productos)