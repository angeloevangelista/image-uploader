import { Link } from 'react-router-dom';
import { MdCheckCircle } from 'react-icons/md';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import * as SC from './styles';

import Input from '../../components/Input';
import ContentBox from '../../components/ContentBox';
import { useHistory } from 'react-router';
import Button, { EButtonTheme } from '../../components/Button';
import { toast } from 'react-toastify';

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

    if (!storedImageUrl) {
      toast.info('It seems you have not uploaded any picture yet 😜');
      return history.push('/');
    }

    setImageUrl(storedImageUrl);
  }, [history]);

  return (
    <SC.Container>
      <Link to="/">
        <Button theme={EButtonTheme.secondary}>Voltar</Button>
      </Link>

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
