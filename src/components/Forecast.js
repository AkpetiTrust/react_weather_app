import React from "react";

const Forecast = ({ forecastDays }) => {
  return (
    <div className='forecast-section mt-5 pb-5 center'>
      <div>
            <h5 className='mb-3'>WEEK'S FORECAST</h5>
            <div className="days">
                <div className="row gx-5">
                    {forecastDays.map((forecastDay, index)=>{
                        return (
                            <div className="col-4" key={index}>
                                <div className="day">
                                    <div className="top">
                                        <strong>{forecastDay.day.maxtemp_c}</strong> &#x2103;
                                    </div>
                                    <img src={forecastDay.day.condition.icon} className="img-fluid" alt="weather" />
                                    <div className="top">
                                        <strong>{forecastDay.day.mintemp_c}</strong> &#x2103;
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
      </div>
    </div>
  );
};

export default Forecast;
