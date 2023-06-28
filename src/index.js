import { ButtonSubmit, Pagination, Dropdown, Modal, Panel } from "@/components";
import notify from "@/components/notify";
import confirm from "@/components/confirm";

export default {
    install: (Vue) => {

        // Registering components globally
        Vue.component('ButtonSubmit', ButtonSubmit);
        Vue.component('Pagination', Pagination);

        Vue.component('Dropdown', Dropdown);
        Vue.component('Modal', Modal);
        Vue.component('Panel', Panel);
    }
};

export { 
    ButtonSubmit, 
    Pagination, 
    Dropdown, 
    Modal,
    Panel,
    notify,
    confirm 
};