import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

/*
    getServerSideProps
    getStaticProps
*/
export const getStaticProps = async () => {
    const response = await fetch('https://platzi-avo.vercel.app/api/avo')
    const { data: productList } = await response.json()
  
    return {
      props: {
        productList,
      },
    }
  }

function Home() {
    const [productList, setProductList] = useState([]);

    const getProducts = async () => {
        try {
            const res = await fetch(`/api/avo/`);
            const data = await res.json();
            console.log(data.data);
            setProductList(data.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
         getProducts();
    },[]);
    return (
        <>

            <h1>Home</h1>
            {
                productList.length > 0 &&
                productList.map(item => {
                    return(
                        <div key={item.name}>{`${item.name}`}</div>
                    )
                })
            }
        </>
    )
}

export default Home