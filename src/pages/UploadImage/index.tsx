import React, { useCallback, useRef } from 'react';

import DragAndDrop from '../../components/DragAndDrop';
import Button, { EButtonTheme } from '../../components/Button';

import * as SC from './styles';
import ContentBox from '../../components/ContentBox';

const UploadImage: React.FC = () => {
  const fileInputReference = useRef<HTMLInputElement | null>(null);

  const handleUploadFile = useCallback((files: FileList) => {
    if (files.length !== 1) {
      alert('Please, choose only one file');
      return;
    }

    const [file] = Array.from(files).filter((f) => {
      const [category] = f.type.split('/');

      return category.toUpperCase() === 'IMAGE';
    });

    console.log(file);
  }, []);

  const handleInputFileChange = useCallback(() => {
    if (!fileInputReference || !fileInputReference.current) return;

    const files = fileInputReference.current.files;

    files && handleUploadFile(files);
  }, [fileInputReference, handleUploadFile]);

  const handleFileDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();

      const files = event.dataTransfer.files;

      handleUploadFile(files);
    },
    [handleUploadFile],
  );

  const handleChooseFileClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault();

      if (!fileInputReference) return;

      fileInputReference.current?.click();
    },
    [fileInputReference],
  );

  return (
    <>
      <SC.Container>
        <ContentBox>
          <SC.Header>
            <strong>Upload your image</strong>
            <span>File should be Jpeg, Png...</span>
          </SC.Header>

          <SC.UploadContainer>
            <DragAndDrop onDrop={handleFileDrop} />

            <span>Or</span>

            <Button
              onClick={handleChooseFileClick}
              theme={EButtonTheme.primary}
            >
              Choose a file
            </Button>
          </SC.UploadContainer>
        </ContentBox>
      </SC.Container>

      <input
        ref={fileInputReference}
        type="file"
        style={{ display: 'none' }}
        onChange={handleInputFileChange}
      />
    </>
  );
};

export default UploadImage;
