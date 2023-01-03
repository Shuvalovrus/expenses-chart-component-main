const expensesList = document.querySelector('.expenses-chart__list');
const expensesListItem = [...document.querySelectorAll('.expenses-chart__item')];
const expensesListHints = [...document.querySelectorAll('.expenses-chart__hint')];

const currentDate = new Date();

async function getMockData () {
    let response = await fetch('./data.json');
    let result = await response.json();
    return result;
}

async function createChart () {
    const currentDayIndex = new Date().getDay() - 1;
    
    const chartItems = await getMockData();
    const maxChartItem = chartItems.reduce((acc, current) => acc.amount > current.amount ? acc : current);

    expensesListItem.forEach((item, index) => {
        let amount = chartItems[index].amount;
        if(index === currentDayIndex) item.classList.add('expenses-chart__item_current');
        item.style.height = (amount * 100 / maxChartItem.amount) + '%';

        expensesListHints[index].innerText = '$' + amount;
    } );
    
}

createChart();