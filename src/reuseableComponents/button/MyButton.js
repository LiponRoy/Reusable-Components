import React from 'react';

const MyButton = ({onClick,style,children  }) => {
  return (
    <button style={style} onClick={onClick}>
      {children}
    </button>
  );
};

export default MyButton;
