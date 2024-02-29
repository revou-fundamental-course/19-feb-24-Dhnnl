function replaceName() {
let name = prompt("Please, Enter your name", "");
document.getElementById("name").innerHTML = name
}
  replaceName();
 
let tombol = document.getElementById("tombol").addEventListener("click", function() {
   
    replaceName();
})

$(document).ready(function() {
    // add smooth scrolling to all links
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            
            $('html, body').animate({
                scrollTop: 
                $(hash).offset().top
                }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
 });

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var img = document.getElementsByClassName("slideShow");
    if (n >  img.length) {
    slideIndex = 1;
    }
    if (n < 1) {
    slideIndex = img.length;
    } 
    for (i = 0; i < img.length; i++) {
    
     img[i].style.display = "none";
}   
     img[slideIndex - 1].style.display = "block";
}  
   
function validateForm() {
    const name = document.forms['message-form']['full-name'].value;
    const birthDate = document.forms['message-form']['birth-date'].value;
    const gender = document.forms['message-form']['gender'].value;
    const messages = document.forms['message-form']['messages'].value; 

    if (name == "" || birthDate == "" || gender == "" || messages == "") { 
    
    alert("Mohon Untuk Di Isi");  
  
    return false;
  } 
       
    setSenderUI(name, birthDate, gender, messages);
    
    return false;
}

function setSenderUI(name, birthDate, gender, messages) {
document.getElementById("sender-full-name").innerHTML = name;
document.getElementById("sender-birth-date").innerHTML = birthDate;
document.getElementById("sender-gender").innerHTML = gender;
document.getElementById("sender-messages").innerHTML = messages;
}
