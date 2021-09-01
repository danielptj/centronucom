/*
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import books from './books.json';
import { RepoCardItem } from './RepoCardItem';
import { Search } from './Search';
import './RepoCards.css';
import Fuse from "fuse.js";

//export function RepoCards() {
  
  const [items, setItems] = useState(books);
  const [q, setQ] = useState("");
  const [searchParam] = useState(["title", "author"]);
  const [filterParam, setFilterParam] = useState(["All"]);

  function search(items) {
    if (!items) {
      setItems(books);
      return;
    }    
    return items.filter((item) => {
        if (item.value === filterParam) {
            return searchParam.some((newItem) => {
                return (
                    item[newItem]
                        .toString()
                        .toLowerCase()
                        .indexOf(items.toLowerCase()) > -1
                );
            });
        } else if (filterParam === "All") {
            return searchParam.some((newItem) => {
                return (
                    item[newItem]
                        .toString()
                        .toLowerCase()
                        .indexOf(items.toLowerCase()) > -1
                );
            });
        }
    },[books]);
  }

  return(
    <div className="Container">
      <div className="wrapper">
        <div className="filter">
          <Search
            placeholder="Pesquisar"
            onChange={(e) => search(e.target.value)}
          />
          <select
            onChange={(e) =>  setFilterParam(e.target.value) }
            className="custom-select"
            aria-label="Gênero">
            <option value="All">Filtrar por gênero</option>
            <option value="Books">Livros</option>
            <option value="Publications">Publicações</option>
          </select>
          <select
            onChange={(e) =>  setFilterParam(e.target.value) }
            className="custom-select"
            aria-label="Tema">
            <option value="All">Filtrar por tema</option>
            <option value="Pobreza">Pobreza</option>
            <option value="Pesquisa">Pesquisa</option>
            <option value="Representação Social">Representação Social</option>
            <option value="Saúde Mental">Saúde Mental</option>
            <option value="Educação Social">Educação Social</option>
          </select>
      </div>
      {items.map((item) => (
          <RepoCardItem {...item} key={item.name}/>
      ))}
      </div>
    </div>
  )
}