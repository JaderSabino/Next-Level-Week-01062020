import React, {useCallback, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import { FiUpload } from 'react-icons/fi';

import './styles.css';

interface Props {
    onChangeFile: (file: File) => void;
}

const Dropzone: React.FC<Props> = ({ onChangeFile }) => {

  const [selectedFileUrl, setSelectedFileUrl] = useState('');

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];

    const fileUrl = URL.createObjectURL(file);

    setSelectedFileUrl(fileUrl);

    onChangeFile(file);
  }, [onChangeFile])
  const {getRootProps, getInputProps} = useDropzone({
      onDrop,
      accept: "image/*"
    })

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept="image/*" />
      {
          selectedFileUrl 
          ? <img src={selectedFileUrl} alt="Points thumbnail"/>
          : <p>
                <FiUpload/>
                Imagem do estabelecimento
            </p>
      }

    </div>
  )
}

export default Dropzone;