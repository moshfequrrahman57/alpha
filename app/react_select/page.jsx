'use client'
import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated'
import chroma from 'chroma-js';
const ReactSelect = () => {

   const option= [
  { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
  { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
  { value: 'purple', label: 'Purple', color: '#5243AA' },
  { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
  { value: 'orange', label: 'Orange', color: '#FF8B00' },
  { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  { value: 'green', label: 'Green', color: '#36B37E' },
  { value: 'forest', label: 'Forest', color: '#00875A' },
  { value: 'slate', label: 'Slate', color: '#253858' },
  { value: 'silver', label: 'Silver', color: '#666666' },
];


    const animateComponents = makeAnimated();
    const dropDownStyles={
    control: (baseStyles, state) => ({
      ...baseStyles,
      borderColor: state.isFocused ? 'yellow' : 'green',
    }),
     option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : undefined,
      color: isDisabled
        ? '#ccc'
        : isSelected
        ? chroma.contrast(color, 'white') > 2
          ? 'white'
          : 'black'
        : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled
          ? isSelected
            ? data.color
            : color.alpha(0.3).css()
          : undefined,
      },
    };
  },
   multiValue: (styles, { data }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css(),
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color,
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ':hover': {
      backgroundColor: data.color,
      color: 'white',
    },
  }),
  };
    return (
     <div className='flex flex-col items-center '>
        <h1 className='text-3xl text-center w-1/2 mt-24  bg-[#e5a600]'>React Select</h1>
       
            <div className='container  mt-2'>
            <Select closeMenuOnSelect={false}
                components={animateComponents}
				isMulti
				defaultValue={[option[2], option[3]]}
				options={option} 
                 styles={dropDownStyles}
                />
            </div>
           </div>
    );
};

export default ReactSelect;