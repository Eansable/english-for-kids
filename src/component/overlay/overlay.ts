import BaseComponent from '../base-component';
import './overlay.css';

export default class Overlay extends BaseComponent {
  constructor() {
    super('div', ['overlay', 'overlay-hidden']);
  }
}
