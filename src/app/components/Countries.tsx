import React from "react";
import CountryComponent from "./Country";
import { Country } from "../interface/interface";

interface CountriesProps {
  countries: Country[];
}

export default function Countries({ countries }: CountriesProps) {
  return (
    <div className="grid lg:grid-cols-4 grid-cols-1 gap-6 pt-12">
      {countries?.map((country, index) => (
        <CountryComponent key={index} country={country} />
      ))}
    </div>
  );
}
