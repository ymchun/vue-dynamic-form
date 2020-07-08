import Vue from 'vue'

import ColumnSectionItem from './components/column-section-item.vue'
import DynamicForm from './components/dynamic-form.vue'
import RowSectionItem from './components/row-section-item.vue'

Vue.component('ColumnSectionItem', ColumnSectionItem)
Vue.component('DynamicForm', DynamicForm)
Vue.component('RowSectionItem', RowSectionItem)

export { ColumnSectionItem, DynamicForm, RowSectionItem }
export * from './types/dynamic-form'
