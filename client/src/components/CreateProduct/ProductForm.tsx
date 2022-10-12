import { FC } from 'react';
import { Button, MenuItem, Select, TextField, Grid, Box } from '@mui/material';
import { Form, Formik } from 'formik';
import { ProductFormData } from 'features/products/products.types';
import { Category, CategoryLabels } from 'services/enums/category.enums';
import { ProductSchema } from './schema';
import { useAppDispatch } from 'features/hooks';
import { addProduct } from 'features/products/products.actions';
import { getErrorText } from 'services/utils/get-formik-error-text';

export const ProductForm: FC = () => {
  const dispatch = useAppDispatch();
  const initial: ProductFormData = {
    title: '',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
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
            <Grid container columnSpacing={2}>
              <Grid item sm={6} xs={12}>
                <Select
                  id="category"
                  type="select"
                  fullWidth
                  {...formik.getFieldProps('category')}
                >
                  {Object.entries(CategoryLabels).map(([value, name]) => (
                    <MenuItem key={value} value={value}>
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
                  sx={{ height: 56, boxShadow: 'none' }}
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
