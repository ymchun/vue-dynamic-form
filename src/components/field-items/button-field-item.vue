<template lang="pug">
  v-btn(
    v-bind="config.properties"
    v-on="config.listeners"
  ) {{ config.properties.label }}
</template>

<script lang="ts">
import { PropType, defineComponent } from '@vue/composition-api'

import { DynamicFormFieldItemConfig } from '../../types/dynamic-form'

export default defineComponent({
  name: 'dynamic-form-button-field-item',
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
