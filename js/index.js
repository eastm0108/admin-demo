var indexDataValue = {
    bindto: '#totalChart',
    data: {
        type: 'line',
        data1: 'REVENUE',
        data2: 'COST',
        data3: 'INCOME',
        //圖表資料 欄位一:資料ID，其他欄數值
        columns: [
            ['REVENUE', 7300, 7000, 5500, 7200, 5800, 6200, 7500, 7300],
            ['COST', 6100, 5500, 2000, 4000, 3800, 5500, 6500, 5000],
            ['INCOME', 1200, 1500, 3500, 3200, 2000, 700, 1000, 2300],
        ],
        //單位主色
        colors: {
            REVENUE: '#7ED321',
            COST: '#D0021B',
            INCOME: '#4A90E2',
        },
    },
    axis: {
        x: {
            //X軸名稱單位
            type: 'category',
            categories: ['6 JUN', '7 JUN', '8 JUN', '9 JUN', '10 JUN', '11 JUN', '12 JUN', '13 JUN'],
            tick: {
                fit: true,
            },
        },
        y: {
            show: true
        },
    },
    grid: {
        y: {
            //Y軸區間線
            lines: [
                { value: 1000 },
                { value: 2000 },
                { value: 3000 },
                { value: 4000 },
                { value: 5000 },
                { value: 6000 },
                { value: 7000 },
                { value: 8000 },
            ]
        }
    },
    point: {
        //圓點設計
        f: "#fff",
        r: 0,
        focus: {
            expand: {
                r: 6,
            }
        },
    },
    //圖表與按鈕padding
    padding: {
        bottom: 15
    }
}
window.onload = function () {
    //圖表效果

    //效果()
    //效果()
    //效果()
    //效果()
}
//呼叫圖表方法
var chart = c3.generate(indexDataValue);
//任務目標:改變選擇(change)，觸發圖表資料，和時間區間
//變數宣告
var indexDataSelect = document.querySelector('#indexSelect');
//方法宣告
//圖表資料顯示
function indexDataJudge(event) {
    let dateShowStart = document.querySelector('.dateStart');
    let dateShowEnd = document.querySelector('.dateEnd');
    let revenueValue = document.querySelector('.revenueValue');
    let costValue = document.querySelector('.costValue');
    let incomeValue = document.querySelector('.incomeValue');
    let valueText = event.target.value;
    switch (valueText) {
        case 'Daily':
            indexDataValue.data.columns = [
                ['REVENUE', 7300, 7000, 5500, 7200, 5800, 6200, 7500, 7300],
                ['COST', 6100, 5500, 2000, 4000, 3800, 5500, 6500, 5000],
                ['INCOME', 1200, 1500, 3500, 3200, 2000, 700, 1000, 2300],
            ];
            indexDataValue.axis.x.categories = ['6 JUN', '7 JUN', '8 JUN', '9 JUN', '10 JUN', '11 JUN', '12 JUN', '13 JUN'];
            indexDataValue.grid.y.lines = [
                { value: 1000 },
                { value: 2000 },
                { value: 3000 },
                { value: 4000 },
                { value: 5000 },
                { value: 6000 },
                { value: 7000 },
                { value: 8000 },
            ];
            dateShowStart.textContent = '2018/6/6';
            dateShowEnd.textContent = '2018/6/13';
            revenueValue.textContent = '53800';
            costValue.textContent = '38400';
            incomeValue.textContent = '15400';
            c3.generate(indexDataValue);
            break;
        case 'Weekly':
            indexDataValue.data.columns = [
                ['REVENUE', 48500, 48800, 70500, 78500],
                ['COST', 39800, 40800, 55500, 70500],
                ['INCOME', 8700, 8000, 15000, 8000],
            ];
            indexDataValue.axis.x.categories = ['1 week', '2 week', '3 week', '4 week'];
            indexDataValue.grid.y.lines = [
                { value: 10000 },
                { value: 20000 },
                { value: 30000 },
                { value: 40000 },
                { value: 50000 },
                { value: 60000 },
                { value: 70000 },
                { value: 80000 },
            ];
            dateShowStart.textContent = '2018/5/1';
            dateShowEnd.textContent = '2018/5/31';
            revenueValue.textContent = '246300';
            costValue.textContent = '206600';
            incomeValue.textContent = '39700';
            c3.generate(indexDataValue);
            break;
        case 'Monthly':
            indexDataValue.data.columns = [
                ['REVENUE', 52000, 58000, 61000, 64000, 65000, 63000, 68000, 63000, 61000, 71000, 75000, 78000],
                ['COST', 50000, 55000, 58000, 61000, 62000, 58000, 61000, 52000, 53000, 68000, 70000, 73000],
                ['INCOME', 2000, 3000, 3000, 3000, 3000, 5000, 7000, 11000, 8000, 3000, 5000, 5000],
            ];
            indexDataValue.axis.x.categories = ['Jan ', 'Feb ', 'Mar ', 'Apr ', 'May ', 'Jun ', 'Jul ', 'Aug ', 'Sep ', 'Oct ', 'Nov ', 'Dec '];
            indexDataValue.grid.y.lines = [
                { value: 10000 },
                { value: 20000 },
                { value: 30000 },
                { value: 40000 },
                { value: 50000 },
                { value: 60000 },
                { value: 70000 },
                { value: 80000 },
            ];
            dateShowStart.textContent = '2017/1';
            dateShowEnd.textContent = '2017/12';
            revenueValue.textContent = '779000';
            costValue.textContent = '721000';
            incomeValue.textContent = '58000';
            c3.generate(indexDataValue);
            break;
        case 'Yearly':
            indexDataValue.data.columns = [
                ['REVENUE', 87000, 89000, 88000],
                ['COST', 83000, 72000, 78000],
                ['INCOME', 4000, 17000, 10000],
            ];
            indexDataValue.axis.x.categories = ['2016 ', '2017 ', '2018 '];
            indexDataValue.grid.y.lines = [
                { value: 10000 },
                { value: 20000 },
                { value: 30000 },
                { value: 40000 },
                { value: 50000 },
                { value: 60000 },
                { value: 70000 },
                { value: 80000 },
                { value: 90000 },
            ]
            dateShowStart.textContent = '2016';
            dateShowEnd.textContent = '2018';
            revenueValue.textContent = '264000';
            costValue.textContent = '233000';
            incomeValue.textContent = '31000';
            c3.generate(indexDataValue);
            break;
        case 'Custom':
            indexDataValue.data.columns = [
                ['CUSTOM', 850, 1200, 1500, 2500, 2560],
            ];
            indexDataValue.data.colors.CUSTOM = '#F5A623';
            indexDataValue.axis.x.categories = ['Jan ', 'Feb ', 'Mar ', 'Apr ', 'May ', 'Jun ', 'Jul ', 'Aug ', 'Sep ', 'Oct ', 'Nov ', 'Dec '];
            indexDataValue.grid.y.lines = [
                { value: 800 },
                { value: 1000 },
                { value: 1200 },
                { value: 1400 },
                { value: 1600 },
                { value: 1800 },
                { value: 2000 },
                { value: 2200 },
                { value: 2400 },
                { value: 2600 },
                { value: 2800 },
            ];
            dateShowStart.textContent = '2018/1/1';
            dateShowEnd.textContent = 'Now';
            c3.generate(indexDataValue);
            break;
    }
}

//監聽事件區
indexDataSelect.addEventListener('change', indexDataJudge, false);