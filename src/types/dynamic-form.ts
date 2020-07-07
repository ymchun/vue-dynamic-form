export interface DynamicFormConfig {
  model: { [key: string]: any }
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
  data?: any | any[] | { [key: string]: any } // data supply to vuetify component
  hidden?: boolean // flag determine whether to show the item
  listeners?: { [key: string]: any } // bind to form field item vuetify component props
  properties?: { [key: string]: any } // bind to form field item vuetify component props
  size?: string // css compatible size, width for column, height for row
}
