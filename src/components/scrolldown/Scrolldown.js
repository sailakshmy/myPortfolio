import React from 'react';
import styled from 'styled-components';
//React Bootstrap components
import Button from 'react-bootstrap/Button';

const MyScroll = styled.div`
    position: relative;
    z-index: 1;
    bottom:1.6em;
    display: flex;
    width: 100%;
    justify-content: center;
    background-color: transparent;
    font-weight: bold;
    text-shadow: 1px 1px #ffffff;
   

    .turn{
        cursor: pointer;
        transform: rotate(90deg);
    }
`;

const Scrolldown = () => {
  return (
    <MyScroll>
      <div className="turn">
        <Button variant="outline-dark">
          <span>
            <a href='#aboutme'>&gt;&gt;&gt;</a>
          </span>
        </Button>
      </div>
    </MyScroll>
  )
}

export default Scrolldown;
