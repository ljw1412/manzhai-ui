import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class MzTextarea extends Vue {
  @Prop([String, Number])
  readonly value!: string | number

  render() {
    return (
      <div class="mz-textarea">
        <textarea
          ref="textarea"
          v-bind="$attrs"
          class="mz-textarea__inner"></textarea>
      </div>
    )
  }
}
