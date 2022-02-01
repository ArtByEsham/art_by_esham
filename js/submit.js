function getItem(id) {
  var id = id;
  var input = document.getElementById("item");
  input.value = id;
}
$(document).ready(function () {
  $('form').submit(function (e) {
    e.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var contact = document.getElementById("contact").value;
    var address = document.getElementById("address").value;
    var message = document.getElementById("message").value;
    var payment = document.getElementById("payment").value;
    var item = document.getElementById("item").value;
    $.ajax({
      url: "php/submit.php",
      type: "POST",
      data: {
        name: name,
        email: email,
        contact: contact,
        address: address,
        message: message,
        payment: payment,
        item: item,
      },
      success: function (data) {
        console.log(data);
      },
    });
  });
});
