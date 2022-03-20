import { FaPepperHot as icon } from 'react-icons/fa';

export default {
  name: 'topping', // computer name
  title: 'Toppings', // visible title
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Topping Name',
      type: 'string',
      description: 'What is the name of the topping?',
    },
    {
      name: 'vegetarian',
      title: 'Vegeratian',
      type: 'boolean',
      options: {
        layout: 'checkbox',
      },
    },
  ],
  preview: {
    select: {
      title: 'name',
      vegetarian: 'vegetarian',
    },
    prepare: ({ title, vegetarian }) => ({
      title: `${title} ${vegetarian ? '🥗' : ''}`,
    }),
  },
};
