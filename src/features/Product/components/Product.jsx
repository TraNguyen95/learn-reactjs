import { Box, Typography, makeStyles } from "@material-ui/core";
import { STATIC_HOST, THUMBNAIL_PLAHOLDER } from "constants/index";
import PropTypes from "prop-types";
import React from "react";

Product.propTypes = {
  product: PropTypes.object,
};
const useStyle = makeStyles((theme) => ({
  thumbnailImg: {
    minHeight: "215px",
  },
}));

function Product({ product }) {
  const classes = useStyle();
  const thumbnailUrl = product.thumbnail
    ? `${STATIC_HOST}${product.thumbnail?.url}`
    : THUMBNAIL_PLAHOLDER;
  return (
    <Box padding={1}>
      <Box padding={1} className={classes.thumbnailImg}>
        <img src={thumbnailUrl} alt={product.name} width="100%" />
      </Box>

      <Typography variant="body2">{product.name}</Typography>
      <Typography variant="body2">
        <Box component="span" fontSize={16} fontWeight="bold" mr={1}>
          {" "}
          {new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(product.salePrice)}
        </Box>
        {product.promotionPercent > 0 ? ` -${product.promotionPercent}%` : ""}
      </Typography>
    </Box>
  );
}

export default Product;
