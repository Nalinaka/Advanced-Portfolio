

function contact (event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";
    emailjs
    .sendForm(
        'service_nmjm2wt',
        'template_nypeksg',
        event.target,
        'o2MKta5yqq3mx3fc'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
    }).catch (() => {
        loading.classList.remove("modal__overlay--visible");
        alert (
        "The email service is temporarily unavailable, fix this I will. Please contact me directly on nalinionair@gmail.com"
        );
    })
}

function ToggleModal() {
    // toggle modal
}