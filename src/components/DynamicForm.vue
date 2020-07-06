<template lang="pug">
  v-form(lazy-validation)
    component(
      :is="sectionType"
      :config="config.section"
      :model="config.model"
      ref="child"
      v-if="!config.hidden"
    )
</template>

<script lang="ts">
import { PropType, computed, defineComponent, reactive } from '@vue/composition-api'

export default defineComponent({
  name: 'dynamic-form',
  props: {
    config: {
      type: Object as PropType<DynamicFormConfig>,
      required: true,
    },
  },
  setup(props, context) {
    const state = reactive({
      sectionType: computed(() =>
        props.config.section.orientation === 'row' ? 'RowSectionItem' : 'ColumnSectionItem',
      ),
    })

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
      reset,
      state,
    }
  },
})
</script>
