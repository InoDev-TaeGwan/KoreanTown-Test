import Slider from '@react-native-community/slider';
import React, {useState} from 'react';
import {Text} from 'react-native';
import styled from '@emotion/native';

const Container = styled.View`
  padding: 5px 20px;
  border-bottom-width: 1px;
  border-bottom-color: #999;
`;
const ValueContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
const RangeText = styled.Text`
  color: #df8d6f;
`;

const RangeSlider = ({}) => {
  const [myValue, setMyValue] = useState(0);
  return (
    <Container>
      <Text> {myValue} </Text>
      <ValueContainer>
        <RangeText> 동갑</RangeText>
        <RangeText> 5 </RangeText>
        <RangeText> 10 </RangeText>
        <RangeText> 15 </RangeText>
        <RangeText> 20</RangeText>
        <RangeText> 전체연령 </RangeText>
      </ValueContainer>
      <Slider
        style={{height: 40}}
        value={myValue} // == this.state.value
        onValueChange={value => setMyValue(value)} // 슬라이더를 움질일때 출력값 변환
        minimumValue={0} // 최소값 설정
        maximumValue={100} // 최대값 설정
        maximumTrackTintColor="yellow" // 값이 크면 빨간색
        minimumTrackTintColor="#df8d6f" // 값이 작으면 파란색
        step={1} // 1단위로 값이 변경
        thumbTintColor="#df8d6f"
      />
    </Container>
  );
};

export default RangeSlider;
