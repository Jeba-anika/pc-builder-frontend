import React from 'react';
import { Button, Card } from 'antd';
import Link from 'next/link';
const FeaturedCard = ({ category }) => (
    <Link href={`/category/${category.id}`}>
        <Card
            style={{
                width: 300,
                textAlign: "center",
                boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)"
            }}
        >
            <Button style={{ fontWeight: "bold", }} type="link">{category.name}</Button>

        </Card>
    </Link>
);
export default FeaturedCard;