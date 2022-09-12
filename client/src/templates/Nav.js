import { useState } from 'react';
import Categories from '../components/nav/home/Categories';
import Lieu from '../components/nav/home/Lieu';
import { BsChevronRight } from "react-icons/bs";

const Nav = ({ setUrl }) => {
  const [categorie, setCategorie] = useState(null);
  const [lieu, setLieu] = useState(null);
  const city = "&refine=city:";
  const tags = "&refine=tags:"
  const url = `https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?limit=10${(lieu && city + lieu) || ""}${(categorie && tags + categorie) || ""}&timezone=UTC`;


  return (
    <nav className='grid-row'>
      <h2>Filter</h2>
      <Categories setCategories={setCategorie} />
      <Lieu setLieu={setLieu} />
      <div className="btn-filter">
        <button onClick={() => setUrl(url)}>
          Filtrer
          <BsChevronRight />
        </button>
      </div>
    </nav>
  )
}

export default Nav;