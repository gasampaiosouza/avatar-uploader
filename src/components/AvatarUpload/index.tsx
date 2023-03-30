import { useEffect } from 'react';

import UploadError from './states/UploadError';
import UploadSuccess from './states/UploadSuccess';
import InitialUpload from './states/InitialUpload';

import { useAvatar } from 'contexts/avatar-context';

import './avatar-upload.scss';

const AvatarUpload = () => {
  //...

  return (
    <section className="container">
      <div className="dropzone-container">
        <UploadStates />
      </div>
    </section>
  );
};

function UploadStates() {
  const { hasFile, hasError, files } = useAvatar();

  useEffect(() => {
    return () =>
      files.forEach((file) => URL.revokeObjectURL(file.preview || ''));
  }, []);

  if (!hasFile) {
    console.log('cai 1');

    return <InitialUpload />;
  }

  if (hasFile && !hasError) {
    console.log('cai 2');

    return <UploadSuccess picture={files?.at(-1)?.preview || ''} />;
  }

  console.log('cai 3');
  return <UploadError />;
}

export default AvatarUpload;
