import React, {FC, useState} from 'react';

import DropDownPicker from 'react-native-dropdown-picker';

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'LA', value: 'LA'},
    {label: 'Berlin', value: 'Berlin'},
  ]);
  return (
    <DropDownPicker
      placeholder="선택"
      searchable={false}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      showTickIcon={false}
      arrowIconStyle={{
        borderColor: 'white',
      }}
      labelStyle={{
        fontWeight: 'bold',
        color: '#fff',
      }}
      textStyle={{
        color: '#fff',
      }}
      dropDownContainerStyle={{
        width: 100,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        marginLeft: 20,
      }}
      style={{
        width: 100,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        marginLeft: 20,
      }}
    />
  );
};

export default Dropdown;
