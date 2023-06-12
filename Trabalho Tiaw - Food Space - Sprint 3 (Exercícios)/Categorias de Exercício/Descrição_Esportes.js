var exerciciosDatabase = {
    exercicio1: {
      nome: "Nome do exercício 1",
      imagens: ["imagem1.jpg", "imagem2.jpg", "imagem3.jpg"],
      topicos: [
        { titulo: "Tópico 1", descricao: "Descrição do tópico 1" },
        { titulo: "Tópico 2", descricao: "Descrição do tópico 2" }
      ],
      video: "https://www.youtube.com/watch?v=video1"
    },
    exercicio2: {
      nome: "Nome do exercício 2",
      imagens: ["imagem4.jpg", "imagem5.jpg", "imagem6.jpg"],
      topicos: [
        { titulo: "Tópico 1", descricao: "Descrição do tópico 1" },
        { titulo: "Tópico 2", descricao: "Descrição do tópico 2" }
      ],
      video: "https://www.youtube.com/watch?v=video2"
    },
    // Adicione os dados para os outros exercícios...
  };

  // Função para exibir a descrição da categoria 1
function mostrarDescricaoCategoria1() {
    var descricao = "Descrição da categoria 1.";
    alert(descricao);
}

// Função para exibir a descrição da categoria 2
function mostrarDescricaoCategoria2() {
    var descricao = "Descrição da categoria 2.";
    alert(descricao);
}

// Função para exibir a descrição da categoria 3
function mostrarDescricaoCategoria3() {
    var descricao = "Descrição da categoria 3.";
    alert(descricao);
}

// Atribuir os eventos de clique aos botões "Ver Exercícios"
document.getElementById("btn-categoria1").addEventListener("click", mostrarDescricaoCategoria1);
document.getElementById("btn-categoria2").addEventListener("click", mostrarDescricaoCategoria2);
document.getElementById("btn-categoria3").addEventListener("click", mostrarDescricaoCategoria3);