import styles from './UserTitle.module.scss';
import { LocalGithubUser } from 'types';

interface UserTitleProps extends Pick <LocalGithubUser, 'name' | 'login' | 'created'> {}

const localeDate = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
});

export const UserTitle = ({name, login, created}: UserTitleProps) => {

  const joinedDate = localeDate.format(new Date(created));

  return(
  <div className={styles.userTitle}>
    <h2>{name}</h2>
    <h3>{login}</h3>
    <span>{joinedDate}</span>
  </div>
)};