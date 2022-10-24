console.log("Accessibility is Lit.");

$(document).ready(function () {
  document.addEventListener('keydown', function (e) {
    // prevents spacebar scrolling
    e.preventDefault();
    // activates when spacebar is pressed
    if (e.code == '' || e.code == 'Unidentified' || e.code == 'Space'){
      $("*:not(body)").hover(
        function (ev) {
        //EXECUTED WHEN MOUSE ENTERS AN ELEMENT
          $(".highlight").removeClass('highlight')
          $($(this)).addClass("highlight")
          speechSynthesis.speak(new SpeechSynthesisUtterance($(this).text()));

          // reads alttext or source of images
          var alttext = $(this).attr("alt")
          var srcofimg = $(this).attr("src")

          if (alttext){
            speechSynthesis.speak(new SpeechSynthesisUtterance(alttext))
          }
          else{
            speechSynthesis.speak(new SpeechSynthesisUtterance(srcofimg))
          }

          ev.stopPropagation();
        },

        // removes highlights when not hovering on item
        function (ev) {
          $($(this)).removeClass("highlight")
          $(".highlight").removeClass('highlight')
          speechSynthesis.cancel();
        }
      )
    }
      else{
        $($(this)).removeClass("highlight")
        $(".highlight").removeClass('highlight')
        speechSynthesis.cancel();
        $("*:not(body)").unbind();
      }
})})
