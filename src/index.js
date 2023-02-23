// Components
import ButtonSpinner from './components/ButtonSpinner.vue';
import Panel from './components/Panel.vue';
import Modal from './components/Modal.vue';
import Dropdown from './components/Dropdown.vue';
import Pagination from './components/Pagination.vue';
import PaginationSimple from './components/PaginationSimple.vue';

// Properties
import Alert from './components/alert/index.js';
import Confirm from './components/confirm/index.js';


// Components array
const components = [
	ButtonSpinner,
	Panel,
	Modal,
	Dropdown,
	Pagination,
	PaginationSimple
];


// Vuejs Install
export default {
	install(app) {

		// Register components from array 
		components.map(component => {
			app.component(component.name, component);
		});

		// Add properties that are accessible in all components
		app.config.globalProperties.$alert = Alert();
		app.config.globalProperties.$confirm = Confirm();
	}
}