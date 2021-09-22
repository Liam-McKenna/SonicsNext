import React from 'react';
import styled from 'styled-components';

export function Separator() {
  return <SeparatorContainer></SeparatorContainer>;
}

const SeparatorContainer = styled.div`
  width: 100%;
  height: 1px;
  margin: 1rem 0 1rem 0;
  background-color: var(--color3);
  border-radius: 10px;
`;
