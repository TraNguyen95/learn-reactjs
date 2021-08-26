import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import { useEffect } from "react";
import productsApi from "api/productApi";
import ProductSkeletonList from "../components/ProductSkeletonList";
import ProductList from "../components/ProductList";
import { Pagination } from "@material-ui/lab";

const useStyle = makeStyles((theme) => ({
  root: {},
  left: {
    width: "250px",
  },
  right: {
    flex: "1 1 0",
  },
}));
function ListPage(props) {
  const classes = useStyle();
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    limit: 10,
    total: 10,
    page: 1,
  });
  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 10,
  });
  const handlePageChange = (e, page) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      _page: page,
    }));
    console.log("page", page);
  };
  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await productsApi.getAll(filters);
        setProductList(data);
        console.log(data, pagination);
        setPagination(pagination);
      } catch (error) {
        console.log("fail to fetch product list", error);
      }
      setLoading(false);
    })();
  }, [filters]);
  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>left</Paper>
          </Grid>
          <Grid item className={classes.right}>
            <Paper elevation={0}>
              {loading ? (
                <ProductSkeletonList />
              ) : (
                <ProductList productList={productList} />
              )}{" "}
              <Pagination
                color="primary"
                count={Math.ceil(pagination.total / pagination.limit)}
                page={pagination.page}
                onChange={handlePageChange}
              ></Pagination>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
