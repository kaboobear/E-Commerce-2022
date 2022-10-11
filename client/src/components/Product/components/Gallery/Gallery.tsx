import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { Box } from '@mui/material';
import React, { FC, useState } from 'react';
import { Image } from 'services/types/Image';
import Slider from 'react-slick';
import { MainSlider } from './components/MainSlider/MainSlider';
import { PreviewSlider } from './components/PreviewSlider/PreviewSlider';
import { mainGalleryItem, previewItem, previewSliderWrapper } from './styles';

interface Props {
  images: Image[];
}

export const Gallery: FC<Props> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [sliderTop, setSliderTop] = useState<Slider | null>(null);
  const [sliderBottom, setSliderBottom] = useState<Slider | null>(null);
  const hasPreviews = images.length > 1;

  return (
    <>
      <Box mb={2}>
        <MainSlider
          ref={(slider) => setSliderTop(slider)}
          asNavFor={sliderBottom ?? undefined}
          afterChange={(index) => setSelectedImage(index)}
        >
          {images.map((image) => (
            <Box key={image.id + '_main'} role="button">
              <Box sx={mainGalleryItem} component="img" src={image.url} />
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
                <Box
                  sx={previewItem(index === selectedImage)}
                  component="img"
                  src={image.url}
                />
              </Box>
            ))}
          </PreviewSlider>
        </Box>
      )}
    </>
  );
};
