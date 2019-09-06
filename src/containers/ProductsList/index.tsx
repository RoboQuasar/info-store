import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import ListGroup from 'react-bootstrap/ListGroup';
import { ThunkDispatch } from 'redux-thunk';

import { itemsFetchData } from '../../thunks';

import { ListItem, isLoadingType, hasErroredType, AppState } from '../../store/types';

import styles from './index.module.css';

interface ProductsListInterfaceProps {
  fetchData: (url: string) => void;
  items: ListItem[],
  hasErrored: isLoadingType,
  isLoading: hasErroredType,
}

class ProductsList extends Component<ProductsListInterfaceProps> {
  componentDidMount() {
    this.props.fetchData('http://5826ed963900d612000138bd.mockapi.io/items');
  }

  render() {
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }

    return (
      <ListGroup className={styles.listGroup}>
        {this.props.items.map((item) => (
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

const mapStateToProps = (state:AppState) => {
  return {
    items: state.listItems.items,
    hasErrored: state.listItems.hasErrored,
    isLoading: state.listItems.isLoading
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<AppState, void, Action>) => {
  return {
    fetchData: (url: string) => dispatch(itemsFetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
