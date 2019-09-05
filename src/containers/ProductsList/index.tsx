import React, { Component } from 'react';

import ListGroup from 'react-bootstrap/ListGroup';

import styles from './index.module.css';

interface IState {
  items: {id: string, label: string}[],
  hasErrored: boolean,
  isLoading: boolean,
}

class ProductsList extends Component {
  state:IState = {
    items: [],
    hasErrored: false,
    isLoading: false,
  }

  componentDidMount() {
    this.fetchData('http://5826ed963900d612000138bd.mockapi.io/items');
  }

  fetchData(url: string) {
    this.setState({ isLoading: true });

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        this.setState({ isLoading: false });

        return response;
      })
      .then((response) => response.json())
      .then((items) => this.setState({ items }))
      .catch(() => this.setState({ hasErrored: true }));
  }

  render() {
    if (this.state.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (this.state.isLoading) {
      return <p>Loading…</p>;
    }

    return (
      <ListGroup className={styles.listGroup}>
        {this.state.items.map((item) => (
          <ListGroup.Item
            className={styles.listItem}
            key={item.id}
            variant="secondary"
          >
            {item.label}
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  }
}

export default ProductsList;
