import { KeyMap } from './global'

export interface DynamicFormConfig {
  model: KeyMap<any>
  section: DynamicFormSectionItemConfig
}

export interface DynamicFormSectionItemConfig {
  orientation: 'row' | 'column'
  items: Array<DynamicFormSectionItemConfig | DynamicFormFieldItemConfig>
  align?: {
    main: 'start' | 'center' | 'end' | 'space-between' | 'space-around'
    cross: 'start' | 'center' | 'end' | 'space-between' | 'space-around'
  }
  hidden?: boolean // flag determine whether to show the section
  margin?: string // css margin apply to the section item container
  padding?: string // css padding apply to the section item container
  size?: string // css compatible size, width for column, height for row
}

export interface DynamicFormFieldItemConfig {
  component: string // form field item component class name
  data?: any | any[] | KeyMap<any> // data supply to vuetify component
  hidden?: boolean // flag determine whether to show the item
  listeners?: KeyMap<any> // bind to form field item vuetify component props
  properties?: KeyMap<any> // bind to form field item vuetify component props
  size?: string // css compatible size, width for column, height for row
}
