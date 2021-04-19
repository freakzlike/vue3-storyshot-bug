import Page from './Page.vue';
import { h } from 'vue'

export default {
  title: 'Page',
  component: Page
};

const Template = (args) => ({
  setup() {
    return () => h(Page, args);
  },
});

export const Main = Template.bind({});
