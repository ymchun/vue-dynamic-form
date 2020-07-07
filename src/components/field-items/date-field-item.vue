<template lang="pug">
  v-menu(
    lazy offset-y
    :disabled="config.properties.disabled"
    content-class="menu-width-adjust"
  )
    v-text-field(
      ref="element"
      slot="activator"
      v-bind="config.properties"
      v-model="model[config.properties.name]"
      v-on="config.listeners"
    )
    v-date-picker(
      :allowed-dates="allowedDates"
      :disabled="config.properties.disabled"
      reactive no-title
      v-model="model[config.properties.name]"
    )
</template>

<script lang="ts">
import { PropType, defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'dynamic-form-date-field-item',
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
  setup(props, context) {
    const allowedDates = (date: string) => {
      return props.config.properties?.allowedDates
        ? props.config.properties.allowedDates(date)
        : true
    }

    return {
      allowedDates,
    }
  },
})
</script>

<style lang="stylus" scoped>
.v-menu
  width 100%

.menu-width-adjust
  min-width unset !important
</style>
