import PcBuilderCard from '@/components/PcBuilderCard';
import RootLayout from '@/components/layouts/RootLayout';
import { Button, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const PcBuilder = ({ categories }) => {
    const pcBuilder = useSelector((state) => state.pcBuilder)
    const [isAllComponentAdded, setIsAllComponentAdded] = useState(false);

    //For antd toast
    const [messageApi, contextHolder] = message.useMessage()
    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'PC build completed',
        });
    };


    useEffect(() => {
        // Function to check if all components are added
        const checkAllComponentsAdded = () => {
            const keys = Object.keys(pcBuilder);
            for (let i = 0; i < keys.length; i++) {
                if (Object.keys(pcBuilder[keys[i]]).length === 0) {
                    return false; // If any component is empty, return false
                }
            }
            return true; // If all components are added, return true
        };

        const allComponentsAdded = checkAllComponentsAdded();
        console.log(allComponentsAdded)
        setIsAllComponentAdded(allComponentsAdded);
    }, [pcBuilder]);


    return (
        <div className='pc-builder-container'>
            {contextHolder}
            <div style={{ boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)", padding: '15px', borderRadius: '5px' }}>
                {categories.map(category => <PcBuilderCard category={category} key={category.id}></PcBuilderCard>)}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <Button onClick={success} disabled={!isAllComponentAdded} type='primary'>Complete Build</Button>
            </div>
        </div>
    );
};

export default PcBuilder;

PcBuilder.getLayout = function getLayout(page) {
    return (
        <RootLayout>{page}</RootLayout>
    )
}

export const getServerSideProps = async () => {
    const categoriesResponse = await fetch("https://pc-builder-backend-tan.vercel.app/category");
    const categoriesData = await categoriesResponse.json();

    return {
        props: {
            categories: categoriesData
        }
    }
}