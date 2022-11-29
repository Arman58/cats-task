import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'


const StyledCard = styled.div`
height: 200px;
width: 200px;
background: grey;
border-radius: 10px;
transition: background 0.8s;
overflow: hidden;
  background: ${props => `url(${props.src}) center center no-repeat`};
  background-size: 200px;
  &:hover{
  background: ${props => `url(${props.src}) left center no-repeat`};
    background-size: 400px;
  box-shadow: 0 70px 63px -60px #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  }
`



const Cat = ({
    url,
}) => (
    <>
        <StyledCard src={url} loading="lazy" />
    </>
)


Cat.propTypes = {
    url: PropTypes.string,
}

Cat.defaultProps = {
    url: ""
}

export default Cat