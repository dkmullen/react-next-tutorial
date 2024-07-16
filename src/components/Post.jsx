// name is up to me; could be styles
import classes from './Post.module.css';

// use uppercase for component names
function Post(props) {
  return (
    <li className={classes.post}>
      <p className={classes.author}>{props.author}</p>
      <p className={classes.text}>{props.body}</p>
    </li>
  );
}

export default Post;
