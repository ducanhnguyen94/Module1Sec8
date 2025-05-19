const fromCurrency = document.getElementById('fromCurrency');
const toCurrency = document.getElementById('toCurrency');
const amount = document.getElementById('amount');
const btn = document.getElementById('button');
let result = document.getElementById('result');
let neededData;

let exchangeRate = [
    {
        name: ['VND', 'USD'],
        rate: 25000,
        exchange: '/' 
    },
    {
        name: ['USD', 'VND'],
        rate: 25000,
        exchange: '*'
    },
    {
        name: ['VND', 'CNY'],
        rate: 3600,
        exchange: '/'
    },
    {
        name: ['CNY', 'VND'],
        rate: 3600,
        exchange: '*'
    },
    {
        name: ['CNY', 'USD'],
        rate: 7.21,
        exchange: '/'
    },
    {
        name: ['USD', 'CNY'],
        rate: 7.21,
        exchange: '*'
    }

]

function matchData() {
    let dataName = [];
    dataName.push(fromCurrency.value);
    dataName.push(toCurrency.value);
    
    for (let i = 0; i < exchangeRate.length; i++) {
        if (dataName[0] === exchangeRate[i].name[0] && dataName[1] === exchangeRate[i].name[1]) {
            neededData = exchangeRate[i];
        }
    }
}

function calculation() {
    let resultCal = eval(amount.value + neededData.exchange + neededData.rate);
    result.innerHTML = resultCal;
}



btn.addEventListener('click', () => {
    matchData();
    calculation();
    neededData = 0;
})