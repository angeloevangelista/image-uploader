import React, { useCallback, useRef } from 'react';
import { MdCheckCircle } from 'react-icons/md';

import * as SC from './styles';

import Input from '../../components/Input';
import ContentBox from '../../components/ContentBox';
import { EButtonTheme } from '../../components/Button';

const ViewImage: React.FC = () => {
  const linkInputRef = useRef<HTMLInputElement | null>(null);

  const handleCopyImageLink = useCallback(() => {
    linkInputRef.current?.select();

    document.execCommand('copy');
  }, [linkInputRef]);

  return (
    <SC.Container>
      <ContentBox>
        <SC.Header>
          <MdCheckCircle size={32} />
          <strong>Uploaded Successfully!</strong>
        </SC.Header>

        <SC.ImageContainer>
          <img
            src="https://preview.redd.it/tk46u5nrkxm21.png?width=960&crop=smart&auto=webp&s=6af534c79eb6ee406e505de7c4a3bba5461cfee6"
            alt="Uploaded"
          />
        </SC.ImageContainer>

        <Input
          ref={linkInputRef}
          value={
            'https://preview.redd.it/tk46u5nrkxm21.png?width=960&crop=smart&auto=webp&s=6af534c79eb6ee406e505de7c4a3bba5461cfee6'
          }
          readOnly
          useButton
          buttonProps={{
            buttonText: 'Copy Link',
            buttonTheme: EButtonTheme.primary,
            onButtonClick: handleCopyImageLink,
          }}
        ></Input>
      </ContentBox>
    </SC.Container>
  );
};

export default ViewImage;
