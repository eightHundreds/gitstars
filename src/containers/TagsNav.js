import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { List } from 'immutable'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import TagNav from './TagNav'
import { switchTag } from '../reducers/active-tag'
import dndDragDrapContext from '../hocs/dndDragDrapContext'

class TagsNav extends Component {
  render () {
    const { className, style, tags, isEditingTags, canDrag, draggable, activeTag, onSwitchTag } = this.props

    return (
      <ul className={`nav-tag ${className}`} style={style}>
        {
          tags &&
          tags.map((tag, index) => (
            <TagNav
              key={tag.id}
              index={index}
              tag={tag}
              isEditingTags={isEditingTags}
              isActive={tag.id === activeTag.id}
              canDrag={canDrag}
              onClick={onSwitchTag}
              draggable={draggable}
            />
          ))
        }
      </ul>
    )
  }
}

TagsNav.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  tags: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.instanceOf(List)
  ]),
  isEditingTags: PropTypes.bool,
  canDrag: PropTypes.bool,
  draggable: PropTypes.bool,
  activeTag: PropTypes.object.isRequired,
  onSwitchTag: PropTypes.func.isRequired
}

TagsNav.defaultProps = {
  className: '',
  style: {},
  isEditingTags: false,
  canDrag: false,
  draggable: false
}

const mapStateToProps = state => ({
  activeTag: state.activeTag
})

const mapDispatchToProps = dispatch => ({
  onSwitchTag: tag => dispatch(switchTag(tag))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(dndDragDrapContext(
  DragDropContext,
  HTML5Backend
)(TagsNav))
