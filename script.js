const produtos = [
    { nome: "Notebook", preco: 3500 },
    { nome: "Mouse", preco: 80 },
    { nome: "Teclado", preco: 120 },
    { nome: "Monitor", preco: 900 },
    { nome: "Headset", preco: 250 }
];

let carrinho = [];

function carregarProdutos() {

    const tabela = document.getElementById("produtosTabela");

    produtos.forEach((produto, index) => {

        tabela.innerHTML += `
            <tr>
                <td>${produto.nome}</td>
                <td>R$ ${produto.preco}</td>
                <td>
                    <button onclick="adicionar(${index})">
                        Adicionar
                    </button>
                </td>
            </tr>
        `;
    });
}

function login() {

    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let msg = document.getElementById("loginMsg");

    if (email === "" || senha === "") {

        msg.innerHTML = "Preencha todos os campos";
        msg.style.color = "red";

        return;
    }

    msg.innerHTML = "Login realizado com sucesso!";
    msg.style.color = "green";
}

function cadastrar() {

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("cadEmail").value;
    let msg = document.getElementById("cadMsg");

    if (nome.length < 3) {

        msg.innerHTML = "Nome inválido";
        msg.style.color = "red";

        return;
    }

    if (email === "") {

        msg.innerHTML = "Informe um e-mail";
        msg.style.color = "red";

        return;
    }

    msg.innerHTML = "Cadastro realizado com sucesso!";
    msg.style.color = "green";
}

function buscarProduto() {

    const texto = document
        .getElementById("pesquisa")
        .value
        .toLowerCase();

    const resultado =
        document.getElementById("resultado");

    resultado.innerHTML = "";

    produtos
        .filter(produto =>
            produto.nome.toLowerCase().includes(texto)
        )
        .forEach(produto => {

            resultado.innerHTML += `
                <li>${produto.nome}</li>
            `;
        });
}

function adicionar(index) {

    carrinho.push(produtos[index]);

    atualizarCarrinho();
}

function atualizarCarrinho() {

    const lista =
        document.getElementById("carrinho");

    lista.innerHTML = "";

    let total = 0;

    carrinho.forEach(item => {

        total += item.preco;

        lista.innerHTML += `
            <li>
                ${item.nome} - R$ ${item.preco}
            </li>
        `;
    });

    document.getElementById("total").innerHTML = total;
}

function finalizarCompra() {

    if (carrinho.length === 0) {

        alert("Seu carrinho está vazio!");

        return;
    }

    document.getElementById("modal").style.display = "block";
}

function fecharModal() {

    document.getElementById("modal").style.display = "none";
}

carregarProdutos();