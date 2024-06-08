import React from 'react';

const CreatedAt = ({isoDate}) => {

  var monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var date = new Date(isoDate);
  var monthNumber = date.getMonth();
  var month = monthList[monthNumber -1];
  var dd = date.getDate();
  var yyyy = date.getFullYear();


  console.log(date);

return (
  <span>{`${month} ${dd}, ${yyyy}`}</span>
);

};

export default CreatedAt;