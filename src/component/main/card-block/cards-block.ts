import BaseComponent from '../../base-component';
import Card from './card/card';
import './cards-block.css';

export default class CardsBlock extends BaseComponent {
  cards: Card[] = [];

  constructor() {
    super('div', ['cards-block']);
  }

  renderWordsPage(cards: Card[]) {
    this.cards = cards;

    this.element.innerHTML = '';
    cards.forEach((card) => {
      this.element.appendChild(card.element);
    });
  }

  switchViewCard() {
    this.cards.forEach((card) => {
      card.createCard();
    });
  }

  mixCards() {
    this.cards.sort(() => Math.random() - 0.5);
    this.renderWordsPage(this.cards);
  }
}
