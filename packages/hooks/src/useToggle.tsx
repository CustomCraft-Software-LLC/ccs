import { useState } from 'react';

const useToggle = (initToggleState: boolean = false): [boolean, () => void] => {
  const [toggleState, setToggleState] = useState<boolean>(initToggleState);

  const toggle = () => setToggleState(prevToggleState => !prevToggleState);

  return [toggleState, toggle];
}

export default useToggle;