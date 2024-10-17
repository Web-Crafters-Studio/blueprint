import { Button } from './Button.js'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Composants/Button',
  component: Button,
} as Meta

const Template: StoryFn<any> = (args:any) => <Button {...args} />

export const ParDéfaut = Template.bind({})
ParDéfaut.args = {
  label: 'Cliquez ici',
}

export const Désactivé = Template.bind({})
Désactivé.args = {
  label: 'Cliquez ici',
  disabled: true,
}
