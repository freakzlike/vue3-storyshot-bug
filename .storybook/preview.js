import { app } from '@storybook/vue3'
import plugin from '../src/plugin'

app.use(plugin)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}