'use strict';

const viewArea = document.querySelector('.view-area');
viewArea.innerHTML = `
    <section>
        <h1>トップページ</h1>
        <p>ページ移動をクリックしてください。</p>
        <section>
            <h2>ページ移動</h2>
            <ul>
                <li><a href="javascript:void(0)" onclick="moveToTokyoPage()">東京ページ</a></li>
                <li><a href="javascript:void(0)" onclick="moveToKanagawaPage()">神奈川ページ</a></li>
                <li><a href="javascript:void(0)" onclick="moveToChibaPage()">千葉ページ</a></li>
                <li><a href="javascript:void(0)" onclick="moveToSaitamaPage()">埼玉ページ</a></li>
            </ul>
        </section>
    </section>
`;



async function moveToTopPage() {
    history.pushState(null, '', `/top`);
    viewArea.innerHTML = `
        <section>
            <h1>トップページ</h1>
            <p>ページ移動をクリックしてください。</p>
            <section>
                <h2>ページ移動</h2>
                <ul>
                    <li><a href="javascript:void(0)" onclick="moveToTokyoPage()">東京ページ</a></li>
                    <li><a href="javascript:void(0)" onclick="moveToKanagawaPage()">神奈川ページ</a></li>
                    <li><a href="javascript:void(0)" onclick="moveToChibaPage()">千葉ページ</a></li>
                    <li><a href="javascript:void(0)" onclick="moveToSaitamaPage()">埼玉ページ</a></li>
                </ul>
            </section>
        </section>
    `;
}

async function moveToTokyoPage() {
    const [weatherArea, weatherDate, weatherReport] = await getWeatherReport(130000);
    history.pushState(null, '', `/report/tokyo`);
    viewArea.innerHTML = `
        <section>
            <h1>東京ページ</h1>
            <ul>
                <li>エリア: ${weatherArea}</li>
                <li>日時: ${weatherDate}</li>
            </ul>
            <p>${weatherReport}</p>
            <section>
                <h2>ページ移動</h2>
                <ul>
                    <li><a href="javascript:void(0)" onclick="moveToTopPage()">トップページ</a></li>
                    <li><a href="javascript:void(0)" onclick="moveToKanagawaPage()">神奈川ページ</a></li>
                    <li><a href="javascript:void(0)" onclick="moveToChibaPage()">千葉ページ</a></li>
                    <li><a href="javascript:void(0)" onclick="moveToSaitamaPage()">埼玉ページ</a></li>
                </ul>
            </section>
        </section>
    `;
}

async function moveToKanagawaPage() {
    const [weatherArea, weatherDate, weatherReport] = await getWeatherReport(140000);
    history.pushState(null, '', `/report/kanagawa`);
    viewArea.innerHTML = `
        <section>
            <h1>神奈川ページ</h1>
            <ul>
                <li>エリア: ${weatherArea}</li>
                <li>日時: ${weatherDate}</li>
            </ul>
            <p>${weatherReport}</p>
            <section>
                <h2>ページ移動</h2>
                <ul>
                    <li><a href="javascript:void(0)" onclick="moveToTopPage()">トップページ</a></li>
                    <li><a href="javascript:void(0)" onclick="moveToTokyoPage()">東京ページ</a></li>
                    <li><a href="javascript:void(0)" onclick="moveToChibaPage()">千葉ページ</a></li>
                    <li><a href="javascript:void(0)" onclick="moveToSaitamaPage()">埼玉ページ</a></li>
                </ul>
            </section>
        </section>
    `;
}

async function moveToChibaPage() {
    const [weatherArea, weatherDate, weatherReport] = await getWeatherReport(120000);
    history.pushState(null, '', `/report/chiba`);
    viewArea.innerHTML = `
        <section>
            <h1>千葉ページ</h1>
            <ul>
                <li>エリア: ${weatherArea}</li>
                <li>日時: ${weatherDate}</li>
            </ul>
            <p>${weatherReport}</p>
            <section>
                <h2>ページ移動</h2>
                <ul>
                    <li><a href="javascript:void(0)" onclick="moveToTopPage()">トップページ</a></li>
                    <li><a href="javascript:void(0)" onclick="moveToTokyoPage()">東京ページ</a></li>
                    <li><a href="javascript:void(0)" onclick="moveToKanagawaPage()">神奈川ページ</a></li>
                    <li><a href="javascript:void(0)" onclick="moveToSaitamaPage()">埼玉ページ</a></li>
                </ul>
            </section>
        </section>
    `;
}

async function moveToSaitamaPage() {
    const [weatherArea, weatherDate, weatherReport] = await getWeatherReport(110000);
    history.pushState(null, '', `/report/saitama`);
    viewArea.innerHTML = `
        <section>
            <h1>埼玉ページ</h1>
            <ul>
                <li>エリア: ${weatherArea}</li>
                <li>日時: ${weatherDate}</li>
            </ul>
            <p>${weatherReport}</p>
            <section>
                <h2>ページ移動</h2>
                <ul>
                    <li><a href="javascript:void(0)" onclick="moveToTopPage()">トップページ</a></li>
                    <li><a href="javascript:void(0)" onclick="moveToTokyoPage()">東京ページ</a></li>
                    <li><a href="javascript:void(0)" onclick="moveToKanagawaPage()">神奈川ページ</a></li>
                    <li><a href="javascript:void(0)" onclick="moveToChibaPage()">千葉ページ</a></li>
                </ul>
            </section>
        </section>
    `;
}


async function getWeatherReport(areaCode) {
    const response = await fetch(`https://www.jma.go.jp/bosai/forecast/data/forecast/${areaCode}.json`);
    const jsonData = await response.json();
    
    const dateStr = jsonData[0].reportDatetime.substring(0, 10);
    const timeStr = jsonData[0].reportDatetime.substring(11, 16);
    const area = jsonData[0].timeSeries[0].areas[0].area.name;
    const report = jsonData[0].timeSeries[0].areas[0].weathers[0];
    
    return [area, `${dateStr} ${timeStr}`, report];
}

