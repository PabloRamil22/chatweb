const socket = io();
let connectedUsers = document.getElementById("connectedUsers");

// Obtener el ID del usuario actual desde una variable global que puedes definir en el HTML
const currentUserId = document.getElementById("currentUserId").value;

socket.on('usuarios_actualizados', (usuarios) => {
    // Limpiar la lista de usuarios conectados
    connectedUsers.innerHTML = '';

    // Filtrar y añadir cada usuario a la lista, excluyendo el usuario actual
    usuarios.forEach(user => {
        if (user._id !== currentUserId) {
            const li = document.createElement('li');
            li.id = user._id;
            li.textContent = user.name;
            connectedUsers.appendChild(li);
        }
    });
});

document.getElementById("btnEnviar").onclick = () => {
    let texto = document.getElementById("texto").value;
    socket.emit("mensaje", texto);
};
