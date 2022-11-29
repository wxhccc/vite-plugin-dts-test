import type { App } from 'vue'
import FormBtns from './components/form-btns'

export * from './components/form-btns'


const components = {
  FormBtns
}

const install = function (app: App) {
  Object.entries(components).forEach(([_key, component]) =>
    app.component(component.name, component)
  )
}

export {
  FormBtns
}

export default {
  install,
  ...(components as any)
}
