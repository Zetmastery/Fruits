import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

interface SvgIconProps {
  name: string;
  size?: number;
}

const SvgIcon: React.FC<SvgIconProps> = (props: SvgIconProps) => {
  const {name, size = 24} = props;
  if (!name) {
    return null;
  }

  return <Icon name={name} size={size} color="#900" />;
};

export default SvgIcon;
