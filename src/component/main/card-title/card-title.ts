import BaseComponent from '../../base-component';
import './card-title.css';

export default class CardTitle extends BaseComponent {
  constructor(text: string, image: string) {
    super('div', ['card-title']);
    this.element.innerHTML = `<img class="card-title__image" src="./${image}">
    <h3 class="card-title__text">${text}</h3>
    `;
  }
}
