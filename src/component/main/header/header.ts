import BaseComponent from '../../base-component';
import BurgerButton from '../../menu/burger-button/burger-button';
import './header.css';
import StarField from './star-field/star-field';
import Switch from './switch/switch';

export default class Header extends BaseComponent {
  burgerButton = new BurgerButton();

  switch = new Switch();

  starField = new StarField();

  constructor() {
    super('header', ['header']);
    this.element.appendChild(this.burgerButton.element);
    this.element.appendChild(this.starField.element);
    this.element.appendChild(this.switch.element);
  }
}
