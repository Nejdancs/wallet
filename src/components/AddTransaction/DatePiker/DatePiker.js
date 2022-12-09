import { useState } from 'react';
import Datetime from 'react-datetime';

import 'react-datetime/css/react-datetime.css';
import './DatePiker.css';

const DatePiker = () => {
  const [date, setDate] = useState(new Date());
  let inputProps = { className: 'dateInput' };
  return (
    <Datetime
      timeFormat={false}
      initialValue={date}
      closeOnSelect={true}
      dateFormat="DD.MM.YYYY"
      inputProps={inputProps}
    ></Datetime>
  );
};

export default DatePiker;
