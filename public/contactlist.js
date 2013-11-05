

function makeEmailIconClickable() {
    //tried to limit click to email icon. That was successful
    // but this pointed to a null guid. couldn't fix, so reverted function.
  $(".table > tbody > tr .").click(function() {
    var newUrl = window.location.href;
    if(newUrl.charAt(newUrl.length) != "/") {
      newUrl = newUrl + "/";
    }
    newUrl = newUrl + $(this).data("contact-guid");
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