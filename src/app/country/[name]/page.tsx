import { Country } from "@/app/interface/interface";
import Image from "next/image";

import React from "react";

interface Params {
  params: {
    name: string;
  };
}

interface CountryType {
  country:Country
}
async function getCountryByName(name: string) {
  const response = await fetch(`http://localhost:3000/api/countries/${name}`, {
    method: "GET",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

export default async function page({ params: { name } }: Params) {
  //Params extends Params
  const country: CountryType = await getCountryByName(name);
  console.log(country.country);
  return (
    <main className="flex min-h-screen flex-col items-center py-12 max-w-5xl px-6 mx-auto">
     <div className="block md:grid md:grid-cols-2 gap-4 space-y-4 md:space-y-0">
        <Image src={country?.country.flags.png} alt={country?.country.name} priority height={1000} width={1000} className="rounded-md shadow-md "/>
        
        <div>
            <div className="grid grid-cols-2 gap-6">
              <p>
                <strong>Name:{" "}</strong>
                {country?.country.name || "empty"}
              </p>
              <p>
                <strong>Capital:{" "}</strong> {country?.country.capital || "empty"}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <p>
                <strong>Region:{" "}</strong> {country?.country.region || "empty"}
              </p>
              <p>
                <strong>Population:{" "}</strong> {country?.country.population || "empty"}
              </p>
            </div>
            </div>
     </div>
    </main>
  );
}
