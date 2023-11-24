$(document).ready(function () {
    var cores = [
      { nome: "azul", cor: "blue" },
      { nome: "verde", cor: "green" },
      { nome: "amarelo", cor: "yellow" },
      { nome: "branco", cor: "white" },
      { nome: "preto", cor: "black" },
    ];
  
    var corAtual = 0;
  
    function scrollDown() {
      corAtual = (corAtual + 1) % cores.length;
      atualizarCor();
    }
  
    function atualizarCor() {
      var corSelecionada = cores[corAtual].cor;
      $("body").css("background-color", corSelecionada);
      
      // Adiciona a classe 'rotacionar' ao display
      $(".scroll-container").addClass("rotacionar");
      
      // Remove a classe 'rotacionar' após 1 segundo
      setTimeout(function() {
        $(".scroll-container").removeClass("rotacionar");
      }, 1000);
    }
  
    $("#scrollDownButton").on("click", function () {
      scrollDown();
    });
  
    $(".cor-fundo").on("click", function () {
      corAtual = $(this).index();
      atualizarCor();
    });
  
    $(document).keydown(function (e) {
      if (e.which === 40) {
        scrollDown();
      }
    });
  });
  