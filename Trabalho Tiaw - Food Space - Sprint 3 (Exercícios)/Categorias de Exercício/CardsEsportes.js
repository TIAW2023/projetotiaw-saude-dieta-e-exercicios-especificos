// Array de objetos com informações dos cards
const cards = [
    {
      id: 'Esporte 1',
      nome: 'Futebol',
      descricao: 'Só mais uma.',
      imagem: '../Img_Esportes.Js/Futebol.jpg',
    },
    {
      id: 'Esporte 2',
      nome: 'Futebol Americano',
      descricao: 'Just Walk.',
      imagem: '../Img_Esportes.Js/Futebol Americano.jpg',
    },
    {
      id: 'Esporte 3',
      nome: 'Basquete',
      descricao: 'Fique atento.',
      imagem: '../Img_Esportes.Js/Basquete.jpg',
    },

    {
        id: 'Esporte 4',
        nome: 'Vólei',
        descricao: 'Esticando os Membros.',
        imagem: '../Img_Esportes.Js/Vólei.jpg',
      },

      {
        id: 'Esporte 5',
        nome: 'Boliche',
        descricao: 'Posso suportar.',
        imagem: '../Img_Esportes.Js/Boliche.jpg',
      },

      {
        id: 'Esporte 6',
        nome: 'Natação',
        descricao: 'Saia da Jaula.',
        imagem: '../Img_Esportes.Js/Natação.jpg',
      },

      {
        id: 'Esporte 7',
        nome: 'Judô',
        descricao: 'Velocidade da Luz.',
        imagem: '../Img_Esportes.Js/Judô.jpg',
      },

      {
        id: 'Esporte 8',
        nome: 'Muay Thai',
        descricao: 'Descrição do Card 2.',
        imagem: '../Img_Esportes.Js/Muay Thai.jpg',
      },

      {
        id: 'Esporte 9',
        nome: 'Karatê',
        descricao: 'Paz Interior.',
        imagem: '../Img_Esportes.Js/Karatê.jpg',
      },

      {
        id: 'Esporte 10',
        nome: 'Jiu Jitsu',
        descricao: 'Ajeitando a Coluna.',
        imagem: '../Img_Esportes.Js/Jiu Jitsu.jpg',
      },

      {
        id: 'Esporte 11',
        nome: 'Taekwondo',
        descricao: 'Sem as rodinhas.',
        imagem: '../Img_Esportes.Js/Taekwondo.jpg',
      },

      {
        id: 'Esporte 12',
        nome: 'Esgrima',
        descricao: 'Definição de Estilo.',
        imagem: '../Img_Esportes.Js/Esgrima.jpg',
      },

      {
        id: 'Esporte 13',
        nome: 'Corrida Individual',
        descricao: 'Equilíbrio é Essencial.',
        imagem: '../Img_Esportes.Js/Corrida Individual.jpg',
      },

      {
        id: 'Esporte 14',
        nome: 'Xadrez',
        descricao: 'Xeque mate.',
        imagem: '../Img_Esportes.Js/Xadrez.jpg',
      },

      {
        id: 'Esporte 15',
        nome: 'Esports',
        descricao: 'Entre no Jogo.',
        imagem: '../Img_Esportes.Js/Esports.png',
      },
      
    // Adicione mais objetos aqui para preencher os outros cards
  ];

  // Função para preencher os cards
  function preencherCards() {
    cards.forEach((card) => {
      const { id, nome, descricao, imagem } = card;
      const cardElement = document.getElementById(id);
      cardElement.querySelector('h3').textContent = nome;
      cardElement.querySelector('p').textContent = descricao;
      cardElement.querySelector('img').src = imagem;
    });
  }

  // Chama a função para preencher os cards quando o DOM estiver carregado
  document.addEventListener('DOMContentLoaded', preencherCards);