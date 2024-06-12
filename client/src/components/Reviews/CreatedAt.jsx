import React from 'react';

const CreatedAt = ({isoDate}) => {
  var monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var date = new Date(isoDate); // iso date is in UTC, date will be displayed in locale time
  var monthNumber = date.getMonth();
  var month = monthList[monthNumber]; //getMonth() result is zero indexed
  var dd = date.getDate();
  var yyyy = date.getFullYear();

return (
  <span>{`${month} ${dd}, ${yyyy}`}</span>
);

};

export default CreatedAt;