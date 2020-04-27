import { Component, Vue } from 'vue-property-decorator'

@Component
export default class MzTooltip extends Vue {
  render() {
    return this.$slots.default
  }
}
