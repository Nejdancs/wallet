import { useState } from 'react';
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

const SwitchToggle = ({ onChange }) => {
  const [toggled, setToggled] = useState(false);

  const handleChange = e => {
    setToggled(e.target.checked);
    onChange(e.target.checked);
  };

  return (
    <SwitchContainer>
      <Income style={{ color: toggled ? '#24cca7' : '#e0e0e0' }}>Income</Income>
      <Switch>
        <Checkbox type="checkbox" onChange={handleChange} />
        <Slider>
          {toggled ? (
            <IcPlus src={IconPlus} alt="plus" />
          ) : (
            <IcMinus src={IconMinus} alt="minus" />
          )}
        </Slider>
      </Switch>
      <Expense style={{ color: toggled ? '#e0e0e0' : '#ff6596' }}>
        Expense
      </Expense>
    </SwitchContainer>
  );
};

export default SwitchToggle;
