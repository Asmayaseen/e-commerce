export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: { required: () => any; }) => Rule.required(),
    },
    {
      name: 'label',
      title: 'Label',
      type: 'string',
      options: {
        list: ['New', 'Sales'],
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule: { required: () => { (): any; new(): any; min: { (arg0: number): any; new(): any; }; }; }) => Rule.required().min(0),
    },
    {
      name: 'oldPrice',
      title: 'Old Price',
      type: 'number',
      validation: (Rule: { min: (arg0: number) => any; }) => Rule.min(0),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: { required: () => any; }) => Rule.required(),
    },
  ],
};
