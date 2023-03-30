import AvatarUpload from './components/AvatarUpload';

import { AvatarContextProvider } from 'contexts/avatar-context';

function App() {
  //...

  return (
    <AvatarContextProvider>
      <AvatarUpload />
    </AvatarContextProvider>
  );
}

export default App;
