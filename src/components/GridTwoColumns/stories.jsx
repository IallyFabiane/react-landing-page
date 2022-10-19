import { GridTwoColumns } from '.';

export default {
  title: 'GridTwoColumns',
  component: GridTwoColumns,
  args: {
    title: 'Grid two columns',
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae sit ullam aliquam maiores dicta ipsa, earum id, alias quae cupiditate, voluptatum minus eveniet rerum officia accusantium. Vel nemo possimus reprehenderit.`,
    srcImg: 'assets/images/logo.svg',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridTwoColumns {...args} />
    </div>
  );
};
