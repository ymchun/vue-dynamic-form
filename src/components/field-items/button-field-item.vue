<template lang="pug">
  v-btn(
    v-bind="config.properties"
    v-on="config.listeners"
  ) {{ config.properties.label }}
</template>

<script lang="ts">
import { PropType, defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'dynamic-form-button-field-item',
  props: {
    config: {
      type: Object as PropType<DynamicFormFieldItemConfig>,
      required: true,
    },
    model: {
      type: Object as PropType<KeyMap<any>>,
      required: true,
    },
  },
  setup(props, context) {},
})
</script>
