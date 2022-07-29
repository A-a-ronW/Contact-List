window.addEventListener('load', () => {
    const form = document.querySelector("#contact-input");
    const inputName = document.querySelector("#name-entry");
    const inputNum = document.querySelector("#number-entry");
    const list = document.querySelector("contacts");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        console.log("Submit form")
    })
})