import React, {FC} from "react";
import './HomeCityCards.css'

import { WeatherLocation, Forecast } from "../../model/Weather";
import HomeCard from "../HomeCard/HomeCard"
import { NavLink } from 'react-router-dom';

interface HomeCityProps {
  allCities: WeatherLocation[];
  onSelect: (city: WeatherLocation) => void;
  clickedCard: WeatherLocation | null;
  details: Forecast | null;
  stateStrings: string[];
}

export const HomeCityCards: FC<HomeCityProps> = ({ allCities, onSelect, clickedCard, details, stateStrings }) => {

const cityCards = allCities.map((city, i) => {

    return (
      <NavLink className='card-link' to={`/hi-lo/${city.name}`}>
        <HomeCard
          key={city.id}
          onSelect={() => onSelect(city)}
          clickedCard={city}
          details={details}
          name={city.name}
          hi={city.main.temp_max}
          lo={city.main.temp_min}
          description={city.weather[0].description}
          icon={city.weather[0].icon}
          stateString={stateStrings[i]}
        />
      </NavLink>
    );
  });
  return <div className="cities-container">{cityCards}</div>;
};


export default HomeCityCards;
