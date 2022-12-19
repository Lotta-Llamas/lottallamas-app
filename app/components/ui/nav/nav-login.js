import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class UiNavNavLoginComponent extends Component {
  @tracked isOpen = false;

  @action showLogin() {
    this.isOpen = this.isOpen ? false : true;
  }
}
