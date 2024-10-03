let isModalOpen = false; 
let contrastToggle = false; 

// THIS CODE ALLOWS YOU TO TOGGLE DARK AND LIGHT ON THE SITE WHEN CLICKING THAT CIRCLE ICON ON RIGHT
function toggleContrast() {
    contrastToggle = !contrastToggle; 
    if (contrastToggle) {
        document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }
}


// THIS CODE DISPLAYS THE CONTACT FORM AND ALLOWS YOU TO SUBMIT CONTACT FORM
function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      "service_nmjm2wt",
      "template_nypeksg",
      event.target,
      "user_o2MKta5yqq3mx3fc"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable, fix this I will. Please contact me directly on nalinionair@gmail.com"
      );
    });
}



// THIS CODE ALLOWS THE TOGGLE TO OPEN AND CLOSE FOR CONTACT FORM
function toggleModal() {
    if (ismodalOpen) {
    isModalOpen = false; 
    return document.body.classList.remove("modal--open")
    }
  isModalOpen = true;
  document.body.classList += " modal--open";
}
