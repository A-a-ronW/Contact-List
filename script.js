window.addEventListener('load', () => {
    const form = document.querySelector("#contact-input");
    const inputName = document.querySelector("#name-entry");
    const inputNum = document.querySelector("#number-entry");
    const list = document.querySelector("#contacts");

    //Add contact entry upon hitting 'Add' button
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

        const contactName = document.createElement("input");
        contactName.classList.add("contact-name");
        contactName.type=("text");
        contactName.value = name;
        contactName.setAttribute("readonly", "readonly");

        const contactNum = document.createElement("input");
        contactNum.classList.add("contact-num");
        contactNum.type=("text");
        contactNum.value = number;
        contactNum.setAttribute("readonly", "readonly");

        const editBtn = document.createElement("button");
        editBtn.classList.add("editBtn");
        editBtn.innerHTML = "Edit";

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("deleteBtn");
        deleteBtn.innerHTML = "Delete";

        contact_element.appendChild(contactName);
        contact_element.appendChild(contactNum);
        contact_element.appendChild(editBtn);
        contact_element.appendChild(deleteBtn);

        list.appendChild(contact_element);

        document.getElementById("contact-input").reset();

        //Allows editing contact by disabling readonly attribute
        //Save button appears once edit button is pressed and does the oppposite
        editBtn.addEventListener('click', editContact);

        //Deletes contacts once button is pressed
        deleteBtn.addEventListener('click', deleteContact);

        function editContact()
        {
            if(editBtn.innerHTML=="Edit")
            {
                editBtn.innerHTML="Save";
                contactName.removeAttribute("readonly");
                contactNum.removeAttribute("readonly");
            }
            else 
            {
                editBtn.innerHTML="Edit";
                contactName.setAttribute("readonly", "readonly");
                contactNum.setAttribute("readonly", "readonly");
            }
        }

        function deleteContact()
        {
            list.removeChild(contact_element);
        }
    })
})