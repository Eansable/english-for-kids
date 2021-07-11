import BaseComponent from '../../../base-component';
import './switch.css';

export default class Switch extends BaseComponent {
  constructor() {
    super('div', ['switch']);
    this.element.innerHTML = '<div class="switch-btn">Train</div>';
  }
}
