import React from 'react';
import zxcvbn from 'zxcvbn';
import { Progress, ProgressBar, TextBar } from './RegBar.styled';

const RegBar = ({ password }) => {
  const result = zxcvbn(password);
  const width = (result.score * 100) / 4;

  const progressColor = () => {
    switch (result.score) {
      case 0:
        return '#E0E0E0';
      case 1:
        return '#ff0000';
      case 2:
        return '#cc7524';
      case 3:
        return '#24CCA7';
      case 4:
        return '#24CCA7';
      default:
        return 'none';
    }
  };

  const createPasswordBar = () => {
    switch (result.score) {
      case 0:
        return 'Use a complex password';
      case 1:
        return 'Easy password';
      case 2:
        return 'Normal password';
      case 3:
        return 'Good password';
      case 4:
        return 'Secure password!';
      default:
        return '';
    }
  };
  const changePasswordColor = () => ({
    width: `${width}%`,
    background: progressColor(),
    height: '5px',
  });
  return (
    <ProgressBar>
      <Progress style={{ height: '4px' }}>
        <Progress style={changePasswordColor()} />
      </Progress>
      <TextBar style={{ color: progressColor() }}>
        {createPasswordBar()}
      </TextBar>
    </ProgressBar>
  );
};

export default RegBar;
