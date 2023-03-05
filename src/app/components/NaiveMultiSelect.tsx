import React,{forwardRef} from "react";
import { IconX } from "@tabler/icons-react";
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
//  data: Array<multiSelectDataProps>;

};

const data = [
    {
        label: 'Engineering',
        value: '#713212'
    },
    {
        label: 'Sports',
        value: '#129582'
    }
]
//<button onClick={onRemove}><IconX /></button>
function multiSelectValue({
    value,
    label,
    onRemove,
    classNames,
    ...others
  }: MultiSelectValueProps & { value: string }) {
    return(
        <>
        <div {...others}>
            <div className = "flex items-center justify-between rounded-md p-1" style={{"backgroundColor": `${value}`}}>
                <span>
                    {label}
                </span>
                <CloseButton 
                onMouseDown={onRemove}
                variant="transparent"
                color="white"
                size={22}
                iconSize={14}
                tabIndex={-1}
                />
                
            </div>
        </div>
        </>
    )
  }

// eslint-disable-next-line react/display-name
const multiSelectItem = forwardRef<HTMLDivElement,SelectItemProps>(({label,value,...others}, ref) => {
    return(
        <div {...others} ref={ref}>
            <span>{label}</span>
        </div>
    )
});


export default function NaiveMultiSelect(naiveMultiSelectProps: naiveMultiSelectPropTypes) {
  return (
  <>
  <MultiSelect
    placeholder={naiveMultiSelectProps.placeholderText}
    nothingFound={naiveMultiSelectProps.nothingFoundText}
    data={data}
    valueComponent={multiSelectValue}
    itemComponent = {multiSelectItem}
    searchable
    label = {naiveMultiSelectProps.labelText}
    limit = {20}
    />
  </>
  );
}
