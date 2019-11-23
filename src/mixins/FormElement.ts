import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class FormElement extends Vue {
  @Prop(Boolean)
  readonly disabled!: boolean
  @Prop(String)
  readonly name!: string
  @Prop(String)
  readonly label!: string
}
