import BaseComponent from '../../../base-component';
import './star-field.css';
import Star from './star/star';

const WIDTH_ONE_STAR = 42;

export default class StarField extends BaseComponent {
  countStar = 0;

  constructor() {
    super('div', ['star-field']);
  }

  addStar(isRight: boolean) {
    this.element.appendChild(new Star(isRight).element);
    this.countStar++;
    if (this.element.offsetWidth < (this.countStar * WIDTH_ONE_STAR)) {
      this.removeFirstStar();
    }
  }

  removeFirstStar() {
    const allStar = document.querySelectorAll('.star');
    this.element.removeChild(allStar[0]);
    this.countStar--;
  }

  clearField() {
    this.element.innerHTML = '';
  }
}
