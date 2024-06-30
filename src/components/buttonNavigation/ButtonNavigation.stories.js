import CustomButton from './CustomButton.vue';

export default {
  title: 'Example/CustomButton',
  component: CustomButton,
  tags: ['autodocs'],
  argTypes: {
    text: { control: { type: 'text' } },
    hasIcon: { control: { type: 'boolean' } },
    color: {
      control: {
        type: 'select',
        options: ['yellow', 'green', 'blue', 'white', 'red']
      }
    },
    buttonClick: { action: 'buttonClick' }
  }
};

export const YellowButton = {
  args: {
    text: 'Postar no meu canal de vídeos',
    hasIcon: false,
    color: 'yellow'
  }
};

export const GreenButton = {
  args: {
    text: 'Continuar',
    hasIcon: false,
    color: 'green'
  }
};

export const BlueButtonWithIcon = {
  args: {
    text: 'Como jogar?',
    hasIcon: true,
    color: 'blue'
  }
};

export const RedButtonWithIcon = {
  args: {
    text: 'Começar!',
    hasIcon: true,
    color: 'red'
  }
};

export const WhiteButton = {
  args: {
    text: 'Como jogar?',
    hasIcon: false,
    color: 'white'
  }
};
