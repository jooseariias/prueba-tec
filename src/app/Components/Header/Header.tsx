import React from 'react';
import styles from '@/Components/Header/Header.module.css';

interface HeaderProps {
  name: string;
  profileImage: string;
}

const Header: React.FC<HeaderProps> = ({ name, profileImage }) => (
  <header className={styles.header}>
    <img src={profileImage} alt={`${name}'s profile`} className={styles.profileImage} />
    <h1 className={styles.name}>{name}</h1>
  </header>
);

export default Header;
