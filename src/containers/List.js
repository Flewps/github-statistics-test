import React from 'react'
import { gql, graphql } from 'react-apollo';

function List({ data: { items, refetch } }) {
  console.log( items )
  return (
    <ul>
      {typeof items !== 'undefined' ? items.repositories.map( (item, $key) => {
        return (<li>{item.name} ({item.pullRequets.totalCount})</li>)
      }) : (<li>No hay resultados</li>)}
    </ul>
  );
}

let query = gql`
  query($username:String!){
    repositoryOwner(login: username) {
      login
      id
      repositories (first: 10) {
        nodes {
          id
          name
          pullRequests{
            totalCount
          }
        }
      }
    }
  }`

let options = {
  options: {
    variables: {
      username: "Facebook"
    }
  }  
}

export default graphql(query,options)(List);