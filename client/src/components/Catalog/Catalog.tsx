import { FC, useEffect, useState } from "react";
import { Box } from "@mui/material";
import { fetchProducts } from "features/product/products.actions";
import { Status } from "types/Status";
import { useAppDispatch, useAppSelector } from "features/hooks";
import { Sort } from "enums/sort.enum";
import { Filters } from "components/Filters/Filters";
import { SortSelector } from "components/Sort/Sort";
import { ProductsList } from "./components/ProductsList";
import { selectStatus } from "features/product/products.selectors";

export const Catalog: FC = () => {
  const dispatch = useAppDispatch();
  const [sort, setSort] = useState<Sort>(Sort.DATE_DESC);
  const status = useAppSelector(selectStatus);

  useEffect(() => {
    if (status === Status.INIT) {
      dispatch(fetchProducts({ page: 1, sort }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, status]);

  const initLoading = status === Status.LOADING || status === Status.INIT;

  return (
    <Box display="flex">
      <Filters sort={sort} initLoading={initLoading} />
      <Box flex={1}>
        <SortSelector sort={sort} setSort={setSort} />
        <ProductsList initLoading={initLoading} sort={sort} />
      </Box>
    </Box>
  );
};
