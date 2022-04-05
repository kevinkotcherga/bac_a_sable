import React, { useState } from 'react'
import Table from '../../components/table/Table';
import { Users } from '../../users';
const Home = () => {

  const [query, setQuery] = useState("");

  const search = (data) => {
    return data.filter(item => item.first_name.toLowerCase().includes(query));
  }

  let num = 5;

  num++;

  console.log(num)


  return (
    <div>
      <input type="text" placeholder='Search..' className="search" onChange={element => setQuery(element.target.value)} />
      <Table data={search(Users)} />
    </div>
  )
}

export default Home;
