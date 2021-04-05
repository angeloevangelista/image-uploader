import React, { useCallback, useRef } from 'react';

import DragAndDrop from '../../components/DragAndDrop';
import Button, { EButtonTheme } from '../../components/Button';

import * as SC from './styles';

const SelectImage: React.FC = () => {
  const inputReference = useRef<HTMLInputElement | null>(null);

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
    if (!inputReference || !inputReference.current) return;

    const files = inputReference.current.files;

    files && handleUploadFile(files);
  }, [inputReference, handleUploadFile]);

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

      if (!inputReference) return;

      inputReference.current?.click();
    },
    [inputReference],
  );

  return (
    <>
      <SC.Container>
        <SC.Header>
          <strong>Upload your image</strong>
          <span>File should be Jpeg, Png...</span>
        </SC.Header>

        <SC.UploadContainer>
          <DragAndDrop onDrop={handleFileDrop} />

          <span>Or</span>

          <Button onClick={handleChooseFileClick} theme={EButtonTheme.primary}>
            Choose a file
          </Button>
        </SC.UploadContainer>
      </SC.Container>

      <input
        ref={inputReference}
        type="file"
        style={{ display: 'none' }}
        onChange={handleInputFileChange}
      />
    </>
  );
};

export default SelectImage;
