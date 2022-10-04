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
import { setFilter } from 'features/filters/filters.slice';
import { addOrRemoveArrayElement } from 'services/utils/array/add-or-remove-array-element';
import { selectFilters } from 'features/filters/filters.selectors';

export const Filters: FC = () => {
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
    <Box sx={{ minWidth: 240, mr: 4 }}>
      <Box sx={{ height: 60 }} alignItems="center" display="flex">
        <Typography variant="h5">Filters</Typography>
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
          Category
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
          Price
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
