import React, { Component } from 'react';
import get from 'lodash/get';
import styled from 'styled-components';

import arrow from '../assets/iconArrow.svg';

import ListItem from './ListItem';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled.h2`
  display: flex;
  margin-top: 6px;
  margin-bottom: 18px;
  color: #2b9ac8;
  font-size: 22px;
  letter-spacing: 1px;
  cursor: pointer;
`;

const Accordion = styled.div`
  display: flex;
  flex-direction: column;
  max-height: ${props => (props.expended === true ? 'auto' : 0)};
  overflow: hidden;
`;

const Arrow = styled.span`
  height: 21px;
  margin-top: 3px;
  margin-left: 3px;
  transform: rotateX(${props => (props.expended === true ? '180' : '0')}deg);
  transition: transform 0.2s ease;
  ${props => (props.show === true ? '' : 'display: none')};
`;

const ArrowImage = styled.img`
  width: 21px;
  height: 21px;
  margin: 0;
`;

class ListSection extends Component {
  constructor() {
    super();
    this.state = {
      isExpanded: false,
    };
    this.toggleAccordion = this.toggleAccordion.bind(this);
  }

  componentWillMount() {
    const { selectedItem, list } = this.props;

    this.setState(() => ({
      isExpanded: selectedItem !== undefined || list.title === ' ',
    }));
  }

  componentWillReceiveProps() {
    const { selectedItem, list } = this.props;

    this.setState(() => ({
      isExpanded: selectedItem !== undefined || list.title === ' ',
    }));
  }

  toggleAccordion() {
    const { list } = this.props;

    this.setState(state => ({
      isExpanded: !state.isExpanded || list.title === ' ',
    }));
  }

  render() {
    const { list, toggleMenu, selectedItem, reverse } = this.props;
    const { isExpanded } = this.state;

    let items = [...list.items];
    if (reverse) {
      items = [...list.items].reverse();
    }

    return (
      <Wrapper>
        <SectionTitle onClick={this.toggleAccordion}>
          {list.title}
          <Arrow show={list.title !== ' '} expended={isExpanded}>
            <ArrowImage src={arrow} alt="arrow" />
          </Arrow>
        </SectionTitle>
        <Accordion expended={isExpanded}>
          {items.map(item => (
            <ListItem
              key={item.title}
              item={item}
              selected={get(selectedItem, 'title') === item.title}
              toggleMenu={toggleMenu}
            />
          ))}
        </Accordion>
      </Wrapper>
    );
  }
}

export default ListSection;
