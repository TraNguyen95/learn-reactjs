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
  useEffect(() => {
    (async () => {
      try {
        const { data } = await productsApi.getAll({ _page: 1, _limit: 10 });
        setProductList(data);
      } catch (error) {
        console.log("fail to fetch product list", error);
      }
      setLoading(false);
    })();
  }, []);
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
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
