import React from "react";
import {
  MultiSelect,
  Box,
  CloseButton,
  SelectItemProps,
  MultiSelectValueProps,
  rem,
  Flex,
} from "@mantine/core";
interface multiSelectDataProps {
    label: string;
    value: string;
    bgColor: string;
    textColor: string;
}
type naiveMultiSelectPropTypes = {
  labelText: string;
  placeholderText: string;
  nothingFoundText: string;
  data: Array<multiSelectDataProps>;

};

export default function NaiveMultiSelect() {
  return <></>;
}
