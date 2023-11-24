class ScrollableNews {
    constructor() {
      this.currentNewsIndex = 0;
      this.newsTitles = $(".news-title");
      this.scrollUpButton = $("#scrollUpButton");
      this.scrollDownButton = $("#scrollDownButton");
  
      // Executar a rolagem inicial sem suavização
      this.scrollToIndex(this.currentNewsIndex, false);
  
      // Configurar os ouvintes de eventos
      this.scrollUpButton.on("click", () => this.scrollUp());
      this.scrollDownButton.on("click", () => this.scrollDown());
    }
  
    scrollUp() {
      if (this.currentNewsIndex > 0) {
        this.currentNewsIndex--;
        this.scrollToIndex(this.currentNewsIndex);
      }
    }
  
    scrollDown() {
      if (this.currentNewsIndex < this.newsTitles.length - 1) {
        this.currentNewsIndex++;
        this.scrollToIndex(this.currentNewsIndex);
      }
    }
  
    scrollToIndex(index, smooth = true) {
      const targetTitle = this.newsTitles.eq(index);
      targetTitle.get(0).scrollIntoView({
        behavior: smooth ? "smooth" : "auto",
        block: "start",
        inline: "nearest"
      });
    }
  }
  
  // Instanciar a classe quando o documento estiver pronto
  $(document).ready(function() {
    const scrollableNews = new ScrollableNews();
  });
  