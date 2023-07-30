import React from 'react';
import { Button, Card } from 'antd';
import Link from 'next/link';
import { useSelector } from 'react-redux';


const PcBuilderCard = ({ category }) => {
    const state = useSelector((state) => state)
    const addedComponent = state.pcBuilder[`${category.id}`]
    console.log(addedComponent)
    return (
        <Card style={{ marginBottom: '50px' }} title={category.name} extra={<Button type="primary"><Link href={{
            pathname: `/category/${category.id}`,
            query: { pcBuilder: true },
        }}>Choose</Link></Button>}>
            {
                addedComponent?._id && <Card type="inner" title={addedComponent.productName} extra={<p style={{ fontWeight: 'bold' }}>BDT {addedComponent.price}</p>}>
                    {addedComponent.status}
                </Card>
            }
            {/* <Card
                style={{
                    marginTop: 16,
                }}
                type="inner"
                title="Inner Card title"
                extra={<a href="#">More</a>}
            >
                Inner Card content
            </Card> */}
        </Card>
    )
};
export default PcBuilderCard;