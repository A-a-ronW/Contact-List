window.addEventListener('load', () => {
    const form = document.querySelector("#contact-input");
    const inputName = document.querySelector("#name-entry");
    const inputNum = document.querySelector("#number-entry");
    const list = document.querySelector("#contacts");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = inputName.value;
        const number = inputNum.value;

        if (!name || !number)
        {
            alert("Please enter a name and phone number!")
            return;
        }

        const contact_element = document.createElement("div");
        contact_element.classList.add("contact");

        const contactName = document.createElement("span");
        contactName.classList.add("contact-name");
        contactName.innerText = name;

        const contactNum = document.createElement("span");
        contactNum.classList.add("contact-num");
        contactNum.innerText = number;

        const editBtn = document.createElement("button");
        editBtn.classList.add("editBtn");
        editBtn.innerText = "Edit";

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("deleteBtn");
        deleteBtn.innerText = "Delete";

        contact_element.appendChild(contactName);
        contact_element.appendChild(contactNum);
        contact_element.appendChild(editBtn);
        contact_element.appendChild(deleteBtn);

        list.appendChild(contact_element);

        document.getElementById("contact-input").reset();
    })

    form.addEventListener('.e', (e) =>{
        e.preventDefault();


    })
})