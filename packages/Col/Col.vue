<script lang="tsx">
import { Component, Vue, Prop, Inject } from 'vue-property-decorator'
import { CreateElement, VNodeChildren } from 'vue'

@Component
export default class MzCol extends Vue {
  @Inject('gutter')
  readonly gutter!: number
  @Prop(Number)
  readonly span!: number
  @Prop(Number)
  readonly offset!: number
  @Prop(Number)
  readonly pull!: number
  @Prop(Number)
  readonly push!: number
  @Prop(Number)
  readonly xs!: number
  @Prop(Number)
  readonly sm!: number
  @Prop(Number)
  readonly md!: number
  @Prop(Number)
  readonly lg!: number
  @Prop(Number)
  readonly xl!: number
  @Prop({ type: String, default: 'div' })
  readonly tag!: string

  get colClasses() {
    const classes = ['mz-col']
    ;['offset', 'pull', 'push', 'xs', 'sm', 'md', 'lg', 'xl'].forEach(key => {
      if (this[key as keyof MzCol] !== undefined) {
        classes.push(`mz-col-${key}-${this[key as keyof MzCol]}`)
      }
    })
    let span = this.span
    if (!span && (this.xs || this.sm || this.md || this.lg || this.xl)) {
      span = 24
    }
    if (span >= 0) classes.push(`mz-col-${span}`)
    return classes
  }

  get colStyles() {
    const styles: Record<string, string> = {}
    if (this.gutter) {
      styles.paddingLeft = `${this.gutter / 2}px`
      styles.paddingRight = `${this.gutter / 2}px`
    }
    return styles
  }

  render(h: CreateElement) {
    return h(
      this.tag,
      { class: this.colClasses, style: this.colStyles },
      this.$slots.default as VNodeChildren
    )
  }
}
</script>

<style lang="scss">
[class*='mz-col-'] {
  float: left;
  box-sizing: border-box;
}

.mz-col {
  position: relative;
  box-sizing: border-box;
}

.mz-col-0 {
  display: none;
}

@for $i from 1 through 24 {
  .mz-col-#{$i} {
    width: 100% * $i / 24;
  }
  .mz-col-offset-#{$i} {
    margin-left: 100% * $i / 24;
  }
}

@for $i from 1 through 12 {
  .mz-col-push-#{$i} {
    left: 100% * $i / 12;
  }
  .mz-col-pull-#{$i} {
    right: 100% * $i / 12;
  }
}

$sizeMap: (xs, 768px, max) (sm, 768px, min) (md, 992px, min) (lg, 1200px, min)
  (xl, 1920px, min);

@each $size, $screen-width, $maxmin in $sizeMap {
  @media screen and(#{$maxmin}-width:#{$screen-width}) {
    .mz-col-#{$size}-0 {
      display: none;
    }
    @for $i from 1 through 24 {
      .mz-col-#{$size}-#{$i} {
        display: block;
        width: 100% * $i / 24;
      }
    }
  }
}
</style>
