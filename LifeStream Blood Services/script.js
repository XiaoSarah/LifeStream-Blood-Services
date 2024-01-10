document.addEventListener('DOMContentLoaded', function() {
    const greetingElement = document.getElementById('greeting');
    const currentTime = new Date().getHours();

    if (currentTime >= 6 && currentTime < 12) {
        greetingElement.textContent = 'Good Morning';
    } else if (currentTime >= 12 && currentTime < 16) {
        greetingElement.textContent = 'Good Afternoon';
    } else {
        greetingElement.textContent = 'Good Evening';
    }
});

var slideIndex = 0;

function slideShow() {
    setTimeout(slideShow, 3000);
    var i;
    const img = document.getElementsById("slideShow");
    for (i = 0; i < img.length; i++) {
        (img[i]).style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > img.length) {
        slideIndex = 1;
    } 
    img[slideIndex-1].style.display = "block"; 
}

slideShow();

function validateForm() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;

    if (firstName === lastName) {
        alert('First name and last name cannot be the same. Please provide different names.');
        return false;
    }
    return true;
}

function toggleInterestCheckboxes() {
    var interestSection = document.getElementById('interestSection');
    var newsletterCheckbox = document.getElementById('newsletter');
    interestSection.style.display = newsletterCheckbox.checked ? 'block' : 'none';
    var emailField = document.getElementById('email');
    emailField.required = newsletterCheckbox.checked;
}

function toggleContactFields() {
    var emailField = document.getElementById('email');
    var phoneField = document.getElementById('phone');
    var emailContactRadio = document.getElementById('emailContact');
    var phoneContactRadio = document.getElementById('phoneContact');
}

