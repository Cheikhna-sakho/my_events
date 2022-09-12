import React from 'react'
import HomeMain from '../components/main/Home'
import Layout from '../templates/Layout'

const Home = () => {
  return (
    <Layout page={<HomeMain/>}/>
  )
}

export default Home;