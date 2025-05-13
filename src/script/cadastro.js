function showForm(userType) {
    // Esconde todos os formulários
    document.getElementById("meiForm").style.display = "none";
    document.getElementById("contadorForm").style.display = "none";

    // Exibe o formulário correspondente ao tipo de usuário selecionado
    if (userType === "mei") {
        document.getElementById("meiForm").style.display = "block";
    } else if (userType === "contador") {
        document.getElementById("contadorForm").style.display = "block";
    }
}

function submitForm(userType) {
    let formData;

    // Captura os dados do formulário de acordo com o tipo de usuário
    if (userType === "mei") {
        formData = {
            tipo: "mei",
            nome: document.getElementById("nomeMei").value,
            telefone: document.getElementById("telefoneMei").value,
            empresa: document.getElementById("empresaMei").value,
            email: document.getElementById("emailMei").value,
            cnpj: document.getElementById("cnpjMei").value,
            endereco: document.getElementById("enderecoMei").value,
            senha: document.getElementById("senhaMei").value
        };
    } else if (userType === "contador") {
        formData = {
            tipo: "contador",
            nome: document.getElementById("nomeContador").value,
            telefone: document.getElementById("telefoneContador").value,
            empresa: document.getElementById("empresaContador").value,
            email: document.getElementById("emailContador").value,
            cpf: document.getElementById("cpfContador").value,
            crc: document.getElementById("crcContador").value,
            endereco: document.getElementById("enderecoContador").value,
            senha: document.getElementById("senhaContador").value
        };
    }

    // Verificação simples para garantir que os campos obrigatórios estão preenchidos
    if (!formData.email || !formData.senha) {
        alert("Por favor, preencha todos os campos obrigatórios!");
        return;
    }

    // Armazena o usuário no localStorage
    localStorage.setItem('user', JSON.stringify(formData));

    // Exibe a mensagem de sucesso
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('success-message');
    messageContainer.innerHTML = "<p>Cadastro realizado com sucesso! Você será redirecionado para o login.</p>";
    document.body.appendChild(messageContainer);

    // Após 2 segundos, redireciona para a página de login
    setTimeout(function() {
        window.location.href = './login.html';
    }, 2000); // Aguardar 2 segundos antes de redirecionar
}
