import { Box } from '@mui/material';
import { galleryWrapper, gallery } from 'components/Product/styles';
import React, { FC } from 'react';
import { ImageType } from 'services/types/Image';
import { HideUpSm } from 'services/utils/show-and-hide/hide-up-sm';
import { ShowUpSm } from 'services/utils/show-and-hide/show-up-sm';
import { DesktopGallery } from './DesktopGallery';
import { MobileGallery } from './MobileGallery';

interface Props {
  images: ImageType[];
}

export const Gallery: FC<Props> = ({ images }) => {
  return (
    <Box sx={gallery}>
      <Box sx={galleryWrapper}>
        <ShowUpSm>
          <DesktopGallery images={images} />
        </ShowUpSm>

        <HideUpSm>
          <MobileGallery images={images} />
        </HideUpSm>
      </Box>
    </Box>
  );
};
