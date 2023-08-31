import './styles.css';
import Emoji from './assets/emoji.png';

import generateGIF from './generateGIF.js';

const gif = document.querySelector('.gif');
const generateBtn = document.querySelector('.generateGif');

generateBtn.addEventListener('click', function() {
    generateGIF().then(data => {gif.src = data})
})
window.onload = () => {
    document.querySelector('.emoji').src = Emoji;
    generateGIF().then(data => {gif.src = data})
}