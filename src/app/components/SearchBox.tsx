import React, { useState, useEffect, FormEventHandler } from "react";
import { Input } from "@nextui-org/react";
import { CiSearch } from "react-icons/ci";
import { useRouter } from "next/navigation";
interface SearchProps {
  onSearch: (query: string) => void;
}

export default function SearchBox({ onSearch }: SearchProps) {
  const [searchText, setSearchText] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    if (!searchText) {
      router.push(`/`);
    } else {
      // change url once user types in search bar
      router.push(`?search=${searchText}`);
    }

    // console.log(searchText);
  }, [searchText, router]);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    onSearch(searchText.trim());
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="Search for a country ..."
          labelPlacement="outside"
          startContent={
            <CiSearch className="text-lg text-default-400 pointer-events-none flex-shrink-0" />
          }
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </form>
    </div>
  );
}
