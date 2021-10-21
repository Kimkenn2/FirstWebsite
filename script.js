let listhoverover = document.getElementById("listhoverover");
listhoverover.addEventListener("mouseenter", function( event ) {
    event.target.style.color = "pink";
    setTimeout(function() {
        event.target.style.color = "";
      }, 750);
    }, false);
    listhoverover.addEventListener("mouseover", function( event ) {
        event.target.style.color = "red";
        setTimeout(function() {
            event.target.style.color = "";
          }, 750);
        }, false);

        //

        let listhoverover2 = document.getElementById("listhoverover2");

listhoverover2.addEventListener("mouseenter", function( event ) {
  event.target.style.color = "purple";

  setTimeout(function() {
    event.target.style.color = "";
  }, 750);
}, false);

listhoverover2.addEventListener("mouseover", function( event ) {
  event.target.style.color = "orange";

  setTimeout(function() {
    event.target.style.color = "";
  }, 750);
}, false);