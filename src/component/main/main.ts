import BaseComponent from '../base-component';
import './main.css';
import Header from './header/header';
import CardsBlock from './card-block/cards-block';
import ButtonGame from './buttonGame/buttonGame';

export default class Main extends BaseComponent {
  header = new Header();

  cardsBlock: CardsBlock;

  buttonGame = new ButtonGame();

  constructor() {
    super('main', ['main']);
    this.cardsBlock = new CardsBlock();
    this.element.appendChild(this.header.element);
    this.element.appendChild(this.cardsBlock.element);
  }

  addButtonGame() {
    this.element.appendChild(this.buttonGame.element);
  }

  deleteButtonGame() {
    this.element.removeChild(this.buttonGame.element);
  }
}
