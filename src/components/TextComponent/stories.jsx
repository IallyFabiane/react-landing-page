import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `
    Lorem ipsum dolor sit amet consectetur
    adipisicing elit. Aliquid ex dicta maxime
    quis quod, laudantium suscipit mollitia
    illo temporibus aliquam nisi eius reiciendis
    placeat amet quasi pariatur! Assumenda,
    reiciendis impedit.
    `,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};

