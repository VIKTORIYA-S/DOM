'use strict';

const playList = [
{
 author: "LED ZEPPELIN",
 song:"STAIRWAY TO HEAVEN",
 liric:"STAIRWAY TO HEAVEN"
},
{
 author: "QUEEN",
 song:"BOHEMIAN RHAPSODY",
 liric:"BOHEMIAN RHAPSODY"
},
{
 author: "LYNYRD SKYNYRD",
 song:"FREE BIRD",
 liric:"FREE BIRD"
},
{
 author: "DEEP PURPLE",
 song:"SMOKE ON THE WATER",
 liric:"SMOKE ON THE WATER"
},
{
 author: "JIMI HENDRIX",
 song:"ALL ALONG THE WATCHTOWER",
 liric:"ALL ALONG THE WATCHTOWER"
},
{
 author: "AC/DC",
 song:"BACK IN BLACK",
 liric:"BACK IN BLACK"
},
{
 author: "QUEEN",
 song:"WE WILL ROCK YOU",
 liric:"WE WILL ROCK YOU"
},
{
 author: "METALLICA",
 song:"ENTER SANDMAN",
 liric:"ENTER SANDMAN"
}
];



const ol = document.querySelector('.playlist');

function renderPlayList() {
for (let i = 0; i < playList.length; i++) {
    console.log(playList[i]['song']);
    console.log(playList[i]['author']);
    const li = document.createElement('li');
    li.classList.add('item');
    li.innerHTML = `${i + 1}. <p class="author">Author: <span>${playList[i]['author']}</span></p> - <br><p class="song">Song: <span>${playList[i]['song']}</span></p>`;
    const button = document.createElement('button');
    button.classList.add('btn');
    button.textContent = 'Відкрити';
    ol.insertAdjacentElement('beforeend', li);
    li.insertAdjacentElement('beforeend', button);
    playList[i]['liric'] = 'Текст пісні...';
    console.log(playList);
}}
renderPlayList();


const btn = document.querySelectorAll('.btn');

btn.forEach((item) => {
    item.addEventListener('click', () => {
        const modal = document.querySelector('.modal');
        const modalContent = document.querySelector('.modal-content');

        modal.style.display = 'flex';
        modalContent.style.display = 'block';

        const modalList = document.createElement('ol');
        ol.classList.add('modal__list');
        modalContent.appendChild(modalList);
        console.log(modalList);

        const modalLi = document.createElement('li');
        modalLi.classList.add('modal__item');
        modalList.appendChild(modalLi);

        modalLi.innerHTML = `<button class="close">Закрити</button>
            <p class="author">Author: ${playList[0]['author']}</p>
            <p class="song">Song: ${playList[0]['song']}</p>
            <p class="liric">Liric:  ${playList[0]['liric']}(Здесь должен быть текст...)</p>`;


            const close = document.querySelector('.close');
            close.addEventListener('click', () => {
    console.log('close');
    const modal = document.querySelector('.modal');
        const modalContent = document.querySelector('.modal-content');
        modal.style.display = 'none';
})

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    })
    });

});



