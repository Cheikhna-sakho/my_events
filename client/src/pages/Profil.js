import React, { useContext } from 'react'
import ProfilMain from '../components/main/Profil';
import { UserContext } from '../contexts/AuthProvider';
import Layout from '../templates/Layout';
import Login from './Login';

const Profil = () => {
  const { contextUser } = UserContext();
  const [user] = contextUser;

  return (
    user ? <Layout page={<ProfilMain />} /> : <Login />
  )
}

export default Profil;