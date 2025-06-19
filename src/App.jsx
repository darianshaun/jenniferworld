import React, { useState, useEffect }  from 'react';
import axios from 'axios';
import appLogo from './assets/logo.png'; // Assuming your logo is named logo.png in src/assets

function App () {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleClick = () => {
axios.get('https://restcountries.com/v3.1/independent?status=true')
      .then(response => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
      };
  

  // useEffect(() => {
  //   // Fetch data when the component mounts
  //   handleClick();
  // }, []);

  // Filter data based on search query
  const filteredData = data.filter(item =>
    item.name.common.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
   <> 
    <div className="app" style={{width: '100%', height: '100%', backgroundColor: '#f0f0f0', padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'center', color: '#333', fontSize: '16px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', margin: '0 auto', maxWidth: '1200px', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px', border: '1px solid #ccc', backgroundColor: '#222', color: '#fff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', overflowY: 'auto', overflowX: 'auto', maxHeight: '100vh'}}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '40px' }}>
        <img src={appLogo} alt="App Logo" style={{ height: '100px', width: 'auto'}} />
        <h1 style={{fontSize:'50px', backgroundColor:'green', color:'white', margin: 0 }}>KNOW YOUR COUNTRY GUYS</h1>
      </div>
      <h2 style={{textColor:'green', fontSize:'30px', textAlign:'center', color:'green'}}>This App was developed by Darian And Shaun Okonjor</h2>
      <h2>We are people of one mind one heart with different flag</h2>
      <input
        type="text"
        placeholder="Search countries..."
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        style={{ padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc', width: '80%', maxWidth: '400px' }}
      />
      <button onClick={handleClick}>Search Country</button>
      <ul style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px'}}>
        {filteredData.map((item, index) => (
          <li key={index}>
            <span>{item.name.common} </span>
            <span>{item.userId} </span>
            <h2>capital:{item.capital}</h2>
            <h2>region:{item.region}</h2>
            <img src={item.flags.svg} alt={item.name.common} style={{ width: '100px', height: '100px' }} />
            <h2>population:{item.population}</h2>
            <h2>subregion:{item.subregion }</h2>
          </li>
        ))}
      </ul>
    </div>

   </>
   
  )
};

export default App;