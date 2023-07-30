import React from 'react';
import { Button, Card } from 'antd';
import Link from 'next/link';


const PcBuilderCard = ({ category }) => (
    <Card title={category.name} extra={<Button type="primary"><Link href={`/category/${category.id}`}>Choose</Link></Button>}>
        <Card type="inner" title="Inner Card title" extra={<a href="#">More</a>}>
            {category.name}
        </Card>
        <Card
            style={{
                marginTop: 16,
            }}
            type="inner"
            title="Inner Card title"
            extra={<a href="#">More</a>}
        >
            Inner Card content
        </Card>
    </Card>
);
export default PcBuilderCard;