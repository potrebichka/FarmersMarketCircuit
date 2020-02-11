import React from 'react';
import Day from './Day';

const marketSchedule = [  
  {  
    day: 'Sunday',
    location: 'Lents International',
    hours: '9:00am - 2:00pm',
    booth: '4A'
  },
  {  
    day: 'Monday',
    location: 'Pioneer Courthouse Square',
    hours: '10:00am - 2:00pm',
    booth: '7C'
  },
  {  
    day: 'Tuesday',
    location: 'Hillsboro',
    hours: '5:00pm - 8:30pm',
    booth: '1F'
  },
  {  
    day: 'Wednesday',
    location: 'Shemanski Park',
    hours: '10:00am - 2:00pm',
    booth: '3E'
  },
  {  
    day: 'Thursday',
    location: 'Northwest Portland',
    hours: '2:00pm - 6:00pm',
    booth: '6D'
  },
  {  
    day: 'Saturday',
    location: 'Beaverton',
    hours: '10:00am - 1:30pm',
    booth: '9G'
  }
];

function DaysList(){
  return (
    <div>
      <style jsx> {`
        h2 {
          text-align: center;
          font-size: 35px;
        }
        .days {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          align-items: center;
        }
      `}
      </style>
      <h2>SCHEDULE:</h2>
      <hr />
      <div className="days">
        {marketSchedule.map((day, index) =>
          <Day name={day.day}
            location={day.location}
            hours={day.hours}
            booth={day.booth}
            key={index}/>
        )}
      </div>
    </div>
  );
}

export default DaysList;