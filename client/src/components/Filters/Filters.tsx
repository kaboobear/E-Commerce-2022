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
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { FC, useEffect } from "react";
import { Category, CategoryKeys, CategoryName } from "enums/category.enums";
import { Price, PriceKeys, PriceName } from "enums/price.enum";
import { Search } from "components/Search/Search";
import { useAppDispatch, useAppSelector } from "features/hooks";
import { setFilter } from "features/filters/filters.slice";
import { addOrRemoveArrayElement } from "utils/array/add-or-remove-array-element";
import { fetchProducts } from "features/product/products.actions";
import { Sort } from "enums/sort.enum";

interface Props {
  sort: Sort;
  initLoading: boolean;
}

export const Filters: FC<Props> = ({ sort, initLoading }) => {
  const dispatch = useAppDispatch();
  const { search, category, price } = useAppSelector((state) => state.filters);

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
      categoryValue
    );
    dispatch(setFilter({ category: choosenCategories }));
  };

  useEffect(() => {
    if (!initLoading) {
      dispatch(fetchProducts({ search, category, price, page: 1, sort }));
      dispatch(setFilter({ page: 1 }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, category, price, sort]);

  return (
    <Box sx={{ minWidth: 250, mr: 4 }}>
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
                  label={CategoryName[categoryValue]}
                />
              );
            })}
          </FormGroup>
        </AccordionDetails>
      </Accordion>

      <Accordion square>
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
                  label={PriceName[priceValue]}
                />
              );
            })}
          </RadioGroup>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
