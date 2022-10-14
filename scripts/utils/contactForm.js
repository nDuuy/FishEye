// to close modal
function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

function getFormData() {
    const firstName = document.getElementById("first")
    const lastName = document.getElementById("last")
    const email = document.getElementById("mail")
    const Message = document.getElementById("message")
    const data = { firstName, lastName, email, Message };


    return data;
}

function sendForm(event) {

    event.preventDefault();

    console.log(getFormData());
    // Envoyer 'data' à l'email du photographe avec l'id de getPhotographerId()

    closeModal();
    return false;

}