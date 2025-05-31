 // Simulación simple de guardar datos en el navegador
    document.getElementById('reviewForm').addEventListener('submit', function(event) {
      event.preventDefault();

      const nombre = document.getElementById('nombre').value;
      const reseña = document.getElementById('reseña').value;
      const calificacion = document.getElementById('calificacion').value;

      const reviewHTML = `
        <div class="review">
          <strong>${nombre}</strong>
          <div class="stars">${'⭐️'.repeat(calificacion)}</div>
          <p>${reseña}</p>
        </div>
      `;

      document.querySelector('.reviews').innerHTML += reviewHTML;

      // Limpiar el formulario
      this.reset();
    });

    function hola(){
        window.location.href = "../josue.html";
    }
      