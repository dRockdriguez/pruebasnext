import Link from "next/link";
import { useRef, useState } from "react";

export default function AutocompleteComponent() {
  const [comics, setComics] = useState([]);
  const searchRef = useRef();

  const handleSearch = () => {
    const q = searchRef.current?.value;

    fetch(`/api/search?q=${q}`)
      .then((res) => res.json())
      .then((r) => {
        setComics(r.splice(0, 5));
      });
  };

  return (
    <div style={{ position: "relative" }}>
      <input
        ref={searchRef}
        style={{ width: "100%" }}
        className="inputSearch"
        type="search"
        onChange={handleSearch}
      ></input>
      {Boolean(comics.length) && (
        <div className="results">
          <ul>
            <li>
              <Link href={`/search?q=${searchRef.current?.value}`}>
                All results
              </Link>
            </li>
            {comics.map((comic) => {
              return (
                <li key={comic.id}>
                  <Link href={`/comic/${comic.id}`}>{comic.title}</Link>
                </li>
              );
            })}
          </ul>
          <style jsx>{`
            .inputSearch {
              border: ;
            }
            .results {
              position: absolute;
              left: 0;
              width: 100%;
              background: #fafafa;
            }
          `}</style>
        </div>
      )}
    </div>
  );
}
