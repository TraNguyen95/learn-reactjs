import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, makeStyles } from "@material-ui/core";
import { useState } from "react";
import { useEffect } from "react";
import categoryapi from "api/categoryApi";

FilterByCatogory.propTypes = {
  onChange: PropTypes.func,
};

function FilterByCatogory({ onChange }) {
  const useStyles = makeStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
    menu: {
      padding: 0,
      margin: 0,
      listStyleType: "none",
      "& li": {
        marginTop: theme.spacing(1),
        transition: "all .25s",
        "&:hover": {
          cursor: "pointer",
          color: theme.palette.primary.dark,
        },
      },
    },
  }));
  const classes = useStyles();
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const list = await categoryapi.getAll();
        setCategoryList(
          list.map((x) => ({
            id: x.id,
            name: x.name,
          }))
        );
      } catch (error) {
        console.log("Fail to fetch Api", error);
      }
    })();
  }, []);
  const handleCategoryClick = (category) => {
    if (onChange) {
      onChange(category.id);
    }
  };
  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2" style={{ textTransform: "uppercase" }}>
        Danh mục sản phẩm
      </Typography>
      <ul className={classes.menu}>
        {categoryList.map((category) => (
          <li key={category.id} onClick={() => handleCategoryClick(category)}>
            <Typography variant="body2">{category.name}</Typography>
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FilterByCatogory;
