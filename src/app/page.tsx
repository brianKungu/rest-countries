"use client";
import SearchBox from "./components/SearchBox";
import FilterDropdown from "./components/FilterDropdown";
import Countries from "./components/Countries";
import { Country } from "./interface/interface";
import countriesData from "../../data.json";
import { useState } from "react";

console.log(countriesData);

const Home: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>(countriesData);
  const [selectedContinent, setSelectedContinent] = useState<string>("");
  const [filteredCountries, setFilterdCountries] =
    useState<Country[]>(countries);

  const handleContinentChange = (region: string) => {
    setSelectedContinent(region);
    if (!region) {
      setFilterdCountries(countries);
    } else {
      setFilterdCountries(
        countries.filter((country) => country.region === region)
      );
    }
  };
  console.log("filteredCountries", filteredCountries);

  const handleSearch = (query: string) => {
    const filtered = countries.filter(
      (country) =>
        country?.name.toLowerCase().includes(query.toLowerCase()) ||
        country?.region.toLowerCase().includes(query.toLowerCase()) ||
        country?.subregion.toLowerCase().includes(query.toLowerCase())
    );
    if (selectedContinent) {
      setFilterdCountries(
        filtered.filter((country) => country.region === selectedContinent)
      );
    } else {
      setFilterdCountries(filtered);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center py-12 max-w-5xl px-6 mx-auto">
      <div className="block md:flex md:space-y-0 space-y-4 items-center md:justify-between w-full">
        <SearchBox onSearch={handleSearch} />
        <FilterDropdown
          countries={countries}
          onSelectContinent={handleContinentChange}
        />
      </div>
      <div>
        <Countries countries={filteredCountries} />
      </div>
    </main>
  );
};

export default Home;
