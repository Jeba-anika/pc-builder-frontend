import ProductCard from '@/components/ProductCard';
import RootLayout from '@/components/layouts/RootLayout';
import { useRouter } from 'next/router';
import React from 'react';

const CategoryProducts = ({ products }) => {
    const router = useRouter()
    const { query } = router

    return (
        <div className='each-category-products-container' >
            {
                products.map(product => <ProductCard product={product} key={product._id} isPcBuilderPage={query?.pcBuilder}></ProductCard>)
            }
        </div>
    );
};

export default CategoryProducts;


CategoryProducts.getLayout = function getLayout(page) {
    return (
        <RootLayout>{page}</RootLayout>
    )
}

export const getStaticPaths = async () => {
    const res = await fetch("https://pc-builder-backend-tan.vercel.app/category")
    const data = await res.json()
    const paths = data.map(item => ({ params: { id: item.id } }))
    return { paths, fallback: "blocking" }
}

export const getStaticProps = async ({ params }) => {
    const res = await fetch(`https://pc-builder-backend-tan.vercel.app/category/${params.id}`)
    const data = await res.json()
    return {
        props: { products: data }
    }
}