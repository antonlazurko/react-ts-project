import React from 'react';
import styles from './InfoItem.module.scss';

export interface InfoTitleProps {
  icon: React.ReactNode;
  text?: string;
  isLink?: boolean;
}

export const InfoItem = ({ icon, text, isLink }: InfoTitleProps) => {
  const currentText = text || 'No data';
  let currentHref: string = '';

  if (isLink) {
    currentHref = text && text.startsWith('http') ? text : `https://${text}`;
  }

  return (
    <div className={`${styles.infoItem}${text ? '' : styles.empty}`}>
      {icon}
      <div>
      {text && isLink ? <a href={currentHref} target='_blank' rel='noreferrer' className={styles.link}>{currentText}</a> : (
        <a
          href={isLink ? text : ''}
          className={isLink ? styles.link : ''}
        >
          {text}
        </a>
      )}
      </div>
    </div>
  )
};