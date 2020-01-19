const purchases = [
    {id: 1, date: '01.01.2020', values: [
        {id: 1, amount: 2000, category: 'auto'},
        {id: 2, amount: 3000, category: 'food'},
        {id: 3, amount: 300, category: 'beauty'},
    ]},
    {id: 2, date: '03.01.2020', values: [
        {id: 4, amount: 3000, category: 'auto'},
        {id: 5, amount: 30000, category: 'travel'},
    ]},
    {id: 6, date: '04.01.2020', values: [
        {id: 6, amount: 3000, category: 'food'},
    ]},
];

const max = purchases.map(o => ({
    date: o.date,
    count: o.values.length
})).reduce((acc, curr) => acc.count > curr.count ? acc : curr);

const result = max.date;
console.log(result);

const stats = [
    {date: '01.01.2020', amount: 5300},
    {date: '03.01.2020', amount: 33000},
    {date: '04.01.2020', amount: 3000},
];

const maxAmount = stats.reduce((acc, curr) => acc.amount > curr.amount ? acc : curr);
console.log(maxAmount);

