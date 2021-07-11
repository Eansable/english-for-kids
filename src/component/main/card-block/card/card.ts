import BaseComponent from '../../../base-component';
import setting from '../../../setting';
import './card.css';

export default class Card extends BaseComponent {
  word: string;

  transalte: string;

  audio: HTMLMediaElement;

  image: string;

  categories: string;

  constructor(word: string, translate: string, image: string, audioSrc: string) {
    super('div', ['card-container']);
    this.word = word;
    this.transalte = translate;
    this.image = image;
    this.audio = document.createElement('audio');
    this.audio.setAttribute('src', audioSrc);
    this.createCard();
  }

  createCard() {
    if (setting.isTrain) {
      this.element.innerHTML = `
      <div class='card'>
        <div class='front'>
          <img class="card__image" src="${this.image}" alt="${this.word}">
          <footer class="footer">
            ${this.word}
          </footer>
        </div>
        <div class='back'>
          <img class="card__image" src="${this.image}" alt="${this.word}">
          <footer class="footer">
            ${this.transalte}
          </footer></div>
        <div class='rotate'>
          <img src="./rotate.svg">
        </div>
      </div>

    `;
      this.element.addEventListener('click', this.playAudio);
      this.element.querySelector('.rotate').addEventListener('click', () => this.element.classList.add('flipped'));
      this.element.addEventListener('mouseleave', () => this.element.classList.remove('flipped'));
    } else {
      this.element.innerHTML = `
      <div class='card'>
        <img class="card__image" src="${this.image}" alt="${this.word}">
      </div>`;
      this.element.dataset.word = 'word';
    }
    this.element.appendChild(this.audio);
  }

  playAudio() {
    this.audio.play();
  }
}
