function showMessage() {
    alert("Hello Junaid! 🚀 Keep learning AWS and DevOps!");
}


function toggleTheme() {

    document.body.classList.toggle("dark");

    const button =
        document.querySelector(".theme-btn");

    if (document.body.classList.contains("dark")) {

        button.innerHTML = "☀️";

    } else {

        button.innerHTML = "🌙";

    }
}
