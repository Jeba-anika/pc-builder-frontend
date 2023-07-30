import Image from 'next/image';
import React from 'react';
import { Tabs } from 'antd';
import RootLayout from '@/components/layouts/RootLayout';

const ProductDetail = ({ ProductDetail }) => {
    const onChange = (key) => {
        console.log(key);
    };
    const items = [
        {
            key: '1',
            label: `Description`,
            children: ProductDetail.Description,
        },
        {
            key: '2',
            label: `Reviews`,
            children: ProductDetail.Reviews.map(review => <p key={review}>{review}</p>),
        }
    ];

    return (
        <div className='product-container' style={{ margin: "5px 50px" }}>
            <div className='top-part' >
                <div>
                    <Image src={ProductDetail.image} alt={ProductDetail.productName} width={300} height={300}></Image>
                </div>
                <div>
                    <h2>{ProductDetail.productName}</h2>
                    <p style={{ border: "1px solid gray", width: "fit-content", padding: '4px 8px', borderRadius: '50px' }}>BDT {ProductDetail.price} ({ProductDetail.status})</p>
                    <p>Category: {ProductDetail.category}</p>
                    <p style={{ fontWeight: "bold", fontSize: '20px' }}>Key Features</p>
                    {
                        ProductDetail["Key Features"].map(feature => <p key={feature}>{feature}</p>)
                    }
                    <p>Individual Rating: {ProductDetail["Individual Rating"]}</p>
                    <p>Average Rating: {ProductDetail["Average Rating"]}</p>
                </div>
            </div>
            <div>
                <Tabs
                    defaultActiveKey="1" items={items} onChange={onChange}
                />
            </div>
        </div>
    );
};

export default ProductDetail;

ProductDetail.getLayout = function getLayout(page) {
    return (
        <RootLayout>{page}</RootLayout>
    )
}

export const getStaticPaths = async () => {
    const res = await fetch("https://pc-builder-backend-tan.vercel.app/products")
    const data = await res.json()

    const paths = data.map(item => ({
        params: { id: item._id }
    }))
    return {
        paths, fallback: "blocking"
    }
}

export const getStaticProps = async ({ params }) => {
    const res = await fetch(`https://pc-builder-backend-tan.vercel.app/product/${params.id}`)
    const data = await res.json()
    console.log(data)
    return {
        props: { ProductDetail: data[0] }
    }
}