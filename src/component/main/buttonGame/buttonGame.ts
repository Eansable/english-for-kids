import BaseComponent from '../../base-component';
import setting from '../../setting';
import './buttonGame.css';

export default class ButtonGame extends BaseComponent {
  constructor() {
    super('button', ['button-game']);
    this.changeButton();
  }

  changeButton() {
    if (setting.gameIsStarted) {
      this.element.innerHTML = '<img src="./retry.png">';
    } else {
      this.element.innerHTML = 'START';
    }
  }
}
