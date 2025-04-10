'use strict';

const app = document.querySelector('.app');

app.innerHTML = `
    <section>
        <h1>JSによるHTML自体の制御</h1>
        <p>これは JavaScript の innerHTML によって生成されています。</p>
        <p>HTML に直接書かれていなくても、このように JS によって、動的に生成することができます。</p>
    </section>
    <div>
        <button type="button" onclick="changeContent()">内容を変える</button>
    </div>
`;


function changeContent() {
    app.innerHTML = `
        <section>
            <h1>内容が変化しました！</h1>
            <p>innerHTML の内容を書き換えると、途中でもHTMLの入れ替えをすることができます。</p>
        </section>
    `
}
