import Card from './main/card-block/card/card';
import StarField from './main/header/star-field/star-field';
import setting from './setting';

export default class Game {
  cards: Card[] = [];

  errorCount = 0;

  successfulCount = 0;

  currentWord: string;

  starField: StarField;

  constructor(starField: StarField) {
    this.starField = starField;
  }

  startGame(cards: Card[]) {
    this.errorCount = 0;
    this.successfulCount = 0;
    this.cards = cards;

    this.cards.sort(() => Math.random() - 0.5);

    cards[0].playAudio();
    this.currentWord = cards[0].word;

    this.cards.forEach((card) => {
      card.element.addEventListener('click', this.checkCardsClick(card));
    });
  }

  repeatWord() {
    this.cards[0].playAudio();
  }

  checkCardsClick = (card: Card) => () => {
    if (this.currentWord === card.word) {
      card.element.classList.add('success-card');
      this.cards.shift();
      this.successfulCount++;
      this.starField.addStar(true);
      this.nextWord();
    } else {
      this.errorCount++;
      this.starField.addStar(false);
    }
  };

  nextWord() {
    if (this.cards.length) {
      this.cards[0].playAudio();
      this.currentWord = this.cards[0].word;
    } else {
      alert(`Игра закончена! Ошибок: ${this.errorCount}`);
      this.resetGame();
    }
  }

  resetGame() {
    this.currentWord = '';
    this.cards = [];
    this.errorCount = 0;
    this.successfulCount = 0;
    this.starField.clearField();
    setting.gameIsStarted = false;
  }
}
