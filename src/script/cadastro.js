function submitForm(userType) {
    let formData;
    let endpoint;

    // Captura os dados do formulário de acordo com o tipo de usuário
    if (userType === "mei") {
        formData = {
            nome: document.getElementById("nomeMei").value,
            telefone: document.getElementById("telefoneMei").value,
            empresa: document.getElementById("empresaMei").value,
            email: document.getElementById("emailMei").value,
            cnpj: document.getElementById("cnpjMei").value,
            endereco: document.getElementById("enderecoMei").value,
            senha: document.getElementById("senhaMei").value
        };
        endpoint = "http://localhost:3000/cadastro-mei";
    } else if (userType === "contador") {
        formData = {
            nome: document.getElementById("nomeContador").value,
            telefone: document.getElementById("telefoneContador").value,
            empresa: document.getElementById("empresaContador").value,
            email: document.getElementById("emailContador").value,
            cpf: document.getElementById("cpfContador").value,
            crc: document.getElementById("crcContador").value,
            endereco: document.getElementById("enderecoContador").value,
            senha: document.getElementById("senhaContador").value
        };
        endpoint = "http://localhost:3000/cadastro-contador";
    }

    // Verificação simples
    if (!formData.email || !formData.senha) {
        alert("Por favor, preencha todos os campos obrigatórios!");
        return;
    }

    // Envia os dados para o backend com fetch
    fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => {
        if (data.mensagem) {
            alert(data.mensagem);
        } else {
            alert("Cadastro realizado com sucesso!");
        }

        // Redireciona após 2 segundos
        setTimeout(() => {
            window.location.href = './login.html';
        }, 2000);
    })
    .catch(erro => {
        console.error('Erro ao enviar dados para o servidor:', erro);
        alert("Erro ao realizar o cadastro. Tente novamente.");
    });
}
