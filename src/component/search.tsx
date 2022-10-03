import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import * as React from "react";
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

const onSearch = (value: any) => {}//console.log(value);

const Searchbox = () => (
  <Space direction="vertical">
    
    <Search placeholder="input search text" onSearch={onSearch} enterButton />
    
  </Space>
);

export default Searchbox;