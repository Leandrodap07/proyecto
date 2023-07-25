const contenedorTarjetas = document.getElementById("productos-container");

/** Crea las tarjetas de productos teniendo en cuenta la lista en box.js */
function crearTarjetasProductosInicio(productos){
  productos.forEach(producto => {
    const nuevoBox = document.createElement("div");
    nuevoBox.classList = "tarjeta-producto"
    nuevoBox.innerHTML = `
    <img src="./IMG/Productos/${producto.id}.jpg" alt="Box 1">
    <h3>${producto.nombre}</h3>
    <p class="precio">$${producto.precio}</p>
    <button>Agregar al carrito</button>`
    contenedorTarjetas.appendChild(nuevoBox);
    nuevoBox.getElementsByTagName("button")[0].addEventListener("click",() => agregarAlCarrito(producto))
  });
}
crearTarjetasProductosInicio(box);