function obterDadosUsuario() {
    // Solicitar o nome do usuário
    const nome = prompt("Digite seu nome:");
  
    // Solicitar o sobrenome do usuário
    const sobrenome = prompt("Digite seu sobrenome:");
  
    // Solicitar a idade do usuário
    const idade = prompt("Digite sua idade:");
  
    // Criação de um objeto com as informações do usuário
    const usuario = {
        nome: nome,
        sobrenome: sobrenome,
        idade: parseInt(idade) // Convertendo a idade para número
    };
  
    return usuario;
  }
  
  // Obter dados do primeiro usuário
  const usuario1 = obterDadosUsuario();
  
  // Obter dados do segundo usuário
  const usuario2 = obterDadosUsuario();
  
  // Comparar as idades dos dois usuários e exibir uma mensagem no console
  if (usuario1.idade > usuario2.idade) {
    console.log(`${usuario1.nome} ${usuario1.sobrenome} é mais velho(a) que ${usuario2.nome} ${usuario2.sobrenome}`);
  } else if (usuario1.idade < usuario2.idade) {
    console.log(`${usuario2.nome} ${usuario2.sobrenome} é mais velho(a) que ${usuario1.nome} ${usuario1.sobrenome}`);
  } else {
    console.log(`${usuario1.nome} ${usuario1.sobrenome} e ${usuario2.nome} ${usuario2.sobrenome} têm a mesma idade`);
  }