import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { Box } from '@mui/material';
import React, { FC, useState } from 'react';
import { ImageType } from 'services/types/Image';
import Slider from 'react-slick';
import { MainSlider } from './components/MainSlider/MainSlider';
import { PreviewSlider } from './components/PreviewSlider/PreviewSlider';
import { mainGalleryItem, previewItem, previewSliderWrapper } from './styles';
import { Image } from 'components/Common/Image/Image';

interface Props {
  images: ImageType[];
}

export const DesktopGallery: FC<Props> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [sliderTop, setSliderTop] = useState<Slider | null>(null);
  const [sliderBottom, setSliderBottom] = useState<Slider | null>(null);
  const hasPreviews = images.length > 1;

  return (
    <>
      <Box mb={[0, 1]}>
        <MainSlider
          ref={(slider) => setSliderTop(slider)}
          asNavFor={sliderBottom ?? undefined}
          afterChange={(index) => setSelectedImage(index)}
        >
          {images.map((image) => (
            <Box key={image.id + '_main'} role="button">
              <Image
                sx={mainGalleryItem}
                alt={String(image.id)}
                src={image.url}
              />
            </Box>
          ))}
        </MainSlider>
      </Box>

      {hasPreviews && (
        <Box sx={previewSliderWrapper}>
          <PreviewSlider
            ref={(slider) => setSliderBottom(slider)}
            asNavFor={sliderTop ?? undefined}
          >
            {images.map((image, index) => (
              <Box key={image.id} role="button">
                <Image
                  sx={previewItem(index === selectedImage)}
                  src={image.url}
                  alt={String(image.id)}
                />
              </Box>
            ))}
          </PreviewSlider>
        </Box>
      )}
    </>
  );
};
