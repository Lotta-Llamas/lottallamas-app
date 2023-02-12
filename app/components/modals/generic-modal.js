import Component from '@glimmer/component';
import actions from './actions';
import context from './context';

export default class ModalsGenericModalComponent extends Component {
	actions = actions;
	context = context;
}
