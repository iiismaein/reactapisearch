import {Fragment, useEffect, useState} from "react";
import './App.css'
import Card from "./Card";
import axios from 'axios'

function App() {
    const [characters,setCharacters]=useState([])
    const [query,setQuery]=useState('')
    const setQueryState=(event)=>{
        setQuery(event.target.value);
    }
    useEffect(()=>{
        const fetchData=async ()=>{
            try{
                const {data}= await axios.get(`https://rickandmortyapi.com/api/character/?name=${query}`)
                setCharacters(data.results)

            }catch (error){
                console.log(error)
            }
        }
        fetchData()
    },[query])
  return (
      <Fragment >
          <div className={'App'}>
              <div className={'search'}>
        <input type={'text'} placeholder={'search'}
               className={'input'} onChange={setQueryState}
               value={query}
        />
    </div>

<div className="wrapper"></div>
    <div className={'test'}>
          {characters.map(character =>(
              <div  key={Math.random()}>
                  <Card >
                      <h1>{character.id}
                          <span>-</span>
                          {character.name}
                      </h1>
                      <img src={character.image} alt={character.name}/>
                      <p>{character.status}</p>
                      <p>{character.species}</p>
                      <p>{character.type}</p>
                      <p>{character.gender}</p>
                  </Card>
              </div>
          ))}
          </div></div>
      </Fragment>

  );
}

export default App;
