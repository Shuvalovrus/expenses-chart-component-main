# Frontend Mentor - Expenses chart component solution

This is a solution to the [Expenses chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview
![desktop-preview](https://user-images.githubusercontent.com/59483799/210461440-ad44dd9c-42b2-4e92-851d-dadbe2104edb.jpg)
### The challenge

Users should be able to:

- View the bar chart and hover over the individual bars to see the correct amounts for each day
- See the current day’s bar highlighted in a different colour to the other bars
- View the optimal layout for the content depending on their device’s screen size
- See hover states for all interactive elements on the page
- **Bonus**: Use the JSON data file provided to dynamically size the bars on the chart

### Screenshot
![image](https://user-images.githubusercontent.com/59483799/210461511-f1b0dcde-dd43-49c5-a07d-a7a8edab1048.png)
### Links

- Solution URL: [https://github.com/Shuvalovrus/expenses-chart-component-main](https://github.com/Shuvalovrus/expenses-chart-component-main)
- Live Site URL: [https://shuvalovrus.github.io/expenses-chart-component-main/](https://shuvalovrus.github.io/expenses-chart-component-main/)

## My process

### Built with

- Flexbox
- SCSS
- Mock json data

### What I learned
- Learned how to work with the date.
- learned how to work fetch with mock data.
```js
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
```

## Author

- Website - [Konstantin Shuvalov](https://github.com/Shuvalovrus)
- Frontend Mentor - [@shuvalovrus](https://www.frontendmentor.io/profile/shuvalovrus)
