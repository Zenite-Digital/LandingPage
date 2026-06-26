document.addEventListener('DOMContentLoaded', function () {
    const openPrototypeBtn = document.getElementById('openPrototypeBtn');
    const prototypeModal = document.getElementById('prototypeModal');
    const closePrototypeModal = document.getElementById('closePrototypeModal');
    const cancelPrototype = document.getElementById('cancelPrototype');
    const continuePrototype = document.getElementById('continuePrototype');
    const overlay = document.querySelector('.prototype-modal-overlay');

    const PROTOTYPE_URL = 'https://www.figma.com/proto/5V5LgW75FN5GY1YqFyGLCx/Projeto-Lexus?node-id=0-1&t=i5QnS2lw77au82cx-1';

    openPrototypeBtn.addEventListener('click', function (e) {
        e.preventDefault();
        prototypeModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    function closeModal() {
        prototypeModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    closePrototypeModal.addEventListener('click', closeModal);

    cancelPrototype.addEventListener('click', closeModal);

    overlay.addEventListener('click', closeModal);

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && prototypeModal.classList.contains('active')) {
            closeModal();
        }
    });

    continuePrototype.addEventListener('click', function () {
        window.open(PROTOTYPE_URL, '_blank');
        closeModal();
    });
});