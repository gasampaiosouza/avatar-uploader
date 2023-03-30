import ResetUploadButton from '../ResetUploadButton';

import AttentionIcon from '@assets/attention-icon.svg';

import './upload-state.scss';
import { useAvatar } from 'contexts/avatar-context';

interface Props {
  //...
}

const UploadError: React.FC<Props> = (props) => {
  const { handleUploadReset } = useAvatar();

  return (
    <div className="upload-state error" onClick={handleUploadReset}>
      <ResetUploadButton />
      <div className="error-image">
        <img src={AttentionIcon} alt="exclamation icon for attention" />
      </div>

      <div className="upload-state_content">
        <span>Sorry, the upload failed.</span>

        <button className="reset-button">Try again</button>
      </div>
    </div>
  );
};

export default UploadError;
