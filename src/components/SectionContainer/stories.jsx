import { SectionContainer } from ".";

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod asperiores doloribus voluptatibus, distinctio est porro eum ad, aut inventore deleniti nesciunt omnis, ullam in dicta odio consectetur dolor perferendis nobis.
        </p>
      </div>
    )
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
