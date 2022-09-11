import * as Yup from "yup";

export const ProductSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  image: Yup.string().required("Image is required"),
  // todo: bigger than one
  price: Yup.number().required("Price is required"),
  // todo: add enum to yup
  category: Yup.number().required("Category is required"),
});