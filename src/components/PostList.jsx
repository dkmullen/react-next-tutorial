import { useState } from 'react';

import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostList.module.css';

function PostList({ isPosting, onStopPosting }) {
  /* useState is a react hook. stateData, below, will be an array with 2 elements;
  1) the current state value, 2) a function that allows us to update the state value
  */
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }
  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
      {isPosting ? (
        <Modal onClose={onStopPosting}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChangeHandler}
          />
        </Modal>
      ) : null}
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author='Cindy' body='Hello' />
        <Post author='Kiki' body='BBrr' />
        <Post author='Jensen' body='OMG' />
      </ul>
    </>
  );
}

export default PostList;
