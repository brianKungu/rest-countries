import React, { useState, useEffect } from "react";
import { Input } from "@nextui-org/react";
import { CiSearch } from "react-icons/ci";
import { useRouter } from "next/navigation";
// import debounce from "debounce";
interface SearchProps{
  onSearch:(query:string) => void;
}

export default function SearchBox({onSearch}:SearchProps) {
  const [searchText, setSearchText] = useState<string>("");
  const router = useRouter();
  // delay function for 500 seconds
  // const query = debounce(searchText, 500);

  useEffect(() => {
    if (!searchText) {
      router.push(`/`);
    } else {
      // change url once user types in search bar
      router.push(`?search=${searchText}`);
    }

    // console.log(searchText);
  }, [searchText, router]);


  const handleSubmit = (e:React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    onSearch(searchText.trim())
  }
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
