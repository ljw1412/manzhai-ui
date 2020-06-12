import { VueConstructor } from 'vue'

export * from './src/index'

export interface InstallationOptions {
  size?: string
}

export function bindDirectives(Vue: VueConstructor): void

export function bindComponents(Vue: VueConstructor): void

export function install(Vue: VueConstructor, options: InstallationOptions): void
