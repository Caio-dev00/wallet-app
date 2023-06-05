import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Fontisto } from "@expo/vector-icons";

import { Button, Title, IconFacebook } from './styles';

interface Props extends RectButtonProps {
  title: string;
  iconName: React.ComponentProps<typeof Fontisto>["name"]
  iconColor: React.ComponentProps<typeof Fontisto>["color"]
}

const ButtonSocial: React.FC<Props> = ({title, iconName, iconColor, ...rest}) => {
  return(
    <Button {...rest}>
      <IconFacebook name={iconName} color={iconColor} />
      <Title>{title}</Title>
    </Button>
  )
}

export { ButtonSocial }
