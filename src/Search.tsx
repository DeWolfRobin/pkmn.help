import React from "react";
import classnames from "classnames";

import ImageClear from "../svg/clear.svg";
import ImageSearch from "../svg/search.svg";

interface SearchProps {
  updateSearch(search: string): any;
  search: string;
}

function Search(props: SearchProps) {
  const { updateSearch, search } = props;
  const clearSearch = () => {
    document.getElementsByTagName("input")[0].focus();
    updateSearch("");
  };
  const onChange = (event: any) => {
    updateSearch(event.target.value);
  };
  const input = (
    <input
      aria-label="search"
      type="search"
      autoComplete="off"
      autoCorrect="off"
      inputMode="verbatim"
      autoCapitalize="none"
      autoFocus={true}
      className={classnames(
        "f2 w-100 border-box",
        "pv2",
        "chunky-focus",
        "inset-shadow",
        "br-pill ba",
        "bg-white",
        "hover-bg-washed-blue",
        "b--black-30",
        "search-placeholder-light"
      )}
      style={{
        paddingLeft: 65,
        paddingRight: 65,
        height: 55
      }}
      placeholder="Search"
      value={search}
      onChange={onChange}
    />
  );
  const icon = (
    <div
      className="absolute"
      style={{
        fill: "black",
        opacity: 0.5,
        width: 40,
        height: 40,
        left: 12,
        top: 10
      }}
    >
      <ImageSearch />
    </div>
  );
  const clear = (
    <div
      role="presentation"
      onClick={clearSearch}
      className={classnames("absolute pointer", { dn: search === "" })}
      style={{
        fill: "black",
        opacity: 0.5,
        width: 40,
        height: 40,
        right: 8,
        top: 8
      }}
    >
      <ImageClear />
    </div>
  );
  return (
    <div className="relative mv4">
      {icon}
      {input}
      {clear}
    </div>
  );
}

Search.displayName = "Search";

export default Search;
