import React, { useState } from 'react';
import books from './books.json';
import { RepoCardItem } from './RepoCardItem';
import { Search } from './Search';
import './RepoCards.css';
import Fuse from "fuse.js";

/*
export function RepoCards() {
  
  const [data, setData] = useState(books);
  const [filterParam, setFilterParam] = useState(["All"]);

  var searchData = (pattern) => {
    if (!pattern) {
      setData(books);
      return;
    }

    const fuse = new Fuse(data, {
      keys: ["title", "author"],
      threshold: 0.3
    });

    var result = fuse.search(pattern);

    var matches = [];

    if (!result.length) {
      setData([]);
    } else {
      result.forEach(({item}) => {
        matches.push(item);
      });
      
      if (filterParam === "All" ){
        setData(matches);  
      } else {

        var fuse2 = new Fuse(matches, {
          keys: ["tags"],
          threshold: 0.0
        });
        var result2 = fuse2.search(filterParam);
        var matches2 = [];
        if (!result2.length) {
          setData(matches);
        } else {
          result2.forEach(({item}) => {
            matches2.push(item);
          });
          setData(matches2);
        } 
      }
    }
  };

  var filterData = (pattern) => {    
    if (!pattern) {
      return;
    }
    
    const fuse = new Fuse(data, {
      keys: ["tags"],
      threshold: 0.0
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
  };


  return(
    <div className="Container">
      <div className="wrapper">
        <div className="filter">
          <Search
            placeholder="Pesquisar"
            onChange={(e) => searchData(e.target.value)}
          />
          {/ * <select
            onChange={(e) =>  setFilterParam(e.target.value) }
            className="custom-select"
            aria-label="Gênero">
            <option value="All">Filtrar por gênero</option>
            <option value="Books">Livros</option>
            <option value="Publications">Publicações</option>
          </select> * / }
          <select
            onChange={(e) =>  filterData(e.target.value) }
            className="custom-select"
            aria-label="Tema">
            <option value="All">Filtrar por tema</option>
            <option value="Pobreza">Pobreza</option>
            <option value="Libertação">Libertação</option>
            <option value="Metodologia">Metodologia</option>
            <option value="Juventude">Juventude</option>
            <option value="Condição Feminina">Condição Feminina</option>
          </select>
      </div>
      {data.map((item) => (
          <RepoCardItem {...item} key={item.name}/>
      ))}
      </div>
    </div>
  )
}
*/