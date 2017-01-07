/* eslint-env browser */


function component() {
  const element = document.createElement('div');

  element.innerHTML = ['Hello', 'webpack'].map(i => `${i} `).join(' ');

  return element;
}

document.body.appendChild(component());
