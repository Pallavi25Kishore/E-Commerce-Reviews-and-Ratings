import React from 'react';

const CreatedAt = ({name, isoDate}) => {
  var monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var date = new Date(isoDate); // iso date is in UTC, date will be displayed in locale time
  var monthNumber = date.getMonth();
  var month = monthList[monthNumber]; //getMonth() result is zero indexed
  var dd = date.getDate();
  var yyyy = date.getFullYear();

return (
  <div className="name-and-date">
  <span>{`${name}, `}</span>
  <span style={{marginLeft: '5px'}}>{`${month} ${dd}, ${yyyy}`}</span>
  </div>
);

};

export default CreatedAt;