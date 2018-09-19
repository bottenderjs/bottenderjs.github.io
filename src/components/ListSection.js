import React, { Component } from 'react';
import styled from 'styled-components';
import get from 'lodash/get';

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
      isExpended: false,
    };
    this.toggleAccordion = this.toggleAccordion.bind(this);
  }

  componentWillMount() {
    this.setState(() => ({
      isExpended:
        this.props.selectedItem !== undefined || this.props.list.title === ' ',
    }));
  }

  componentWillReceiveProps() {
    this.setState(() => ({
      isExpended:
        this.props.selectedItem !== undefined || this.props.list.title === ' ',
    }));
  }

  toggleAccordion() {
    this.setState(state => ({
      isExpended: !state.isExpended || this.props.list.title === ' ',
    }));
  }

  render() {
    const { list, toggleMenu, selectedItem, reverse } = this.props;
    const { isExpended } = this.state;

    let items = [...list.items];
    if (reverse) {
      items = [...list.items].reverse();
    }

    return (
      <Wrapper>
        <SectionTitle onClick={this.toggleAccordion}>
          {list.title}
          <Arrow show={list.title !== ' '} expended={isExpended}>
            <ArrowImage src={arrow} alt="arrow" />
          </Arrow>
        </SectionTitle>
        <Accordion expended={isExpended}>
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
