document.addEventListener("DOMContentLoaded", () => {
    mostrarLogin();
  
    // Espera o HTML carregar antes de tentar adicionar o event listener
    setTimeout(() => {
      const linkCadastroInicial = document.getElementById("linkCadastroInicial");
      if (linkCadastroInicial) {
        linkCadastroInicial.addEventListener("click", (e) => {
          e.preventDefault();
          mostrarCadastro();
        });
      }
    }, 50);
  });
  
  function mostrarCadastro() {
    const formContainer = document.getElementById('formContainer');
    formContainer.innerHTML = `
      <h2>Cadastro</h2>
      <input type="text" id="nome" placeholder="Nome completo" required>
      <input type="email" id="cadEmail" placeholder="Email" required>
      <input type="password" id="cadSenha" placeholder="Senha" required>
      <button id="btnCadastrar">Cadastrar</button>
      <div class="toggle">
        Já tem uma conta? <a href="#" id="linkLogin">Faça login</a>
      </div>
    `;
  
    document.getElementById("btnCadastrar").addEventListener("click", cadastrar);
    document.getElementById("linkLogin").addEventListener("click", (e) => {
      e.preventDefault();
      mostrarLogin();
    });
  }
  
  function mostrarLogin() {
    const formContainer = document.getElementById('formContainer');
    formContainer.innerHTML = `
      <h2>Login</h2>
      <input type="email" id="loginEmail" placeholder="Email" required>
      <input type="password" id="loginPassword" placeholder="Senha" required>
      <button id="btnLogin">Entrar</button>
      <div class="toggle">
        Não tem uma conta? <a href="#" id="linkCadastroInicial">Cadastre-se</a>
      </div>
    `;
  
    document.getElementById("btnLogin").addEventListener("click", login);
  
    // Adiciona o listener ao novo botão de cadastro
    const linkCadastroInicial = document.getElementById("linkCadastroInicial");
    if (linkCadastroInicial) {
      linkCadastroInicial.addEventListener("click", (e) => {
        e.preventDefault();
        mostrarCadastro();
      });
    }
  }

function cadastrar() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('cadEmail').value;
    const senha = document.getElementById('cadSenha').value;

    if (!nome || !email || !senha) {
        alert('Preencha todos os campos.');
        return;
    }

    localStorage.setItem('usuario', JSON.stringify({ nome, email, senha }));
    alert('Cadastro realizado com sucesso!');
    mostrarLogin();
}

function login() {
    const email = document.getElementById('loginEmail').value;
    const senha = document.getElementById('loginPassword').value;

    const usuario = JSON.parse(localStorage.getItem('usuario'));
    if (usuario && usuario.email === email && usuario.senha === senha) {
        alert(`Bem-vindo, ${usuario.nome}!`);
        window.location.href = '../index.html';
    } else {
        alert('Email ou senha incorretos.');
    }
}
  
  