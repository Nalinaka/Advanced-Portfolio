let isModalOpen = false; 
let contrastToggle = false; 
const scaleFactor = 1/20; 

// THIS CODE MAKES THE BACKGROUND SHAPES MOVE AROUND
// THE SHAPES STYLE TRANSFORM TRANSLATE WILL CHUCK THE 
// IMAGE OFF AND ON THE SCREEN (the scale factor of 20 is 
// showing that it only moves 20% total so not going off 
// screen) - this is scaling the icons!
function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    // the const isodd - makes the shapes go in different 
    // directions - so the odd shaped numbers will be moving
    // opposite the even in the below const isOdd code and 
    // boolInt code, boolean true or false, ternary operator 
    // function too.
    for (let i=0; i < shapes.length; i++) {
        const isOdd = i % 2 === 0;
        const boolInt = isOdd? -1 : 1;
        // ROTATION
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px) rotate(${x * boolInt * 10}deg)` 
    }

}

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
    if (isModalOpen) {
    isModalOpen = false; 
    return document.body.classList.remove("modal--open");
    }
  isModalOpen = true;
  document.body.classList += " modal--open";
}
