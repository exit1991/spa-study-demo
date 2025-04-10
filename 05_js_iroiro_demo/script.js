'use strict';

// ボタン1: HTML生成／削除
document.querySelector('.btn01')?.addEventListener('click', () => {
    const btn01View = document.querySelector('.btn01-view');
    if (btn01View.innerHTML === '') {
        btn01View.innerHTML = `
            <section>
                <h3>HTML生成</h3>
                <p>これは<strong>生成された</strong>HTMLです。</p>
            </section>
        `;
    } else {
        btn01View.innerHTML = '';
    }
});

// ボタン2: URL変更・履歴追加
let counter = 0;
const btn02 = document.querySelector('.btn02')?.addEventListener('click', () => {
    history.pushState(null, '', `/page${++counter}`);
});

// ボタン3: URL変更・履歴追加
document.querySelector('.btn03-tokyo')?.addEventListener('click', async () => {
    await fetchReport(130000);
});
document.querySelector('.btn03-kanagawa')?.addEventListener('click', async () => {
    await fetchReport(140000);
});
document.querySelector('.btn03-chiba')?.addEventListener('click', async () => {
    await fetchReport(120000);
});
document.querySelector('.btn03-saitama')?.addEventListener('click', async () => {
    await fetchReport(110000);
});
async function fetchReport(areaCode) {
    const response = await fetch(`https://www.jma.go.jp/bosai/forecast/data/forecast/${areaCode}.json`);
    const jsonData = await response.json();
    
    const dateStr = jsonData[0].reportDatetime.substring(0, 10);
    const timeStr = jsonData[0].reportDatetime.substring(11, 16);
    const area = jsonData[0].timeSeries[0].areas[0].area.name;
    const report = jsonData[0].timeSeries[0].areas[0].weathers[0];
    
    document.querySelector('.btn03-area').textContent = area;
    document.querySelector('.btn03-datetime').textContent = `${dateStr} ${timeStr}`;
    document.querySelector('.btn03-report').textContent = report;
}

