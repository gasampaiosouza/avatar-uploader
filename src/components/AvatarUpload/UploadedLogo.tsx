import { useState } from 'react';

import { useAvatar } from 'contexts/avatar-context';
import getCroppedImg from 'helpers/get-cropped-image';

import Cropper from 'react-easy-crop';

interface Props {
  logo: string;
  zoom: number;
  setZoom: React.Dispatch<React.SetStateAction<number>>;
}

type IArea = { x: number; y: number; width: number; height: number };

const UploadedLogo: React.FC<Props> = (props) => {
  const DEFAULT_ASPECT = 1;

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const { handleCroppedImage } = useAvatar();

  function onCropChange(changedCrop: typeof crop) {
    setCrop(changedCrop);
  }

  async function onCropComplete(_: IArea, croppedAreaPixels: IArea) {
    const image = await getCroppedImg(props.logo, croppedAreaPixels);

    handleCroppedImage(image!.url);
  }

  function onZoomChange(changedZoom: typeof props.zoom) {
    props.setZoom(changedZoom || 1);
  }

  return (
    <div className="upload-state_logo">
      <Cropper
        image={props.logo}
        crop={crop}
        zoom={props.zoom}
        aspect={DEFAULT_ASPECT}
        cropShape="round"
        showGrid={false}
        cropSize={{ width: 114, height: 114 }}
        onCropChange={onCropChange}
        onCropComplete={onCropComplete}
        onZoomChange={onZoomChange}
      />
    </div>
  );
};

export default UploadedLogo;
