import React from "react";
import { Input } from "@nextui-org/react";
import { CiSearch } from "react-icons/ci";
export default function SearchBox() {
  return (
    <div>
      <Input
          placeholder="Search for a country ..."
          labelPlacement="outside"
          startContent={
            <CiSearch className="text-lg text-default-400 pointer-events-none flex-shrink-0" />
          }
        />
    </div>
  );
}
