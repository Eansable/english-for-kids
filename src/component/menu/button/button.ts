import BaseComponent from '../../base-component';
import './button.css';

export default class Button extends BaseComponent {
  constructor(text: string) {
    super('button', ['button']);
    this.element.innerHTML = `${text}`;
  }
}
