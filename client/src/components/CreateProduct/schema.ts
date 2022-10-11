import * as Yup from 'yup';

export const ProductSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required'),
  price: Yup.number().required('Price is required'),
  category: Yup.number().required('Category is required'),
});
