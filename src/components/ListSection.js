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
  margin-top: 32px;
  margin-bottom: 12px;
  color: #2b9ac8;
  font-family: Lato, sans-serif;
  font-size: 21px;
  cursor: pointer;
  letter-spacing: 1px;
`;

const Accordion = styled.div`
  display: flex;
  overflow: hidden;
  max-height: ${props => (props.expended === true ? 'auto' : 0)};
  flex-direction: column;
`;

const Arrow = styled.span`
  height: 21px;
  margin-left: 7px;
  ${props => (props.show === true ? '' : 'display: none')};
  transform: rotateX(${props => (props.expended === true ? '180' : '0')}deg);
  transition: transform 0.2s ease;
`;

const ArrowImage = styled.img`
  width: 21px;
  height: 21px;
  margin: 2px 0 0;
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
    const { list, toggleMenu, selectedItem } = this.props;
    const { isExpended } = this.state;

    return (
      <Wrapper>
        <SectionTitle onClick={this.toggleAccordion}>
          {list.title}
          <Arrow show={list.title !== ' '} expended={isExpended}>
            <ArrowImage src={arrow} alt="arrow" />
          </Arrow>
        </SectionTitle>
        <Accordion expended={isExpended}>
          {list.items.map(item => (
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
