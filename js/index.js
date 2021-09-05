const modal = document.querySelector('.modal');

const btns = document.getElementsByClassName('btn');

for (const btn of btns) {

    btn.addEventListener('click', () => {
        modal.classList.add('grid');
        modal.classList.remove('hidden');
    });
}


const closeBtn = document.querySelector('#close');

closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
    modal.classList.remove('grid');
});
