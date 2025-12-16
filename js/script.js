const addButtons = document.querySelectorAll('.add-btn');
const totalElem = document.getElementById('total');
let totalSum = 0;

addButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const row = e.target.closest('tr');
        const price = parseInt(row.children[3].textContent.replace(/\s/g, '')); 

        if (row.classList.contains('added')) {
            totalSum -= price;
            row.classList.remove('added');
            button.textContent = 'Добавить';
        } else {
            totalSum += price;
            row.classList.add('added');
            button.textContent = 'Удалить';
        }

        totalElem.textContent = `${totalSum} ₽`;
    });
});

const toggleBtn = document.getElementById('toggleSidebar');
const sidebar = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', () => {

    sidebar.classList.toggle('hidden');
    

    if (sidebar.classList.contains('hidden')) {
        toggleBtn.textContent = 'Показать акции';
    } else {
        toggleBtn.textContent = 'Скрыть акции';
    }
});

const maxPriceInput = document.getElementById('maxPrice');
const tableRows = document.querySelectorAll('.menu-table tbody tr');

maxPriceInput.addEventListener('input', () => {
    const maxPrice = parseInt(maxPriceInput.value) || Infinity;

    tableRows.forEach(row => {
        const price = parseInt(row.children[3].textContent.replace(/\s/g, ''));
        if (price <= maxPrice) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});
