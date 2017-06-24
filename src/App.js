import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';

class App extends Component {
  render() {
    console.log('App rendering...');
    const { data: { loading, people } } = this.props;
    return (
      <main>
        <header>
          <h1>Apollo Client Error Template</h1>
          <p>
            This is a template that you can use to demonstrate an error in Apollo Client.
            Edit the source code and watch your browser window reload with the changes.
          </p>
          <p>
            The code which renders this component lives in <code>./src/App.js</code>.
          </p>
          <p>
            The GraphQL schema is in <code>./src/graphql/schema</code>.
            Currently the schema just serves a list of people with names and ids.
          </p>
        </header>
        {loading ? (
          <p>Loading…</p>
        ) : (
          <ul>
            {people.map(person => (
              <li key={person.id}>
                {person.name}
              </li>
            ))}
          </ul>
        )}
      </main>
    );
  }
}

const query = gql`{
  people {
    id
    name
  }
}`;

export default graphql(query, {
  options() {
    console.log('options() called...');
    return {};
  },
  props(props) {
    console.log('props() called...');
    return props;
  },
})(App)
