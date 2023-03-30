import React, { createContext, useContext, useEffect, useState } from 'react';

interface IAvatarContextProviderProps {
  children: React.ReactNode;
}

type IFileType = File & { preview?: string };

interface IAvatarContextType {
  croppedImage: string;
  handleCroppedImage: (image: string) => void;

  hasFile: boolean;
  setHasFile: React.Dispatch<React.SetStateAction<boolean>>;

  hasError: boolean;
  setHasError: React.Dispatch<React.SetStateAction<boolean>>;

  files: IFileType[];
  setFiles: React.Dispatch<React.SetStateAction<IFileType[]>>;

  handleUploadReset: () => void;
}

const AvatarContext = createContext({} as IAvatarContextType);
const useAvatar = () => useContext(AvatarContext);

const AvatarContextProvider: React.FC<IAvatarContextProviderProps> = ({
  children,
}) => {
  const [hasFile, setHasFile] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const [croppedImage, setCroppedImage] = useState('');

  useEffect(() => {
    if (files.length > 0) return;

    setHasFile(false);
  }, [files]);

  function handleUploadReset() {
    setFiles([]);
    setHasError(false);
    handleCroppedImage('');
  }

  function handleCroppedImage(image: string) {
    setCroppedImage(image);
  }

  return (
    <AvatarContext.Provider
      value={{
        croppedImage,
        handleCroppedImage,
        hasFile,
        setHasFile,
        hasError,
        setHasError,
        files,
        setFiles,
        handleUploadReset,
      }}
    >
      {children}
    </AvatarContext.Provider>
  );
};

export { useAvatar, AvatarContext, AvatarContextProvider };
