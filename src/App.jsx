import { useState } from 'react';

import PostList from './components/PostList';
import MainHeader from './components/MainHeader';

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  function openModalHandler() {
    setModalIsOpen(true);
  }

  return (
    <>
      <MainHeader onCreatePost={openModalHandler} />
      <main>
        <PostList isPosting={modalIsOpen} onStopPosting={closeModalHandler} />
      </main>
    </>
  );
}

export default App;
