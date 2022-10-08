import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  Radio,
  IconButton,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { FC } from 'react';
import {
  Category,
  CategoryKeys,
  CategoryLabels,
} from 'services/enums/category.enums';
import { Price, PriceKeys, PriceLabels } from 'services/enums/price.enum';
import { Search } from 'components/Catalog/Search/Search';
import { useAppDispatch, useAppSelector } from 'features/hooks';
import CloseIcon from '@mui/icons-material/Close';
import { setFilter } from 'features/filters/filters.slice';
import { addOrRemoveArrayElement } from 'services/utils/array/add-or-remove-array-element';
import { selectFilters } from 'features/filters/filters.selectors';
import { filterTitle, filterWrapper } from './styles';
import { HideUpLg } from 'services/utils/show-and-hide/hide-up-lg';

interface Props {
  close?: (event: React.KeyboardEvent | React.MouseEvent) => void;
}

export const Filters: FC<Props> = ({ close }) => {
  const dispatch = useAppDispatch();
  const { search, category, price } = useAppSelector(selectFilters);

  const changePriceFilter = (priceValue: Price) => {
    if (priceValue === price) {
      dispatch(setFilter({ price: null }));
    } else {
      dispatch(setFilter({ price: priceValue }));
    }
  };

  const changeCategoryFilter = (categoryValue: Category) => {
    let choosenCategories = addOrRemoveArrayElement<Category>(
      category,
      categoryValue,
    );
    dispatch(setFilter({ category: choosenCategories }));
  };

  return (
    <Box sx={filterWrapper}>
      <Box sx={filterTitle} alignItems="center" display="flex">
        <Typography variant="subtitle1">Filters</Typography>
        <HideUpLg>
          <IconButton onClick={close}>
            <CloseIcon />
          </IconButton>
        </HideUpLg>
      </Box>

      <Search
        value={search}
        setValue={(text: string) => dispatch(setFilter({ search: text }))}
      />

      <Accordion defaultExpanded square>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="subtitle2">Category</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            {CategoryKeys.map((categoryKey) => {
              const categoryValue = Category[categoryKey];
              return (
                <FormControlLabel
                  key={categoryValue}
                  control={
                    <Checkbox
                      checked={
                        category ? category.includes(categoryValue) : false
                      }
                      onClick={() => changeCategoryFilter(categoryValue)}
                    />
                  }
                  label={CategoryLabels[categoryValue]}
                />
              );
            })}
          </FormGroup>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded square>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="subtitle2">Price</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            {PriceKeys.map((priceKey) => {
              const priceValue = Price[priceKey];
              return (
                <FormControlLabel
                  key={priceKey}
                  value={priceValue}
                  control={
                    <Radio
                      checked={priceValue === price}
                      onClick={() => {
                        changePriceFilter(priceValue);
                      }}
                    />
                  }
                  label={PriceLabels[priceValue]}
                />
              );
            })}
          </RadioGroup>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
