import React, { useState } from 'react';
import { SocialIcon } from 'react-social-icons';

type Props = {
  fgColor?: string;
};

function SocialIcons({ fgColor = '#219EBC' }: Props) {
  const hoverColor = '#1F91AD';
  const [iconHover, setIconHover] = useState({
    twitter: false,
    github: false,
    medium: false,
    linkedin: false,
    devto: false,
  });

  const handleMouseEnter = (platform: string) => {
    setIconHover({ ...iconHover, [platform]: true });
  };

  const handleMouseLeave = (platform: string) => {
    setIconHover({ ...iconHover, [platform]: false });
  };

  return (
    <div className="pt-4">
      {/* Social Media Icons */}
      <SocialIcon
        className="mx-2"
        url="https://twitter.com/robfrasercodes"
        bgColor="transparent"
        fgColor={iconHover.twitter ? hoverColor : fgColor}
        onMouseEnter={() => handleMouseEnter('twitter')}
        onMouseLeave={() => handleMouseLeave('twitter')}
      />
      <SocialIcon
        className="mx-2"
        url="https://github.com/RobFraserCodes"
        fgColor={iconHover.github ? hoverColor : fgColor}
        bgColor="transparent"
        onMouseEnter={() => handleMouseEnter('github')}
        onMouseLeave={() => handleMouseLeave('github')}
      />
      <SocialIcon
        className="mx-2"
        url="https://medium.com/@rob.fraser.daviot"
        fgColor={iconHover.medium ? hoverColor : fgColor}
        bgColor="transparent"
        onMouseEnter={() => handleMouseEnter('medium')}
        onMouseLeave={() => handleMouseLeave('medium')}
      />
      <SocialIcon
        className="mx-2"
        url="https://www.linkedin.com/in/rob-fraser-codes/"
        bgColor="transparent"
        fgColor={iconHover.linkedin ? hoverColor : fgColor}
        onMouseEnter={() => handleMouseEnter('linkedin')}
        onMouseLeave={() => handleMouseLeave('linkedin')}
      />
      <SocialIcon
        className="mx-2"
        url="https://dev.to/robfrasercodes"
        bgColor="transparent"
        fgColor={iconHover.devto ? hoverColor : fgColor}
        onMouseEnter={() => handleMouseEnter('devto')}
        onMouseLeave={() => handleMouseLeave('devto')}
      />

    </div>
  );
}

export default SocialIcons;
