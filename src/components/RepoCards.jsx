import React, { useState } from 'react';
import books from './books.json';
import { RepoCardItem } from './RepoCardItem';
import { Search } from './Search';
import './RepoCards.css';
import Fuse from "fuse.js";

export function RepoCards() {

  var [data, setData] = useState(books);

  /*
  var searchData = (pattern) => {
 
    if (!pattern) {
      setData(books);
    } else{

      const fuse = new Fuse(books, {
        keys: ["title", "author"],
        threshold: 0.6
      });

      var result = fuse.search(pattern);

      var matches = [];

      if (!result.length) {
        setData([]);
        console.log("Search: No matching results");
      } 
      else {
        result.forEach(({item}) => {
          matches.push(item);
        })

        setData(result);
      }        
    }
  }
  */

  var searchData = (pattern) => {
    if (!pattern) {
      setData(books);
      return;
    }
    
    console.log(pattern);

    const fuse = new Fuse(books, {
      keys: ["title", "author"],
      threshold: 0.2,
    });

    var result = fuse.search(pattern);

    var matches = [];

    if (!result.length) {
      setData([]);
    } else {
      result.forEach(({item}) => {
        matches.push(item);
      });
      setData(matches);
    }
    console.log(matches);
  };
  
  function filterData(){

    const dropdowns = document.getElementsByClassName("custom-select");
    const dropdownArr = Array.from(dropdowns);
    const currentFilter = dropdownArr.map(dropdownArr => dropdownArr.value);

    const output = books.filter(item =>
      (!currentFilter[0] || currentFilter[0] === item.tags)
      //(!currentFilter[0] || currentFilter[0] == item.tags) &&
      //(!currentFilter[1] || currentFilter[1] == item.tg) &&
      //(!currentFilter[2] || currentFilter[2] == item.eng)
    );
    setData(output);
  }

  return(
    <div className="Container">
      <div className="wrapper">
        <div className="filter">
          <Search
            placeholder="Pesquisar"
            onChange={(e) => searchData(e.target.value)}
          />
          <select 
            id="tema" 
            className="custom-select"
            onChange={(e) => filterData()} >              
            <option value="">Filtrar por tema</option>
            <option value="Pobreza">Pobreza</option>
            <option value="Libertação">Libertação</option>
            <option value="Metodologia">Metodologia</option>
            <option value="Juventude">Juventude</option>
            <option value="Condição Feminina">Condição Feminina</option>            
          </select>
          {/* <select
            onChange={(e) =>  setFilterParam(e.target.value) }
            className="custom-select"
            aria-label="Gênero">
            <option value="All">Filtrar por gênero</option>
            <option value="Books">Livros</option>
            <option value="Publications">Publicações</option>
          </select>*/}
      </div>
      {data.map((item) => (
          <RepoCardItem {...item} key={item.name}/>
      ))}
      </div>
    </div>
  )
}