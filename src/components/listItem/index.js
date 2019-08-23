import React from 'react'
import PropTypes from 'prop-types'
//import { connect } from 'react-redux';

class ListItem extends React.Component {
  render() {
    const { title, context } = this.props

    if (!title){
      return null
    }
    return <div data-test="listItem">
      <h2 data-test="title">{title}</h2>
      <p data-test="context">{context}</p>
    </div>
  }
}

ListItem.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
}

export default ListItem
