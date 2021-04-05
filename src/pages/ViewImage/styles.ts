import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-self: center;
  justify-content: center;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    color: #219653;
  }

  strong {
    margin: 10px 0;
    font-size: 24px;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  max-width: 400px;

  overflow: hidden;
  border-radius: 20px;

  margin: 20px 0;

  img {
    width: 100%;
    height: 100%;
  }
`;
