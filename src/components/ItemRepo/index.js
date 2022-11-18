import React from 'react'

import  { RepoContainer } from './styles';

function ItemRepo({repo}) {
    return (
        <RepoContainer> 
            <h3>{repo.name}</h3>
            <p>{repo.full_name}</p>
            <a href={repo.html_url} rel="noreferrer" target="blank">Ver repositórios</a> <br/>
            <a className="remover" rel="noreferrer" href='#'>Remover</a>
            <hr/>
        </RepoContainer>
    )
}

export default ItemRepo;