import React, {useState} from 'react';

import DropDownPicker from 'react-native-dropdown-picker';
import {View} from 'react-native';

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'LA', value: 'LA'},
    {label: 'Berlin', value: 'Berlin'},
  ]);
  return (
    <View>
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
        textStyle={{
          // 리스트 글자 스타일
          color: '#fff',
          fontWeight: 'bold',
        }}
        dropDownContainerStyle={{
          //리스트 스타일
          width: 100,
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          marginLeft: 20,
        }}
        style={{
          // 컨테이너 스타일
          width: 100,
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          marginLeft: 20,
        }}
      />
    </View>
  );
};

export default Dropdown;
