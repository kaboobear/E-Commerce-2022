import { FC } from 'react';
import { Button, MenuItem, Select, TextField, Grid, Box } from '@mui/material';
import { Form, Formik } from 'formik';
import { ProductFormData } from 'features/product/products.types';
import { Category, CategoryName } from 'services/enums/category.enums';
import { ProductSchema } from './schema';
import { useAppDispatch } from 'features/hooks';
import { addProduct } from 'features/product/products.actions';
import { getErrorText } from 'services/utils/get-formik-error-text';

export const ProductForm: FC = () => {
  const dispatch = useAppDispatch();
  const initial: ProductFormData = {
    title: '',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    image:
      'http://cdn.shopify.com/s/files/1/0593/0480/4531/products/IPHONE121_COLOR-PURPLE_CAPACITY-ALL.png',
    category: Category.PHONE,
    price: 500,
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
                  {...formik.getFieldProps('category')}
                >
                  {Object.entries(CategoryName).map(([value, name]) => (
                    <MenuItem key={value} value={Number(value)}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField
                  id="title"
                  type="text"
                  label="Title"
                  fullWidth
                  helperText={getErrorText<ProductFormData>(formik, 'title')}
                  {...formik.getFieldProps('title')}
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField
                  id="description"
                  type="text"
                  label="Description"
                  fullWidth
                  helperText={getErrorText<ProductFormData>(
                    formik,
                    'description',
                  )}
                  {...formik.getFieldProps('description')}
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField
                  id="image"
                  type="text"
                  label="Image"
                  fullWidth
                  helperText={getErrorText<ProductFormData>(formik, 'image')}
                  {...formik.getFieldProps('image')}
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField
                  id="price"
                  type="number"
                  label="Price"
                  fullWidth
                  helperText={getErrorText<ProductFormData>(formik, 'price')}
                  {...formik.getFieldProps('price')}
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{ height: 1, boxShadow: 'none' }}
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
