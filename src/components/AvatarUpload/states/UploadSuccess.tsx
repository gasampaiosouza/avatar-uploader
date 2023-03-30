import { useAvatar } from 'contexts/avatar-context';
import { useState } from 'react';
import ResetUploadButton from '../ResetUploadButton';

import UploadedLogo from '../UploadedLogo';
import InitialUpload from './InitialUpload';

import './upload-state.scss';

interface Props {
  picture: string;
}

const MIN_VALUE = 2;

const UploadSuccess: React.FC<Props> = (props) => {
  const [isFileCropped, setIsFileCropped] = useState(false);
  const [scale, setScale] = useState(MIN_VALUE);

  const { setHasFile } = useAvatar();

  function handleZoomChange(ev: React.ChangeEvent<HTMLInputElement>) {
    const newScale = Number(ev.target.value) || MIN_VALUE;

    setScale(newScale);
  }

  if (isFileCropped) {
    setHasFile(false);
    return <InitialUpload />;
  }

  return (
    <div className="upload-state success">
      <ResetUploadButton />
      <UploadedLogo logo={props.picture} zoom={scale} setZoom={setScale} />

      <div className="upload-state_content">
        <span>Crop</span>
        <input
          onChange={handleZoomChange}
          defaultValue={MIN_VALUE}
          type="range"
          min={MIN_VALUE}
          max={6}
          step={0.01}
        />

        <button className="save-button" onClick={() => setIsFileCropped(true)}>
          Save
        </button>
      </div>
    </div>
  );
};

export default UploadSuccess;
