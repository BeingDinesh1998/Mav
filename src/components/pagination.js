import React, { Component } from 'react'
import { Grid, Input, Pagination, Segment } from 'semantic-ui-react'
import ReactPaginate from 'react-paginate';
import association from '../json/association_details.json';

export default class PaginationComponent extends Component {
  state = { activePage: 1 }
  constructor(props) {
    super(props);
    this.state = {
        totalPages : association.length / 10,
        perPage : 10,
    }
}

  handleInputChange = (e, { value }) => this.setState({ activePage: value })

  handlePaginationChange = (e, { activePage }) => this.setState({ activePage })

  render() {
    const { activePage } = this.state

    return (

          <Pagination
            activePage={activePage}
            onPageChange={this.handlePaginationChange}
            totalPages={this.state.totalPages}
          />
    )
  }
}
