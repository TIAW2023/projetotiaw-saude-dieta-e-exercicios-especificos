// Array de objetos com informações dos cards
      const cards = [
        {
          id: 'Atividade Coletiva 1',
          nome: 'Futebol',
          descricao: 'Receba.',
          imagem: '../Img_AtividadesColetivas.Js/Futebol.jpg',
        },
        {
          id: 'Atividade Coletiva 2',
          nome: 'Futebol de Sabão',
          descricao: 'Cuidado onde pisa.',
          imagem: '../Img_AtividadesColetivas.Js/Futebol de Sabão.jpg',
        },
        {
          id: 'Atividade Coletiva 3',
          nome: 'Basquete',
          descricao: 'Enterrando na cesta.',
          imagem: '../Img_AtividadesColetivas.Js/Basquete.jpg',
        },

        {
            id: 'Atividade Coletiva 4',
            nome: 'Vólei',
            descricao: 'Hora de sacar.',
            imagem: '../Img_AtividadesColetivas.Js/Vólei.jpg',
          },

          {
            id: 'Atividade Coletiva 5',
            nome: 'Corrida',
            descricao: 'Saia na frente.',
            imagem: '../Img_AtividadesColetivas.Js/Corrida.jpg',
          },

          {
            id: 'Atividade Coletiva 6',
            nome: 'Queimada',
            descricao: 'Queime e sobreviva.',
            imagem: '../Img_AtividadesColetivas.Js/Queimada.jpg',
          },

          {
            id: 'Atividade Coletiva 7',
            nome: 'Tênis',
            descricao: 'Velocidade da Luz.',
            imagem: '../Img_AtividadesColetivas.Js/Tênis.jpg',
          },

          {
            id: 'Atividade Coletiva 8',
            nome: 'Queda de Braço',
            descricao: 'Aguente Firme.',
            imagem: '../Img_AtividadesColetivas.Js/Queda de Braço.jpg',
          },

          {
            id: 'Atividade Coletiva 9',
            nome: 'Pique-Esconde',
            descricao: 'Te achei.',
            imagem: '../Img_AtividadesColetivas.Js/Pique esconde.jpg',
          },

          {
            id: 'Atividade Coletiva 10',
            nome: 'Amarelinha',
            descricao: 'Faltam muitas casas.',
            imagem: '../Img_AtividadesColetivas.Js/Amarelhinha.jpg',
          },

          {
            id: 'Atividade Coletiva 11',
            nome: 'Coelho sai da toca',
            descricao: 'Sem as rodinhas.',
            imagem: '../Img_AtividadesColetivas.Js/Coelho sai da toca.jpg',
          },

          {
            id: 'Atividade Coletiva 12',
            nome: 'Peteca',
            descricao: 'Definição de Estilo.',
            imagem: '../Img_AtividadesColetivas.Js/Peteca.jpg',
          },

          {
            id: 'Atividade Coletiva 13',
            nome: 'Trilha',
            descricao: 'Equilíbrio é Essencial.',
            imagem: '../Img_AtividadesColetivas.Js/Trilha.jpg',
          },

          {
            id: 'Atividade Coletiva 14',
            nome: 'PaintBall',
            descricao: 'Rastro de Gelo.',
            imagem: '../Img_AtividadesColetivas.Js/PaintBall.jpg',
          },

          {
            id: 'Atividade Coletiva 15',
            nome: 'Jogos de Dança',
            descricao: 'Entre no Jogo.',
            imagem: '../Img_AtividadesColetivas.Js/Dance Games.jpg',
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