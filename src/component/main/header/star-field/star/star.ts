import './star.css';
import BaseComponent from '../../../../base-component';

export default class Star extends BaseComponent {
  constructor(isRight: boolean) {
    super('img', ['star']);
    if (isRight) {
      this.element.setAttribute('src', './starRight.png');
    } else {
      this.element.setAttribute('src', './starFailed.png');
    }
  }
}
