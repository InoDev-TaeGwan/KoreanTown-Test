import React from 'react';
import Svg, {Path} from 'react-native-svg';

const BookmarkSolid = ({color}: any) => {
  return (
    <Svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="bookmark"
      viewBox="0 0 384 512">
      <Path
        fill={color}
        d="M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z"
      />
    </Svg>
  );
};

export default BookmarkSolid;
