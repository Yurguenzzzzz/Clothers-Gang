const container = document.querySelector(".container");
const btnSignIn = document.getElementById("btn-sign-in");
const btnSignup = document.getElementById("btn-sign-up");
const btnIngresar = document.getElementById("btn-ingresar");

// Función para validar si todos los campos están completos
function validarFormulario(event, formulario) {
    const inputs = formulario.querySelectorAll('input');
    let valido = true;

    // Recorremos todos los campos de entrada y verificamos si están vacíos
    inputs.forEach(input => {
        if (input.value.trim() === "") {
            valido = false;
        }
    });

    if (!valido) {
        event.preventDefault();
        alert("Por favor, completa todos los campos antes de continuar.");
    }
}

// Validación para "Iniciar sesión"
btnIngresar.addEventListener("click", (event) => {
    const signInForm = document.getElementById("sign-in-form");
    validarFormulario(event, signInForm);
});

// Validación para "Registrarse"
const signUpForm = document.getElementById("sign-up-form");
signUpForm.addEventListener("submit", (event) => {
    validarFormulario(event, signUpForm);
});

// Mostrar u ocultar formularios
btnSignIn.addEventListener("click", () => {
    container.classList.remove("toggle");
});

btnSignup.addEventListener("click", () => {
    container.classList.add("toggle");
});
