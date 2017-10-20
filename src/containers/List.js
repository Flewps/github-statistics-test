import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { gql, graphql } from 'react-apollo';

class List extends Component{
  render(){
    console.log(this.props)
    return (
      <ul>
        { this.props.data.repositoryOwner ? this.props.data.repositoryOwner.repositories.nodes.map( (item,key) => {
          return (<li key={key}>{item.name} ({item.pullRequests.totalCount})</li>)
        } ) : (<li>No hay resultados</li>)}
      </ul>
    )
  }  
}

List.propTypes = {
  items: PropTypes.object,
};

let query = gql`
  query getRepositories($username:String!){
    repositoryOwner(login: $username) {
      login
      id
      repositories (first: 100) {
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