# @ymchun/vue-dynamic-form

Component for generating forms based on user configuration.

⚠️ **Important Note:** This plugin is based on [@vue/composition-api](https://github.com/vuejs/composition-api). If you are not familiar with it, please read their [documentation](https://composition-api.vuejs.org/) first.

## Install

```
npm i @ymchun/vue-dynamic-form
```

## Basic Usage

In `main.ts`

```
import Vue from 'vue'
import DynamicForm from '@ymchun/vue-dynamic-form'

Vue.use(DynamicForm)
```

In your component

```
<template lang="pug">
  dynamic-form(:config="state.config")
</template>

<script lang="ts">
import { DynamicFormConfig } from '@ymchun/vue-dynamic-form'
import { defineComponent, reactive, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'my-component-name',
  setup(props, context) {

    const model = ref({
      // properties will be bind to form element with the same "name" attribute
      myTextField: 'initial value',
    })

    const state = reactive({
      config: {
        model: model.value,
        section: {
          orientation: 'row',
          items: [
            {
              component: 'TextFieldItem',
              properties: {
                name: 'myTextField', // the value match the key name in model above
                label: 'Text',
              },
            },
          ],
        },
      } as DynamicFormConfig,
    })

    return {
      state,
    }
  },
})
</script>
```
