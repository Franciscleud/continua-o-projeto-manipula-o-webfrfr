document.addEventListener("DOMContentLoaded", function () {

    const enviarDadosBtn = document.getElementById("enviar-dados");

    enviarDadosBtn.addEventListener("click", function () {
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;

        if (nome && email) {
            alert(`Dados enviados com sucesso!\nNome: ${nome}\nEmail: ${email}`);
        } else {
            alert("preencha todos os campos antes de enviar!");
        }
    });


    const enviarComentarioBtn = document.getElementById("enviar-comentario");

    enviarComentarioBtn.addEventListener("click", function () {
        const comentario = document.getElementById("comentario").value;

        if (comentario.trim()) {
            alert("Comentário enviado com sucesso!");
            document.getElementById("comentario").value = ""; 
        } else {
            alert("escreva um comentário antes de enviar!");
        }
    });
});
