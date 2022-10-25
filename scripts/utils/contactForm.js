// to close modal
function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

function getFormData() {
    const firstName = document.getElementById("Firstname").value;
    const lastName = document.getElementById("Lastname").value;
    const email = document.getElementById("eMail").value;
    const Message = document.getElementById("Big").value;
    const data = { firstName, lastName, email, Message };


    return data;
}

function sendForm(event) {

    event.preventDefault();

    console.table(getFormData());


    closeModal();
    return false;

}