import './menu.css';
import BaseComponent from '../base-component';
import Button from './button/button';

export default class Menu extends BaseComponent {
  buttonMainPage = new Button('Main page');

  buttonsCategories: Button[] = [];

  constructor(names: string[]) {
    super('div', ['menu', 'menu-hidden']);
    this.element.appendChild(this.buttonMainPage.element);
    names.forEach((text) => {
      const button = new Button(text);
      this.buttonsCategories.push(button);
      this.element.appendChild(button.element);
    });
  }
}
