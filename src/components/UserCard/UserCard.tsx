import styles from './UserCard.module.scss';
import { UserStat } from '../UserStat';
import { LocalGithubUser } from 'types';
import { UserTitle } from 'components/UserTitle';
import { UserInfo } from 'components/UserInfo';

interface UserCardProps extends LocalGithubUser {}

export const UserCard = (props: UserCardProps) => (
  <div className={styles.userCard}>
    <img src={props.avatar} className={styles.avatar} width="100" alt={props.login} />
    <UserTitle name={props.name} login={props.login} created={props.created} />
    <p className={`${styles.bio} ${props.bio ? '' : styles.empty}`}>
      {props.bio || 'No bio'}
    </p>
    <UserStat repos={props.repos} followers={props.followers} following={props.following} />
    <UserInfo blog={props.blog} company={props.company} location={props.location} twitter={props.twitter} />
  </div>
);