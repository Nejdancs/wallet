import { useState } from 'react';
import PropTypes from 'prop-types';

import IconPlus from '../../../images/plus.svg';
import IconMinus from '../../../images/minus.svg';

import {
  Switch,
  Checkbox,
  SwitchContainer,
  Slider,
  Income,
  Expense,
  IcPlus,
  IcMinus,
} from './SwitchToggle.styled';

const SwitchToggle = ({ onLoad }) => {
  const [toggled, setToggled] = useState(false);
  const [operationType, setOperationType] = useState('Expense');

  const handleChange = e => {
    setToggled(e.target.checked);

    toggled ? setOperationType('Expense') : setOperationType('Income');
  };

  const loadSwitch = () => {
    onLoad(operationType);
  };

  return (
    <SwitchContainer onLoad={loadSwitch} onChange={handleChange}>
      <Income
        type="text"
        name="income"
        style={{ color: toggled ? '#24cca7' : '#e0e0e0' }}
      >
        Income
      </Income>
      <Switch>
        <Checkbox type="checkbox" />
        <Slider>
          {toggled ? (
            <IcPlus src={IconPlus} alt="plus" />
          ) : (
            <IcMinus src={IconMinus} alt="minus" />
          )}
        </Slider>
      </Switch>
      <Expense
        ype="text"
        name="expense"
        style={{ color: toggled ? '#e0e0e0' : '#ff6596' }}
      >
        Expense
      </Expense>
    </SwitchContainer>
  );
};

export default SwitchToggle;

SwitchToggle.propTypes = {
  onLoad: PropTypes.func,
};
