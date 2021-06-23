const openModalButton = document.querySelector('[data-modal-target');
const closeModalButtons = document.querySelectorAll('[data-close-button');
const overlay = document.getElementById('overlay');

openModalButton.addEventListener('click', () => {
    const modal = document.querySelector(openModalButton.dataset.modalTarget)
    openModal(modal)
})

overlay.addEventListener('click', () => {
    const modal = document.querySelector('.modal.active')
    modal.closeModal
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    modal.classList.remove('active')
    overlay.classList.remove('active')
}