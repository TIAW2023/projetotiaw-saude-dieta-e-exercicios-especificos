// Array de objetos com informações dos cards
const cards = [
    {
      id: 'Exercício Físico 1',
      nome: 'Flexão',
      descricao: 'Só mais uma.',
      imagem: '../Img_ExercicioFisico.Js/Flexão.jpg',
    },
    {
      id: 'Exercício Físico 2',
      nome: 'Caminhada',
      descricao: 'Just Walk.',
      imagem: '../Img_ExercicioFisico.Js/Caminhada.jpg',
    },
    {
      id: 'Exercício Físico 3',
      nome: 'Pular Corda',
      descricao: 'Fique atento.',
      imagem: '../Img_ExercicioFisico.Js/Pular Corda.jpg',
    },

    {
        id: 'Exercício Físico 4',
        nome: 'Alongamento',
        descricao: 'Esticando os Membros.',
        imagem: '../Img_ExercicioFisico.Js/Alongamento.jpg',
      },

      {
        id: 'Exercício Físico 5',
        nome: 'Abdominal',
        descricao: 'Posso suportar.',
        imagem: '../Img_ExercicioFisico.Js/Abdominal.jpg',
      },

      {
        id: 'Exercício Físico 6',
        nome: 'Supino',
        descricao: 'Saia da Jaula.',
        imagem: '../Img_ExercicioFisico.Js/Supino.jpg',
      },

      {
        id: 'Exercício Físico 7',
        nome: 'Esteira',
        descricao: 'Velocidade da Luz.',
        imagem: '../Img_ExercicioFisico.Js/Esteira.jpg',
      },

      {
        id: 'Exercício Físico 8',
        nome: 'Ginástica',
        descricao: 'Descrição do Card 2.',
        imagem: '../Img_ExercicioFisico.Js/Ginástica.jpg',
      },

      {
        id: 'Exercício Físico 9',
        nome: 'Ioga',
        descricao: 'Paz Interior.',
        imagem: '../Img_ExercicioFisico.Js/Ioga.jpg',
      },

      {
        id: 'Exercício Físico 10',
        nome: 'Pilates',
        descricao: 'Ajeitando a Coluna.',
        imagem: '../Img_ExercicioFisico.Js/Pilates.jpg',
      },

      {
        id: 'Exercício Físico 11',
        nome: 'Bicicleta',
        descricao: 'Sem as rodinhas.',
        imagem: '../Img_ExercicioFisico.Js/Bicicleta.jpg',
      },

      {
        id: 'Exercício Físico 12',
        nome: 'Skate',
        descricao: 'Definição de Estilo.',
        imagem: '../Img_ExercicioFisico.Js/Skate.jpg',
      },

      {
        id: 'Exercício Físico 13',
        nome: 'Patinar',
        descricao: 'Equilíbrio é Essencial.',
        imagem: '../Img_ExercicioFisico.Js/Patinar.jpg',
      },

      {
        id: 'Exercício Físico 14',
        nome: 'Patinar no Gelo',
        descricao: 'Veja o seu rastro.',
        imagem: '../Img_ExercicioFisico.Js/Patinar no gelo.jpg',
      },

      {
        id: 'Exercício Físico 15',
        nome: 'Kinect Games',
        descricao: 'Entre no Jogo.',
        imagem: '../Img_ExercicioFisico.Js/Kinect Games.png',
      },
      
    // Adicione mais objetos aqui para preencher os outros cards
  ];

  // Função para preencher os cards
  function preencherCards() {
    var str = ""
    cards.forEach((card) => {
      str += `<div class="col-md-3 m-5 rounded-circle">
      <div class="card" id="Exercício Físico 1" data-ambiente="tanto-faz" data-necessidade="não" data-duracao="rodadas" data-exercicio="exercicio1">            
      <img src="${card.imagem}" alt="Imagem do Card 1">
      <h3>${card.nome}/h3>
      <p>${card.descricao}</p>
      <a class="nav-link active text-center" href="Descrição_ExercíciosFísicos.html"><button>Ver mais</button></a>
    </div>
    </div>` /*
      const { id, nome, descricao, imagem } = card;
      const cardElement = document.getElementById(id);
      cardElement.querySelector('h3').textContent = nome;
      cardElement.querySelector('p').textContent = descricao;
      cardElement.querySelector('img').src = imagem;*/
    });

    document.querySelector("#exibirCards").innerHTML = str;

  }

  // Chama a função para preencher os cards quando o DOM estiver carregado
  document.addEventListener('DOMContentLoaded', preencherCards);