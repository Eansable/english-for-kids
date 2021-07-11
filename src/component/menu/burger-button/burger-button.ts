import BaseComponent from '../../base-component';
import './burger-button.css';

export default class BurgerButton extends BaseComponent {
  constructor() {
    super('div', ['burger-button']);
    this.element.innerHTML = '<span class=\'line\'></span>';
  }
}
