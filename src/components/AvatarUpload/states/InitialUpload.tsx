import ImageUploaderVector from '@assets/image-upload.svg';

import { useAvatar } from 'contexts/avatar-context';
import { useDropzone } from 'react-dropzone';

interface Props {
  //...
}

const InitialUpload: React.FC<Props> = (props) => {
  const { croppedImage, setHasFile, setHasError, setFiles } = useAvatar();

  const { getRootProps, getInputProps } = useDropzone({
    accept: { 'image/*': [] },
    onDrop: (acceptedFiles) => {
      setHasFile(true);

      // file type is not image
      if (acceptedFiles.length == 0) {
        return setHasError(true);
      }

      // create the "preview" prop
      const files = acceptedFiles.map((file) =>
        Object.assign(file, { preview: URL.createObjectURL(file) })
      );

      setFiles(files);
    },
  });

  return (
    <div className="dropzone-container_content">
      {croppedImage && (
        <div className="upload-state saved">
          <img src={croppedImage} alt="cropped organization logo" />
        </div>
      )}

      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />

        <div className="dropzone-content">
          <img src={ImageUploaderVector} alt="default image placeholder icon" />

          <h3>Organization logo</h3>
        </div>

        <p>Drop the image here or click to browse.</p>
      </div>
    </div>
  );
};

export default InitialUpload;
