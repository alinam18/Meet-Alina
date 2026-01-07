document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('popup');
    const openButton = document.getElementById('openButton');
    const closeButton = document.getElementById('closeButton');

    openButton.onclick = openPopup;
    closeButton.onclick = closePopup;

    function openPopup() {
        console.log(popup);
        console.log("Opening popup");
        popup.classList.add('open-popup');
    }

    function closePopup() {
        console.log("Closing popup");
        popup.classList.remove('open-popup');
    }
});