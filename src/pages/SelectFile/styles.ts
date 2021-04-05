import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    font-size: 24px;
  }

  span {
    margin-top: 20px;

    font-size: 16px;
    color: #828282;
  }

  margin-bottom: 20px;
`;

export const UploadContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  > span {
    display: block;
    margin: 20px 0;

    color: #bdbdbd;
  }
`;
