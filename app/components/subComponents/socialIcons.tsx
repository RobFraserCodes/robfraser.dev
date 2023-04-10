import React, { useState } from 'react';
import { SocialIcon } from 'react-social-icons';
import styles from './socialIcons.module.css';

type Props = {
  fgColor?: string;
};

function SocialIcons({ fgColor = 'white' }: Props) {
  const hoverColor = '#ff0000';
  const [iconHover, setIconHover] = useState({
    twitter: false,
    github: false,
    medium: false,
    linkedin: false,
  });

  const handleMouseEnter = (platform) => {
    setIconHover({ ...iconHover, [platform]: true });
  };

  const handleMouseLeave = (platform) => {
    setIconHover({ ...iconHover, [platform]: false });
  };

  return (
    <div className="">
      {/* Social Media Icons */}
      <SocialIcon
        className={styles.socialIcon}
        url="https://twitter.com/robfrasercodes"
        bgColor="transparent"
        fgColor={iconHover.twitter ? hoverColor : fgColor}
        onMouseEnter={() => handleMouseEnter('twitter')}
        onMouseLeave={() => handleMouseLeave('twitter')}
      />
      <SocialIcon
        className={styles.socialIcon}
        url="https://github.com/RobFraserCodes"
        fgColor={iconHover.github ? hoverColor : fgColor}
        bgColor="transparent"
        onMouseEnter={() => handleMouseEnter('github')}
        onMouseLeave={() => handleMouseLeave('github')}
      />
      <SocialIcon
        className={styles.socialIcon}
        url="https://medium.com/@rob.fraser.daviot"
        fgColor={iconHover.medium ? hoverColor : fgColor}
        bgColor="transparent"
        onMouseEnter={() => handleMouseEnter('medium')}
        onMouseLeave={() => handleMouseLeave('medium')}
      />
      <SocialIcon
        className={styles.socialIcon}
        url="https://www.linkedin.com/in/rob-fraser-codes/"
        bgColor="transparent"
        fgColor={iconHover.linkedin ? hoverColor : fgColor}
        onMouseEnter={() => handleMouseEnter('linkedin')}
        onMouseLeave={() => handleMouseLeave('linkedin')}
      />
    </div>
  );
}

export default SocialIcons;
