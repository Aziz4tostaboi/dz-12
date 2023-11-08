// Дан массив из объектов с полями title и text. Заполните массив сами произвольными данными.
// Ваша задача отрисовать
// данные на странице в соответствующих тегах (h2 - для title, p - для text)//
 const data = [
    { title: 'Россия ', text: 'Москва ' },
    { title: 'италия ', text: 'рим ' },
    { title: 'франция ', text: 'Париж ' }
];

const container = document.getElementById('content');

data.forEach(item => {
    const titleElement = document.createElement('h2');
    titleElement.textContent = item.title;

    const textElement = document.createElement('p');
    textElement.textContent = item.text;

    container.appendChild(titleElement);
    container.appendChild(textElement);
});
document.body.append(container)
//Дан элемент. Сделайте так, чтобы по клику на него он красился в красный цвет, но только если в момент клика нажата клавиша Ctrl//
let targetDiv=document.getElementById("exercise")
    targetDiv.addEventListener("click",function (event){
    if(event.ctrlKey){
        targetDiv.style.cssText='background-color: red'
    }
    })

/*Дан элемент. Сделайте так, чтобы при клике на него и нажатой клавише Ctrl - в его текст записывалось
'1', при нажатой клавише Alt - '2', а при нажатой клавише Shift - '3'*/
const targetAbylov=document.getElementById("abylov");
targetAbylov.addEventListener('click',function (event){
    if(event.ctrlKey){
        targetAbylov.textContent='1  ctrl+click'
    } if(event.altKey){
        targetAbylov.textContent='2  alt+click'

    } if(event.shiftKey){
        targetAbylov.textContent='3  shift+click'

    }

})
// Даны абзацы с числами. То есть, несколько подобных элементов <p>1</p>.
// По нажатию на абзац в нем должен появится квадрат числа, которое он содержит.//


const paragraphs = document.getElementsByClassName("sqaure" );
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].addEventListener("click", showSquare);
}

function showSquare(event) {
    let paragraph = event.target;
    let number = Number(paragraph.innerHTML);
    let square = number * number;
    paragraph.innerHTML = square;
}


//Даны картинки. Привяжите к каждой картинке событие, чтобы по клику на картинку в console.log выводлися ее srs//
const images = document.getElementsByTagName('img');

for (let i = 0; i < images.length; i++) {
    const imageSrs=images[i].src
    images[i].addEventListener('click', function() {
        console.log(imageSrs);

    });
}
//Даны ссылки с заполненным href. Например <a href="https://google.com">Сайт гугл</a>.
// Привяжите всем ссылкам событие - по наведению на ссылку в конец ее текста дописывается ее href в круглых скобках.//

const links = document.querySelectorAll('a');

links.forEach(link => {
    const href = link.getAttribute('href');

    link.addEventListener('mouseover', () => {
        link.textContent += ` (${href})`;
    });
    link.addEventListener("mouseout",( )=>{
        link.textContent=''
    })

});
