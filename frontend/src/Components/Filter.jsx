import {
  Box,
  Button,
  Checkbox,
  Input,
  Stack,
  RadioGroup,
  Radio,
  FormLabel,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { query, SearchTitle } from "../Redux/Student/Action.type";
import { StudentAdd } from "./StudentAdd";

const Filter = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const GetCategoryURL = searchParams.getAll("category");
  const [category, setcategory] = useState(GetCategoryURL || []);
  const URLSort = searchParams.get("sortBy");
  const [sortBy, setsortBy] = useState(URLSort || "");

  // const [role, setRole] = useState("");

  const HandleOnChange = (e) => {
    let val = e.target.value;
    let newCategory = [...category];

    if (category.includes(val)) {
      newCategory.splice(newCategory.indexOf(val), 1);
    } else {
      newCategory.push(val);
    }
    setcategory(newCategory);
  };

  useEffect(() => {
    if (category || sortBy) {
      let params = {};
      category && (params.category = category);
      sortBy && (params.sortBy = sortBy);

      setSearchParams(params);
    }
   
    dispatch(query(category, sortBy));
  }, [category, searchParams, setSearchParams, dispatch, sortBy]);

  return (
    <Box p="20px">
      <Box>
        <StudentAdd />
      </Box>
      <Stack spacing={[1]} direction={["column"]} p="6">
        <FormLabel mt="20px" mb="30px">
          Filter By Gender
        </FormLabel>
        <Checkbox
          size="md"
          colorScheme="green"
          value="male"
          onChange={HandleOnChange}
        >
          Male
        </Checkbox>
        <Checkbox
          size="md"
          colorScheme="green"
          value="female"
          onChange={HandleOnChange}
        >
          Female
        </Checkbox>
      </Stack>

      <RadioGroup defaultValue="2" m={3}>
        <FormLabel mt="20px" mb="30px">
          Sort By Age
        </FormLabel>
        <Stack spacing={5} direction="column">
          <Radio
            colorScheme="green"
            value="htl"
            onChange={(e) => setsortBy(e.target.value)}
          >
            Low To High
          </Radio>
          <Radio
            colorScheme="green"
            value="lth"
            onChange={(e) => setsortBy(e.target.value)}
          >
            High to Low
          </Radio>
        </Stack>
      </RadioGroup>
    </Box>
  );
};

export default Filter;
