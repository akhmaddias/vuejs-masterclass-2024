import type { InjectionKey, Ref } from 'vue'

export interface MenuInjectionOptions {
  menuOpen: Ref<Boolean>
  toggleMenu: () => void
}

export const menuKey = Symbol() as InjectionKey<MenuInjectionOptions>
