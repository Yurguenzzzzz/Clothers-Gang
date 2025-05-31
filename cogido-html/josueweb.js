//var nombre = prompt("¿Cuál es tu nombre?");

  //alert("Hola, " + nombre + "! Bienvenido(a) a Clothers Gang.");



 
  // para el carrito de compras
  let carrito = [];
  let total = 0;

  // Función para agregar productos al carrito
  function agregarAlCarrito(nombre, precio) {
      carrito.push({ nombre, precio });
      total += precio;
      actualizarCarrito();
  }

  // Función para actualizar el carrito visualmente
  function actualizarCarrito() {
      const cartItems = document.getElementById('cartItems');
      cartItems.innerHTML = ''; // Limpiar los elementos actuales del carrito

      carrito.forEach((item, index) => {
          const li = document.createElement('li');
          li.textContent = `${item.nombre} - ₡${item.precio.toLocaleString()}`;
          const removeBtn = document.createElement('button');
          removeBtn.textContent = 'Eliminar';
          removeBtn.onclick = function () { eliminarDelCarrito(index); };
          li.appendChild(removeBtn);
          cartItems.appendChild(li);
      });

      document.getElementById('totalAmount').textContent = `₡${total.toLocaleString()}`;
  }

  // Función para eliminar productos del carrito
  function eliminarDelCarrito(index) {
      total -= carrito[index].precio; // Restar el precio
      carrito.splice(index, 1); // Eliminar el producto 
      actualizarCarrito(); // borrar carrito
  }

function comprar() {
    // Aquí puedes poner cualquier validación que tengas, y si está todo ok:
    window.location.href = 'Tarjeta.html';
}
