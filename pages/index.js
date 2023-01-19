import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Card from '@components/card';

/*
    getServerSideProps  --> bajo demanda, cada request del usuario
    getStaticProps  --> solo sucede una unica vez cuando hacemos npm Build
    getStaticPaths --> 
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
    }, []);
    return (
        <>
            <main className="main">
                <h1 className="titulo">App avocados 🥑</h1>
                <div className="home">
                    {
                        productList.length > 0 &&
                        productList.map(item => {
                            return (
                                <div className="contenedorCardHome">
                                    <Card {...item} />
                                    <Link href={`/avocado/${item.id}`}>
                                        <button className="BtnVerDetalles">Ver detalles</button>
                                    </Link>
                                </div>
                            )
                        })
                    }

                </div>
            </main>
        </>
    )
}

export default Home