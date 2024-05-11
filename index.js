document.getElementById('main').remove();

const newHeader = document.createElement('h1');
document.body.insertBefore(newHeader, document.body.firstChild);

newHeader.id = 'victory';

newHeader.textContent = 'Dave is the champion';