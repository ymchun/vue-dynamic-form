<template lang="pug">
v-text-field(
  ref='element',
  v-bind='config.properties',
  v-model='model[config.properties.name]',
  v-on='config.listeners'
)
</template>

<script lang="ts">
import { PropType, defineComponent } from '@vue/composition-api'

import { DynamicFormFieldItemConfig } from '../../types/dynamic-form'

export default defineComponent({
  name: 'dynamic-form-text-field-item',
  props: {
    config: {
      type: Object as PropType<DynamicFormFieldItemConfig>,
      required: true,
    },
    model: {
      type: Object,
      required: true,
    },
  },
  setup(props, context) {},
})
</script>

<style lang="stylus" scoped>
.v-text-field
  width 100%
</style>
