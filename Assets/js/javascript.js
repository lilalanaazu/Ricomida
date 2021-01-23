  $(function() {

      $("a").click(function(event) {
          if (this.hash !== "") {
              event.preventDefault();

              var gato = this.hash;

              $('html, body').animate({
                  scrollTop: $(gato).offset().top
              }, 800, function() {
                  window.location.hash = gato;
              });
          }
      });

      $('[data-toggle="tooltip"]').tooltip();

  });

  $("#clickeame").click(function() {
      $("p").toggle();
  });


  $("dobleclick").dblclick(function() {
      document.getElementById('dobleclick').style.color = 'red';
  });