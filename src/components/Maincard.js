import React from "react";

const Maincard = ({ weatherInfo }) => {
    const current = weatherInfo.current
  return (
    <div className='main-card-container center p-2'>
      <div className='main-card'>
        <div className='main-card-top center mb-2'>
          <h5 style={{textTransform: "uppercase", marginBottom: 0}}>{weatherInfo.location.name}</h5>
          <img src={current.condition.icon} className="img-fluid" alt="weather" />
        </div>
        <p className='text-center py-1'>{current.condition.text}</p>
        <div className='row g-5'>
          <div className='col-6 center'>
            <div>
              Temperature:
              <div>
                <strong>{current.temp_c}</strong> &#x2103;
              </div>
            </div>
          </div>
          <div className='col-6 center'>
            <div>
              Pressure:
              <div>
                <strong>{current.pressure_mb}</strong>hPa
              </div>
            </div>
          </div>
          <div className='col-6 center'>
            <div>
              Wind:
              <div>
                <strong>{current.wind_mph}</strong> miles/hour
              </div>
            </div>
          </div>
          <div className='col-6 center'>
            <div>
              Humidity:
              <div>
                <strong>{current.humidity}</strong>%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maincard;
