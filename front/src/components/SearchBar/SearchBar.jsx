import { useState } from "react";
import { Button, Input } from "./style-searchBar";

export default function SearchBar({ onSearch, getRandomCharacter }) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <>
      <Input
        type="search"
        onChange={handleChange}
        placeholder="Buscar personaje..."
      />
      <Button tablet phone onClick={() => onSearch(id)}>
        Añadir
      </Button>
      <Button
        portatil
        phone
        className="buttonRandom"
        onClick={getRandomCharacter}
      >
        Añadir personaje aleatorio
      </Button>
    </>
  );
}
