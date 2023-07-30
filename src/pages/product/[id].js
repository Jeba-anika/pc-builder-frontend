import React from 'react';

const ProductDetail = ({ ProductDetail }) => {

    return (
        <div>
            {ProductDetail.productName}
        </div>
    );
};

export default ProductDetail;

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