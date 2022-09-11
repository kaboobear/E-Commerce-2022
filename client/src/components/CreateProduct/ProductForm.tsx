import { FC } from "react";
import { Button, MenuItem, Select, TextField, Grid, Box } from "@mui/material";
import { Form, Formik, FormikProps } from "formik";
import { ProductFormData } from "api/products/types/product.interface";
import { Category, CategoryName } from "api/products/types/category.interface";
import { ProductSchema } from "./schema";
import { useAppDispatch } from "features/hooks";
import { addProduct } from "features/product/products.actions";

export const ProductForm: FC = () => {
  const dispatch = useAppDispatch();
  const initial: ProductFormData = {
    title: "",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image:
      "http://cdn.shopify.com/s/files/1/0593/0480/4531/products/IPHONE121_COLOR-PURPLE_CAPACITY-ALL.png",
    category: Category.PHONE,
    price: 500,
  };

  const getErrorText = (
    formikObject: FormikProps<ProductFormData>,
    fieldName: keyof ProductFormData
  ) => {
    if (formikObject.errors[fieldName] && formikObject.touched[fieldName]) {
      return formikObject.errors[fieldName];
    }
    return null;
  };

  return (
    <Box pt={1}>
      <Formik
        initialValues={initial}
        validationSchema={ProductSchema}
        onSubmit={(values) => {
          dispatch(addProduct(values));
        }}
      >
        {(formik) => (
          <Form>
            <Grid container spacing={2}>
              <Grid item sm={6} xs={12}>
                <Select
                  id="category"
                  type="select"
                  fullWidth
                  {...formik.getFieldProps("category")}
                >
                  {Object.entries(CategoryName).map(([value, name]) => (
                    <MenuItem value={Number(value)}>{name}</MenuItem>
                  ))}
                </Select>
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField
                  id="title"
                  type="text"
                  label="Title"
                  fullWidth
                  helperText={getErrorText(formik, "title")}
                  {...formik.getFieldProps("title")}
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField
                  id="description"
                  type="text"
                  label="Description"
                  fullWidth
                  helperText={getErrorText(formik, "description")}
                  {...formik.getFieldProps("description")}
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField
                  id="image"
                  type="text"
                  label="Image"
                  fullWidth
                  helperText={getErrorText(formik, "image")}
                  {...formik.getFieldProps("image")}
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField
                  id="price"
                  type="number"
                  label="Price"
                  fullWidth
                  helperText={getErrorText(formik, "price")}
                  {...formik.getFieldProps("price")}
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{ height: 1, boxShadow: "none" }}
                >
                  Create
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
