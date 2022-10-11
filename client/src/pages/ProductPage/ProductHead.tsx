import { Helmet } from 'react-helmet-async';
import React, { FC } from 'react';
import { useAppSelector } from 'features/hooks';
import { selectSingleProduct } from 'features/single-product/single-product.selectors';
import { sanitize } from 'services/utils/sanitize';

export const ProductHead: FC = () => {
  const product = useAppSelector(selectSingleProduct);

  if (!product) {
    return null;
  }

  return (
    <Helmet>
      <title>{sanitize(product.title)}</title>
      <meta name="keywords" content={product.title} />
      <meta name="title" content={product.title} />
      <meta name="description" content={product.description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={sanitize(product.title)} />
      <meta property="og:description" content={product.description} />
    </Helmet>
  );
};
