import { ReactComponent as IconCompany } from 'assets/icon-company.svg';
import { ReactComponent as IconLocation } from 'assets/icon-location.svg';
import { ReactComponent as IconTwitter } from 'assets/icon-twitter.svg';
import { ReactComponent as IconBlog } from 'assets/icon-website.svg';

import styles from './UserInfo.module.scss';
import { LocalGithubUser } from 'types';
import { InfoItem, InfoTitleProps } from 'components/InfoItem';

interface UserInfProps extends Pick<LocalGithubUser, 'blog' | 'company' | 'location' | 'twitter'>{
}

export const UserInfo = ({blog, company, location, twitter}: UserInfProps) => {

  const items: InfoTitleProps[] = [
    {icon: <IconLocation />, text: location},
    {icon: <IconBlog />, text: blog, isLink: true},
    {icon: <IconCompany />, text: company},
    {icon: <IconTwitter />, text: twitter},
  ]

  return (
    <div className={styles.userInfo}>
      {items.map((item, index) => (
        <InfoItem key={index + (item.text || '')} {...item} />
      ))}
    </div>
  )
};