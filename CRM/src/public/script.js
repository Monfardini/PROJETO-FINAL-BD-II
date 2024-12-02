// URLs da API (baseado nas rotas definidas no backend)
const apiBaseUrl = 'http://localhost:3000'; // TODO: Atualize se necessário

// Elementos da interface
const content = document.getElementById('content');
const clientesBtn = document.getElementById('clientes-btn');
const produtosBtn = document.getElementById('produtos-btn');
const vendasBtn = document.getElementById('vendas-btn');

// Função para carregar clientes
async function carregarClientes() {
  const response = await fetch(`${apiBaseUrl}/clientes`);
  const clientes = await response.json();

  let html = '<h2>Clientes</h2><ul>';
  clientes.forEach(cliente => {
    html += `
      <li>
        <strong>${cliente.nome}</strong> - ${cliente.email}
        <button onclick="deletarCliente(${cliente.cliente_id})">Excluir</button>
      </li>`;
  });
  html += '</ul>';
  content.innerHTML = html;
}

// Função para carregar produtos
async function carregarProdutos() {
  const response = await fetch(`${apiBaseUrl}/produtos`);
  const produtos = await response.json();

  let html = '<h2>Produtos</h2><ul>';
  produtos.forEach(produto => {
    html += `
      <li>
        <strong>${produto.nome}</strong> - R$ ${produto.preco.toFixed(2)}
        <button onclick="deletarProduto(${produto.produto_id})">Excluir</button>
      </li>`;
  });
  html += '</ul>';
  content.innerHTML = html;
}

// Função para carregar vendas
async function carregarVendas() {
  const response = await fetch(`${apiBaseUrl}/vendas`);
  const vendas = await response.json();

  let html = '<h2>Vendas</h2><ul>';
  vendas.forEach(venda => {
    html += `
      <li>
        <strong>Venda #${venda.venda_id}</strong> - R$ ${venda.valor.toFixed(2)}
        <button onclick="deletarVenda(${venda.venda_id})">Excluir</button>
      </li>`;
  });
  html += '</ul>';
  content.innerHTML = html;
}

// Eventos dos botões
clientesBtn.addEventListener('click', carregarClientes);
produtosBtn.addEventListener('click', carregarProdutos);
vendasBtn.addEventListener('click', carregarVendas);

// Funções para excluir dados
async function deletarCliente(id) {
  await fetch(`${apiBaseUrl}/clientes/${id}`, { method: 'DELETE' });
  carregarClientes();
}

async function deletarProduto(id) {
  await fetch(`${apiBaseUrl}/produtos/${id}`, { method: 'DELETE' });
  carregarProdutos();
}

async function deletarVenda(id) {
  await fetch(`${apiBaseUrl}/vendas/${id}`, { method: 'DELETE' });
  carregarVendas();
}