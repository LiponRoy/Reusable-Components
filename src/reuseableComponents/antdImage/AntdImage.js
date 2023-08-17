import React from 'react';
import { Image } from 'antd';

const AntdImage = ({width,image}) => (
  <Image
    width={width}
    src={image}
  />
);
export default AntdImage;

