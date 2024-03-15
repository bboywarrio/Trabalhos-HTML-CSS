const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = document.querySelector("#nome").value;
    const email = document.querySelector("#email").value;
    const comentario = document.querySelector("#comentario").value;
    const website = document.querySelector("#website").value;

    if (!nome || !email || !comentario || !website) {
        alert("Preencha todos os campos obrigatórios!");
        return;
    }

    // Envio do formulário (substitua pelo seu método)

    console.log(`Nome: ${nome}`);
    console.log(`Email: ${email}`);
    console.log(`Comentário: ${comentario}`);
    console.log(`Website: ${website}`);

    // Exiba uma mensagem de sucesso

    alert("Comentário enviado com sucesso!");

    // Limpe o formulário

    form.reset();
});
