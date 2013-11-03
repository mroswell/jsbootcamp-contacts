

function makeEmailIconClickable() {
  $(".table > tbody > tr .edit").click(function() {
    var newUrl = window.location.href;
    if(newUrl.charAt(newUrl.length) != "/") {
      newUrl = newUrl + "/";
    }
    newUrl = newUrl + $(this).parent().data("contact-guid");
    window.location.href = newUrl;
  });
}

function formValidate (e) {
    if (e.value.length===0) {
        //console.log("You did not completely fill out the form");
        $('.error-msg').css('display','block');
    }
    else {
         $('.error-msg').css('display','none');
        }
}

$('#firstName').blur (function() {
    formValidate(this);
});