import componentNavigate from './navigate/component.json'
import directiveNavigate from './navigate/directive.json'
import styleNavigate from './navigate/style.json'

export default {
  pageDocs: [directiveNavigate, componentNavigate],
  pageStyle: [styleNavigate]
} as Record<string, any[]>
