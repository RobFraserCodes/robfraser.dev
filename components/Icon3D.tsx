import React from 'react';
import { motion } from 'framer-motion';

interface Icon3DProps {
  src: string;
  alt: string;
}

const Icon3D: React.FC<Icon3DProps> = ({ src, alt }) => {
  const iconVariants = {
    hover: { rotateY: 180 },
    tap: { rotateY: -180 },
  };

  return (
    <motion.img
      src={src}
      alt={alt}
      className="w-16 h-16"
      variants={iconVariants}
      whileHover="hover"
      whileTap="tap"
    />
  );
};

export default Icon3D;
