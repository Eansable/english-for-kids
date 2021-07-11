import Game from './game';
import Card from './main/card-block/card/card';
import CardsBlock from './main/card-block/cards-block';
import CardTitle from './main/card-title/card-title';
import Main from './main/main';
import Menu from './menu/menu';
import Overlay from './overlay/overlay';
import setting from './setting';
import words from './words';

interface WordObject {
  word: string,
  translation: string,
  image: string,
  audioSrc: string
}

export default class App {
  main = new Main();

  menu = new Menu(setting.categories);

  overlay = new Overlay();

  words: WordObject[][] = words;

  game: Game;

  startApp() {
    document.body.appendChild(this.menu.element);
    document.body.appendChild(this.main.element);
    document.body.appendChild(this.overlay.element);
    // main
    this.main.header.burgerButton.element.addEventListener('click', this.clickOnBurger);
    this.main.header.switch.element.addEventListener('click', this.clickOnSwitch(this.main));
    this.main.buttonGame.element.addEventListener('click', this.startGame(this.main));

    this.overlay.element.addEventListener('click', this.hideMenu);
    this.renderMainPage(setting.categories, this.main.cardsBlock.element)();
    document.querySelectorAll('.card-title').forEach((cardTitle, i) => {
      cardTitle.addEventListener('click', this.renderWordsPage(this.words[i], this.main.cardsBlock));
      this.clickOnBurger();
    });
    // menu
    this.menu.buttonMainPage.element.addEventListener('click', this.renderMainPage(setting.categories, this.main.cardsBlock.element));
    this.menu.buttonsCategories.forEach((buttonMenu, i) => {
      buttonMenu.element.addEventListener('click', this.renderWordsPage(this.words[i], this.main.cardsBlock));
    });
  }

  clickOnBurger() {
    document.querySelector('.line').classList.toggle('line-active');
    document.querySelector('.menu').classList.toggle('menu-hidden');
    document.querySelector('.overlay').classList.toggle('overlay-hidden');
  }

  hideMenu() {
    document.querySelector('.line').classList.remove('line-active');
    document.querySelector('.menu').classList.add('menu-hidden');
    document.querySelector('.overlay').classList.add('overlay-hidden');
  }

  clickOnSwitch = (main: Main) => () => {
    if (setting.isTrain) {
      setting.isTrain = false;
      document.documentElement.style.setProperty('--color-1', '#fc6262');
      document.documentElement.style.setProperty('--color-2', '#ffd86f');
      document.querySelector('.switch-btn').innerHTML = 'Play';
      main.cardsBlock.mixCards();
      if (!setting.isMainPage) {
        main.addButtonGame();
      }
    } else {
      setting.isTrain = true;
      document.documentElement.style.setProperty('--color-1', '#0099ae');
      document.documentElement.style.setProperty('--color-2', '#00bf82');
      document.querySelector('.switch-btn').innerHTML = 'Train';
      main.deleteButtonGame();
      this.finishGame();
    }
    main.cardsBlock.switchViewCard();
    document.querySelector('.switch').classList.toggle('switch-active');
  };

  renderMainPage = (categories: string[], cardsBlockElement: HTMLElement) => () => {
    const tempCardsBlock = cardsBlockElement;

    tempCardsBlock.innerHTML = '';
    categories.forEach((сategory, index) => {
      const cardCategory = new CardTitle(сategory, this.words[index][0].image);
      tempCardsBlock.appendChild(cardCategory.element);
      cardCategory.element.addEventListener('click', this.renderWordsPage(this.words[index], this.main.cardsBlock));
    });

    if (this.game) {
      this.game.resetGame();
    }
    setting.isMainPage = true;
    this.hideMenu();
  };

  renderWordsPage = (wordsArray: WordObject[], cardsBlock: CardsBlock) => () => {
    const cards: Card[] = [];
    wordsArray.forEach((word) => {
      cards.push(new Card(word.word, word.translation, word.image, word.audioSrc));
    });
    if (!setting.isTrain) {
      cards.sort(() => Math.random() - 0.5);
    }
    cardsBlock.renderWordsPage(cards);
    setting.isMainPage = false;
    this.hideMenu();
  };

  startGame = (main: Main) => () => {
    if (!setting.gameIsStarted) {
      setting.gameIsStarted = true;
      this.game = new Game(this.main.header.starField);
      this.game.startGame(main.cardsBlock.cards);
      main.buttonGame.changeButton();
    } else {
      this.game.repeatWord();
    }
  };

  finishGame() {
    this.game.resetGame();
    this.renderMainPage(setting.categories, this.main.cardsBlock.element);
  }
}
