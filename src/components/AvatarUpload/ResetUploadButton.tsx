import CloseButton from '@assets/close-button.svg';
import { useAvatar } from 'contexts/avatar-context';

interface Props {
  //...
}

const ResetUploadButton: React.FC<Props> = (props) => {
  const { handleUploadReset } = useAvatar();

  return (
    <button className="upload-state_button" onClick={handleUploadReset}>
      <img src={CloseButton} alt="button to reset the current upload" />
    </button>
  );
};

export default ResetUploadButton;
