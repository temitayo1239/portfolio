document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const feedback = document.getElementById("formFeedback");

    if (!name || !email || !message) {
        feedback.textContent = "Please fill in all fields.";
        feedback.style.color = "red";
    } else {
        feedback.textContent = "Message sent successfully!";
        feedback.style.color = "green";
        this.reset();
    }
});
