import Image from "next/image";
import React from "react";
import { Country } from "../interface/interface";
import Link from "next/link";

interface countryProps {
  country: Country;
}

export default function CountryComponent({ country }: countryProps) {
  return (
    <Link href={`/country/${country?.name}`} className="flex flex-col gap-2 bg-white dark:bg-darkBlueElements shadow-md rounded-md">
      <Image
        src={country?.flags.svg}
        height={1000}
        width={1000}
        className="rounded-t-md object-fit h-[150px] w-auto"
        priority
        alt={country?.name}
      />
      <div className="flex flex-col p-3">
        <strong>{country?.name}</strong>

        <p>
          <strong>Population: </strong>
          {country?.population.toLocaleString()}
        </p>
        <p>
          <strong>Region: </strong>
          {country?.region}
        </p>
        <p>
          <strong>Capital: </strong>
          {country?.capital}
        </p>
      </div>
    </Link>
  );
}
