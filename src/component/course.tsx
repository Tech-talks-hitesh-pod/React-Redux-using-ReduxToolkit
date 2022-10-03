import * as React from 'react';
//import 'antd/dist/antd.css';

import { Card } from 'antd';

const { Meta } = Card;

type Courses = {
    description: string;
    id: number;
    title: string;
};

function Courses (props: Courses){
    return(
  <Card
    hoverable
    style={{
      width: 340,
    }}
    cover={<img alt="example" src="https://www.raisin.digital/wp-content/uploads/placeholder.svg" />}
  >
    <Meta title={props.title} description={props.description} />
  </Card>)
};

export default Courses;