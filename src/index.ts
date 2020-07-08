import { VueConstructor } from 'vue'

import ColumnSectionItem from './components/column-section-item.vue'
import DynamicForm from './components/dynamic-form.vue'
import RowSectionItem from './components/row-section-item.vue'

export default {
  install(_vue: VueConstructor) {
    _vue.component('ColumnSectionItem', ColumnSectionItem)
    _vue.component('DynamicForm', DynamicForm)
    _vue.component('RowSectionItem', RowSectionItem)
  },
}
export * from './types/dynamic-form'
