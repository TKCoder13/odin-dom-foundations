const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');

const p = document.createElement('p');
p.classList.add('default-p');
p.textContent = "Hey I'm red!";
p.style.cssText = "color: red;";

const h3 = document.createElement('h3');
h3.classList.add('h3-blue');
h3.textContent = "I'm a blue h3!";
h3.style.cssText = "color: blue;";

const div = document.createElement('div');
div.classList.add('div');
div.style.cssText = "border-style: solid; border-color: black; background-color: pink;";

const h1 = document.createElement('h1');
h1.classList.add('div-h1');
h1.textContent = "I'm in a div";

const p_1 = document.createElement('p');
p_1.textContent = "ME TOO!";

container.appendChild(content);
content.appendChild(p);
content.appendChild(h3);
content.appendChild(div);
div.appendChild(h1);
div.appendChild(p_1);