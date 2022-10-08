import { useAppDispatch, useAppSelector } from 'features/hooks';
import { fetchSingleProduct } from 'features/single-product/single-product.actions';
import {
  checkIsBlocked,
  selectSingleProduct,
} from 'features/single-product/single-product.selectors';
import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const ProductPage: FC = () => {
  const { productId } = useParams();
  const dispatch = useAppDispatch();
  const product = useAppSelector(selectSingleProduct);
  const isBlocked = useAppSelector(checkIsBlocked);

  useEffect(() => {
    if (productId) {
      dispatch(fetchSingleProduct({ id: Number(productId) }));
    }
  }, [dispatch, productId]);

  if (isBlocked) {
    return <div>Loading...</div>;
  }

  return <div>ProductPage {product?.title}</div>;
};
