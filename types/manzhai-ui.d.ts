import { VueConstructor } from 'vue'

export interface InstallationOptions {}

export function bindDirectives(Vue: VueConstructor): void

export function bindComponents(Vue: VueConstructor): void

export function install(Vue: VueConstructor, options: InstallationOptions): void
