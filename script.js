window.addEventListener('load', () => {
    const form = document.querySelector("#contact-input");
    const inputName = document.querySelector("#name-entry");
    const inputNum = document.querySelector("#number-entry");
    const list = document.querySelector("contacts");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = inputName.value;
        const number = inputNum.value;

        if (!name || !number)
        {
            alert("Please enter a name and phone number!")
            return;
        }
    })
})