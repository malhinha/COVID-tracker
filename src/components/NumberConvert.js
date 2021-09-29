import React from 'react';

export default function NumberWithCommas({number}) {
  // add commas to numbers
  const convertedNumber = number.toLocaleString("en-US"))

  return <>{convertedNumber}</>
}
