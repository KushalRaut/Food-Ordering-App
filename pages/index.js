import { useState } from 'react'
import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import Featured from '../components/Featured'
import PizzaList from '../components/PizzaList'
import styles from '../styles/Home.module.css'
import AddButton from '../components/AddButton'
import Add from '../components/Add'
import { useSelector } from 'react-redux'

export default function Home({ pizzaList={} }) {
  const [close, setClose] = useState(true)
  const { isauthticated } = useSelector((state) => state.auth)

  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant in New York</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      {isauthticated && <AddButton setClose={setClose} />}
      <PizzaList pizzaList={pizzaList} />
      {!close && <Add setClose={setClose} />}
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await axios.get('http://localhost:3000/api/products')
  return {
    props: {
      pizzaList: res.data,
    },
  }
}
