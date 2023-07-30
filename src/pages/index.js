import React from 'react';
import Head from 'next/head';
import RootLayout from '@/components/layouts/RootLayout';
import Navbar from '@/components/Navbar';
import ProductCard from '@/components/ProductCard';
import FeaturedCard from '@/components/FeaturedCard';

const Home = ({ categories, featured }) => {
  return (
    <div>
      <Head>
        <meta name="home page" description="This is a pc builder website"></meta>
        <title>PC Builder</title>
      </Head>
      <main className='home-container' >
        <div className='featured' >
          <div style={{ textAlign: "center" }}>
            <h3 style={{ fontWeight: 'bold' }}>Featured Products</h3>
          </div>
        </div>
        <div className='product-container' >
          {featured?.map(product => <ProductCard key={product.id} product={product}></ProductCard>)}
        </div>
        <div className='featured'>
          <div style={{ textAlign: "center" }}>
            <h3 style={{ fontWeight: 'bold' }}>Featured Category</h3>
            Get Your Desired Product from Featured Category!
          </div>
        </div>
        <div className='category-section' >
          {categories.map(category => <FeaturedCard key={category.id} category={category}></FeaturedCard>)}
        </div>
      </main>
    </div>
  );
};

export default Home;

Home.getLayout = function getLayout(page) {
  return (
    <RootLayout>{page}</RootLayout>
  )
}
// export const getStaticProps = async () => {
//   const res = await fetch("https://pc-builder-backend-tan.vercel.app/category")
//   const data = await res.json()
//   return {
//     props: {
//       categories: data
//     }
//   }
// }
export const getStaticProps = async () => {
  try {
    const categoriesResponse = await fetch("https://pc-builder-backend-tan.vercel.app/category");
    const categoriesData = await categoriesResponse.json();

    const featuredResponse = await fetch("https://pc-builder-backend-tan.vercel.app/featured");
    const featured = await featuredResponse.json();

    return {
      props: {
        categories: categoriesData,
        featured: featured,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        categories: [],
        featured: [],
      },
    };
  }
};