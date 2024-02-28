"use client";
import SearchBox from "./components/SearchBox";
import FilterDropdown from "./components/FilterDropdown";
import Countries from "./components/Countries";
import { Country } from "./interface/interface";
import countriesData from "../../data.json";
import { useState } from "react";

console.log(countriesData);

export default function Home() {
  const [countries, setCountries] = useState<Country[]>(countriesData);
  return (
    <main className="flex min-h-screen flex-col items-center py-12 max-w-5xl px-6 mx-auto">
      <div className="block md:flex md:space-y-0 space-y-4 items-center md:justify-between w-full">
        <SearchBox />
        <FilterDropdown />
      </div>
      <div>
        <Countries countries={countries} />
      </div>
    </main>
  );
}


