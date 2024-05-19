// Button.jsx
import { IconButton } from '@chakra-ui/react';

export const CustomButton  = ({ icon, onClick, bg, color, hoverBg, hoverColor, ...props }) => {
  return (
    <IconButton
      icon={icon}
      onClick={onClick}
      bg={bg}
      color={color}
      ml="0.5"
      _hover={{
        bg: hoverBg,
        color: hoverColor,
      }}
      {...props}
    />
  );
};

