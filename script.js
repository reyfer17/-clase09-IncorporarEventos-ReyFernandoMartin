class Producto {
    constructor(codigo, nombre, precio, detalle, imagen){
    this.nombre = nombre
    this.codigo = codigo
    this.precio = precio
    this.detalle = detalle
    this.imagen = imagen
    }
}

const pochocloGrande = new Producto (1, "Pochoclo Grande", 1000, "dulce, en balde", 'images/pochocloGrande.jpg')
const pochocloMediano = new Producto (2, "Pochoclo Mediano", 800, "dulce, en caja", 'images/pochocloMediano.jpg')
const pochocloChico = new Producto (3, "Pochoclo Chico", 600, "dulce, en bolsita", 'images/pochocloChico.gif')
const gaseosaGrande = new Producto (4, "Gaseosa Grande", 500, "vaso x 950ml", 'images/gaseosaGrande.jpg')
const gaseosaChica = new Producto (5, "Gaseosa Chica", 400, "botella x 500ml", 'images/gaseosaChica.jpg')
const agua = new Producto (6, "Agua", 300, "botella x 500ml", 'images/agua.png')
const chocolate = new Producto (7, "Chocolate", 800, "con leche x 300g", 'images/chocolate.jpg')

const productos = [pochocloGrande, pochocloMediano, pochocloChico, gaseosaGrande, gaseosaChica, agua, chocolate]
const productosAgregados = []
const carrito = []

const divProductos =document.getElementById("productos")
const divAgregados =document.getElementById("agregados")

const input1 = document.getElementById("input1")
const botonAgregar = document.getElementById("botonAgregar")

productos.forEach (producto => {
    divProductos.innerHTML += `
    <div class="card productos"  id="${producto.codigo}" 
    style="width: 14rem;">
        <img src="${producto.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
            <h3 class="card-text">${producto.codigo}</h3>
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">${producto.detalle}</p>
            <h2 class="card-text">$${producto.precio}</h2>
        </div>
    </div>
    `
})

input1.addEventListener("change",() =>{
    validarYAgregar(input1.value)

})
botonAgregar.addEventListener("click",() =>{
    validarYAgregar(input1.value)
})

function validarYAgregar(ingreso){
    if (ingreso  >=1 && ingreso <=7){
        alert("producto "+ingreso+" agregado al carrito")
        productosAgregados.push(parseInt(ingreso))
        let carga = new Producto
        carga = productos.filter (p => p.codigo == ingreso)
        carrito.push (carga)
        //console.log(carga.nombre)
    } else {alert("Debe ingresar un número entre 1 y 7 para agregar un producto al carrito")}
    console.log(carrito)
    console.log("Productos agregados:"+productosAgregados)
   
}

//divAgregados.innerText += carrito

