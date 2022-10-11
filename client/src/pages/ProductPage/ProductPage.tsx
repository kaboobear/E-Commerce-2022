import ProductNotFound from 'components/Product/components/ProductNotFound/ProductNotFound';
import { Product } from 'components/Product/Product';
import { useAppDispatch, useAppSelector } from 'features/hooks';
import { fetchSingleProduct } from 'features/single-product/single-product.actions';
import {
  checkIsBlocked,
  checkIsError,
  selectSingleProduct,
} from 'features/single-product/single-product.selectors';
import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProductHead } from './ProductHead';

export const ProductPage: FC = () => {
  const { productId } = useParams();
  const dispatch = useAppDispatch();
  const product = useAppSelector(selectSingleProduct);
  const isBlocked = useAppSelector(checkIsBlocked);
  const isError = useAppSelector(checkIsError);

  useEffect(() => {
    if (productId) {
      dispatch(fetchSingleProduct({ id: Number(productId) }));
    }
  }, [dispatch, productId]);

  if (isBlocked) {
    return <>todo: here will be skeleton</>;
  }

  if (!product || isError) {
    return <ProductNotFound />;
  }

  return (
    <>
      <ProductHead />
      <Product />
    </>
  );
};
