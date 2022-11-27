import React from 'react'
import logox from '../../assets/icone-x.png'
import { ItemContainer } from './styles';

function ItemRepo({repo, handleRemoveRepo}) {

  const handleRemove = () => {
    handleRemoveRepo(repo.id)
  }

  return (
    <ItemContainer onClick={handleRemove}>
        <div className='box'><h3>{repo.name}</h3>  <img className="remover"src={logox} width={30} height={30} alt="logox"/></div>
        <p>{repo.full_name}</p>
        <a className='verrepo' href={repo.html_url} rel="noreferrer" target="_blank">Ver repositório</a>
        
        <hr />
    </ItemContainer>
  )
}

export default ItemRepo;
