import React from 'react'
import useFetch from '../../../hooks/useFetch';

const Categories = ({setCategories}) => {
    const { data } = useFetch("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/facets?lang=fr&timezone=UTC");
    const cat = data ? data.facets.find(f => f.name === "tags").facets
        : [];
        
    return (
        <select name="" id="" onChange={e=> setCategories(e.target.value)}>
            {cat.map((tag, i) => tag.value && <option style={{ color: "black" }} value={tag.value} key={i}>{tag.name}</option>)}
        </select>
    )
}

export default Categories;