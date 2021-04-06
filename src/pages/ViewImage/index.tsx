import React, { useCallback, useEffect, useRef, useState } from 'react';
import { MdCheckCircle } from 'react-icons/md';

import * as SC from './styles';

import Input from '../../components/Input';
import ContentBox from '../../components/ContentBox';
import { EButtonTheme } from '../../components/Button';
import { useHistory } from 'react-router';

const ViewImage: React.FC = () => {
  const history = useHistory();
  const [imageUrl, setImageUrl] = useState('');
  const linkInputRef = useRef<HTMLInputElement | null>(null);

  const handleCopyImageLink = useCallback(() => {
    linkInputRef.current?.select();

    document.execCommand('copy');
  }, [linkInputRef]);

  useEffect(() => {
    const storedImageUrl = localStorage.getItem(
      'image_uploader_image',
    ) as string;

    if (!storedImageUrl) return history.push('/');

    setImageUrl(storedImageUrl);
  }, [history]);

  return (
    <SC.Container>
      <ContentBox>
        <SC.Header>
          <MdCheckCircle size={32} />
          <strong>Uploaded Successfully!</strong>
        </SC.Header>

        <SC.ImageContainer>
          <img src={imageUrl} alt="Uploaded" />
        </SC.ImageContainer>

        <Input
          ref={linkInputRef}
          // value={imageUrl}
          value={
            'Unfortunately, this is just a preview. But we will provide real uploads soon 😃'
          }
          readOnly
          useButton
          buttonProps={{
            children: 'Copy Link',
            theme: EButtonTheme.primary,
            onClick: handleCopyImageLink,
            disabled: true,
          }}
        ></Input>
      </ContentBox>
    </SC.Container>
  );
};

export default ViewImage;
