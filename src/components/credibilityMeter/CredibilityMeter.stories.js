import CredibilityMeter from './CredibilityMeter.vue';

export default {
  title: 'Example/CredibilityMeter',
  component: CredibilityMeter,
  tags: ['autodocs'],
  argTypes: {
    pointerPosition: { control: { type: 'number' } },
    showWarning: { control: { type: 'boolean' } }
  }
};

export const ExampleOne = {
  args: {
    pointerPosition: 0,
    showWarning: true,
  },
};

export const ExampleTwo = {
  args: {
    pointerPosition: -15,
    showWarning: true,
  },
};

export const ExampleThree = {
  args: {
    pointerPosition: -70,
    showWarning: false,
  },
};

export const ExampleFour = {
  args: {
    pointerPosition: 25,
    showWarning: true,
  },
};

export const ExampleFive = {
  args: {
    pointerPosition: 55,
    showWarning: true,
  },
};