import { useState } from 'react';

import { Modal } from '@app/Modal';

const Home = () => {
  const [open, setOpen] = useState(true);

  const toggle = (value: boolean) => () => {
    setOpen(value);
  };

  return (
    <div>
      <button onClick={toggle(true)}>Toggle Modal</button>

      <Modal open={open} onClose={toggle(false)} />
    </div>
  );
};

export default Home;
