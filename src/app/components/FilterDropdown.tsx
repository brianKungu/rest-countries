"use client";
import React from "react";
import { Country } from "../interface/interface";

interface FilterDropdownProps {
  countries: Country[];
  onSelectContinent: (continent: string) => void;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({
  countries,
  onSelectContinent,
}) => {
  const handleContinentChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    onSelectContinent(event.target.value);
  };

  return (
    <div>
      <label htmlFor="continent-select sr-only">Select Continent:</label>
      <select
        id="continent-select"
        title="Select Continent"
        onChange={handleContinentChange}
        className="p-2  bg-white dark:bg-darkBlueElements shadow-md rounded-md"
      >
        <option value="">Filter by Region</option>
        {countries.map((country, index) => (
          <option key={index} value={country.region}>
            {country.region}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterDropdown;
