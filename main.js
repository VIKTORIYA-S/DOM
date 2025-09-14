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
 song:"ALL ALONG THE WATCHTOWER"
},
{
 author: "AC/DC",
 song:"BACK IN BLACK"
},
{
 author: "QUEEN",
 song:"WE WILL ROCK YOU"
},
{
 author: "METALLICA",
 song:"ENTER SANDMAN"
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
}}
renderPlayList();


const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    const modal = document.querySelector('.modal');
    const modalContent = document.querySelector('.modal-content');
    const close = document.querySelector('.close');
    modal.style.display = 'flex';
    modalContent.style.display = 'block';
});
