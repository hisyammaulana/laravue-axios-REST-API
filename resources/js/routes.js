import Vue from 'vue'
import Example from 'components/ExampleComponent.vue'
import Add  from 'components/AddComponent.vue'

export const routes = [
    { path: '/', component: Example, name: 'Example' },
    { path: '/add', component: Add, name: 'Add' }
];
