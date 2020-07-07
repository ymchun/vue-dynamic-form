<template lang="pug">
  v-radio-group(
    ref="element"
    v-bind="config.properties"
    v-model="model[config.properties.name]"
    v-on="config.listeners"
  )
    v-radio(
      v-for="(value, label, index) in config.data"
      :key="index"
      :label="label"
      :value="value"
    )
</template>

<script lang="ts">
import { PropType, defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'dynamic-form-radio-field-item',
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

<style lang="stylus" scoped>
.v-radio-group
  width 100%
</style>
