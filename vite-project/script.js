// Интерактив для кнопок "Добавить"
const addButtons = document.querySelectorAll('.add-btn');
const totalElem = document.getElementById('total');
let totalSum = 0;

addButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const row = e.target.closest('tr');
        const price = parseInt(row.children[3].textContent);
        totalSum += price;
        totalElem.textContent = `${totalSum} ₽`;
        row.classList.add('added');
        button.disabled = true;
        button.textContent = 'Добавлено';
    });
});

// Интерактив для сайдбара
const toggleBtn = document.getElementById('toggleSidebar');
const sidebar = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');
    toggleBtn.textContent = sidebar.classList.contains('hidden') ? 'Показать акции' : 'Скрыть акции';
});
