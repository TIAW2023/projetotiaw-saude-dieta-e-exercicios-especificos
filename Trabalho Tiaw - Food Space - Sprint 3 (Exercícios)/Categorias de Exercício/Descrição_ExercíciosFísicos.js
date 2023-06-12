// Função para atualizar a descrição do exercício selecionado
function atualizarDescricaoExercicio(exercicio) {
  // Atualizar o título da página
  document.getElementById("titulo-exercicio").innerText = exercicio.nome;

  // Atualizar as imagens e descrições do carrossel
  var carouselItems = document.getElementsByClassName("carousel-item");
  for (var i = 0; i < carouselItems.length; i++) {
    var carouselItem = carouselItems[i];
    var imagem = carouselItem.getElementsByTagName("img")[0];
    var descricao = carouselItem.getElementsByClassName("carousel-caption")[0];
    
    imagem.src = exercicio.imagens[i];
    descricao.getElementsByTagName("h5")[0].innerText = exercicio.titulos[i];
    descricao.getElementsByTagName("p")[0].innerText = exercicio.descricoes[i];
  }

  // Atualizar os tópicos e suas descrições
  var topicos = document.getElementById("topicos");
  topicos.innerHTML = "";
  for (var j = 0; j < exercicio.topicos.length; j++) {
    var topico = exercicio.topicos[j];
    var h2 = document.createElement("h2");
    h2.innerText = topico.titulo;
    var p = document.createElement("p");
    p.innerText = topico.descricao;
    topicos.appendChild(h2);
    topicos.appendChild(p);
  }

  // Atualizar o vídeo do YouTube
  var video = document.getElementById("video");
  video.innerHTML = '<div class="col-12 col-md-6 mx-auto">' +
    '<iframe width="560" height="315" src="' + exercicio.video + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' +
    '</div>';
}

// Objeto com os dados dos exercícios
var exercicios = {
  "exercicio1": {
    "nome": "Flexão",
    "imagens": [
      "../img.Js/Flexão.jpg",
      "https://example.com/imagem2.jpg",
      "https://example.com/imagem3.jpg"
    ],
    "titulos": ["Primeiro slide label", "Segundo slide label", "Terceiro slide label"],
    "descricoes": ["Some representative placeholder content for the first slide.", "Some representative placeholder content for the second slide.", "Some representative placeholder content for the third slide."],
    "topicos": [
      {
        "titulo": "Tópico 1",
        "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat viverra urna, id bibendum dolor efficitur vel. Praesent ut tincidunt velit. Sed laoreet mauris quam, in rutrum turpis eleifend in."
      },
      {
        "titulo": "Tópico 2",
        "descricao": "Donec sed justo ut elit aliquam rhoncus at at risus. Sed sit amet lectus nec ipsum accumsan viverra in eget dui. Integer malesuada ex sed magna convallis faucibus."
      }
    ],
    "video": "https://www.youtube.com/embed/HTZuteKDCa4"
  },

  "exercicio2": {
    "nome": "Caminhada",
    "imagens": [
      "https://example.com/imagem1.jpg",
      "https://example.com/imagem2.jpg",
      "https://example.com/imagem3.jpg"
    ],
    "titulos": ["Primeiro slide label", "Segundo slide label", "Terceiro slide label"],
    "descricoes": ["Some representative placeholder content for the first slide.", "Some representative placeholder content for the second slide.", "Some representative placeholder content for the third slide."],
    "topicos": [
      {
        "titulo": "Tópico 1",
        "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat viverra urna, id bibendum dolor efficitur vel. Praesent ut tincidunt velit. Sed laoreet mauris quam, in rutrum turpis eleifend in."
      },
      {
        "titulo": "Tópico 2",
        "descricao": "Donec sed justo ut elit aliquam rhoncus at at risus. Sed sit amet lectus nec ipsum accumsan viverra in eget dui. Integer malesuada ex sed magna convallis faucibus."
      }
    ],
    "video": "https://www.youtube.com/embed/HTZuteKDCa4"
  },
  // Adicione mais exercícios aqui
};

// Event listeners para os botões "Ver mais" dos cards de exercício
var botoesVerMais = document.querySelectorAll(".card.ver-mais");

// Iterar sobre os botões "Ver mais" e adicionar um listener de clique a cada um
botoesVerMais.forEach(function(botao) {
  botao.addEventListener("click", function() {
    var exercicioID = this.dataset.exercicio;

    // Verificar se o ID corresponde a um exercício existente
    if (exercicioID in exercicios) {
      // Obter os dados do exercício selecionado
      var exercicio = exercicios[exercicioID];

      // Atualizar a descrição do exercício na página
      atualizarDescricaoExercicio(exercicio);
    }
  });
});

