window.addEventListener( "scroll", function() {

    var headerElement = document.getElementById( "header" ) ;
    var rect = headerElement.getBoundingClientRect() ;
    var y = rect.top + window.pageYOffset ;
    if (y > 0) {
      headerElement.classList.remove('hidden');
    } else {
      headerElement.classList.add('hidden');
    }
  } ) ;

  var hamburger = document.getElementById('Hamburger');
  var nav = document.getElementById('Header_Nav');
  hamburger.addEventListener('click', function () {
      nav.classList.toggle("active");
  });