<template lang="pug">
v-layout(row, nowrap, :style='state.style', v-bind='state.align')
  component(
    v-for='(item, index) in config.items',
    :key='index',
    :is='getComponent(item)',
    :style='getComponentStyle(item)',
    :config='item',
    :model='model',
    ref='child',
    v-if='!item.hidden'
  )
</template>

<script lang="ts">
import { PropType, computed, defineComponent, reactive } from '@vue/composition-api'

import { DynamicFormFieldItemConfig, DynamicFormSectionItemConfig } from '../types/dynamic-form'
import ButtonFieldItem from './field-items/button-field-item.vue'
import CheckboxFieldItem from './field-items/checkbox-field-item.vue'
import ComboboxFieldItem from './field-items/combobox-field-item.vue'
import DateFieldItem from './field-items/date-field-item.vue'
import RadioFieldItem from './field-items/radio-field-item.vue'
import SelectFieldItem from './field-items/select-field-item.vue'
import SwitchFieldItem from './field-items/switch-field-item.vue'
import TextAreaFieldItem from './field-items/textarea-field-item.vue'
import TextFieldItem from './field-items/textfield-field-item.vue'

export default defineComponent({
  name: 'dynamic-form-row-section-item',
  components: {
    ButtonFieldItem,
    CheckboxFieldItem,
    ComboboxFieldItem,
    DateFieldItem,
    RadioFieldItem,
    SelectFieldItem,
    SwitchFieldItem,
    TextAreaFieldItem,
    TextFieldItem,
  },
  props: {
    config: {
      type: Object as PropType<DynamicFormSectionItemConfig>,
      required: true,
    },
    model: {
      type: Object,
      required: true,
    },
  },
  setup(props, context) {
    const state = reactive({
      style: computed(() => ({
        height: props.config.size,
        margin: props.config.margin,
        padding: props.config.padding,
      })),
      align: computed(() =>
        props.config.align
          ? {
              'align-center': props.config.align.cross === 'center',
              'align-end': props.config.align.cross === 'end',
              'align-space-around': props.config.align.cross === 'space-around',
              'align-space-between': props.config.align.cross === 'space-between',
              'align-start': props.config.align.cross === 'start',
              'justify-center': props.config.align.main === 'center',
              'justify-end': props.config.align.main === 'end',
              'justify-space-around': props.config.align.main === 'space-around',
              'justify-space-between': props.config.align.main === 'space-between',
              'justify-start': props.config.align.main === 'start',
            }
          : {
              'align-start': true,
              'justify-start': true,
            },
      ),
    })

    const getComponent = (item: DynamicFormSectionItemConfig & DynamicFormFieldItemConfig) => {
      if (item.orientation) {
        // section item
        return item.orientation === 'row' ? 'RowSectionItem' : 'ColumnSectionItem'
      } else {
        // form field item
        return item.component
      }
    }

    const getComponentStyle = (item: DynamicFormSectionItemConfig & DynamicFormFieldItemConfig) => {
      return {
        width: item.size,
      }
    }

    const reset = () => {
      if (context.root.$refs?.child) {
        if (Array.isArray(context.root.$refs.child)) {
          const children = context.root.$refs.child as any[]
          for (const child of children) {
            child.reset()
          }
        } else {
          const child = context.root.$refs.child as any
          child.reset()
        }
      }
    }

    return {
      getComponent,
      getComponentStyle,
      reset,
      state,
    }
  },
})
</script>

<style lang="stylus" scoped>
.layout
  height 100%
  width 100%
</style>
