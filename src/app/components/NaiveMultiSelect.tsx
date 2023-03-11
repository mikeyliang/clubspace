import React,{forwardRef} from "react";
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

function multiSelectValue({
    bgColor,
    textColor,
    label,
    onRemove,
    classNames,
    ...others
  }: MultiSelectValueProps & { bgColor:string,textColor:string}) {
    const divStyle = {
      backgroundColor: bgColor,
      color: textColor,
    }
    return(
        <>
        <div {...others}>
            <div className = "flex items-center justify-between rounded-md p-1.5" style={divStyle}>
                <span>
                    {label}
                </span>
                <CloseButton 
                onMouseDown={onRemove}
                variant="transparent"
                color= "gray.0"
                size={22}
                iconSize={14}
                tabIndex={-1}
                />
                
            </div>
        </div>
        </>
    )
  }
interface itemProps{
  label: string;
  bgColor: string;
  textColor: string;
}
// eslint-disable-next-line react/display-name
const multiSelectItem = forwardRef<HTMLDivElement,itemProps>(({label,bgColor,textColor,...others}, ref) => {
  const divStyle = {
    backgroundColor: bgColor,
    color: textColor,
  }
    return(
        <div {...others} ref={ref} >
        <div className = "flex items-center justify-between rounded-md p-1.5 w-min" style={divStyle}>
            <span>{label}</span>
        </div>
        </div>
    )
});


export default function NaiveMultiSelect(naiveMultiSelectProps: naiveMultiSelectPropTypes) {
  return (
  <>
  <MultiSelect
    placeholder={naiveMultiSelectProps.placeholderText}
    nothingFound={naiveMultiSelectProps.nothingFoundText}
    data={naiveMultiSelectProps.data}
    valueComponent={multiSelectValue}
    itemComponent = {multiSelectItem}
    searchable
    label = {naiveMultiSelectProps.labelText}
    limit = {20}
    dropdownPosition = "bottom"
    />
  </>
  );
}
