document.addEventListener('DOMContentLoaded', function(){
  var element = document.querySelectorAll('.modal');
  var instances = M.Modal.init(
    element, {
      opacity:0.7,
      inDuration:500,
      outDuration:800
    }
  );
})