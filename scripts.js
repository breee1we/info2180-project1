/* Add your JavaScript to this file */
document.addEventListener("DOMContentLoaded", function(){
    const form= document.querySelector("form");
    const eInput= document.querySelector("#email");
    const message= document.querySelector(".message");

    form.addEventListener("submit", function(event){
        event.preventDefault();
        const email= eInput.value.trim();

        if (email===""){
            message.textContent="Please enter a valid email address";
        }
        else{
            message.textContent="Thank you! Your email address " + email + " has been added to our mailing list!";
        }
    });
});