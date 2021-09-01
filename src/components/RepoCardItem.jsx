import React from 'react';
import './RepoCardItem.css';

export const RepoCardItem = ({url, image, title, author}) => {
  return (
      <ul className="repo-ul">
          <a className="repo-item" href={url} target='_blank' rel="noopener noreferrer">
            <div className="repo-item-link">
                <figure className='repo-item-pic-wrap'>
                  <img
                    className='repo-items-img'
                    alt={title}
                    src={image}
                  />
                </figure>
              <div className='repo-item-info'>
                <b className='repo-item-title'>{title}</b>
                <p>{author}</p>
              </div>
            </div>
          </a>
      </ul>
  );
}