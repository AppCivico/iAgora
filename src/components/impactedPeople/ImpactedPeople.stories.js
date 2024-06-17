import ImpactedPeople from './ImpactedPeople.vue';

export default {
  title: 'Example/ImpactComponent',
  component: ImpactedPeople,
  tags: ['autodocs'],
  argTypes: {
    impactedPeople: { control: { type: 'number' } }
  }
};

export const ExampleOne = {
  args: {
    impactedPeople: 100,
  },
};

export const ExampleTwo = {
  args: {
    impactedPeople: 200,
  },
};

export const ExampleThree = {
  args: {
    impactedPeople: 300,
  },
};
