import React, { useState } from "react";
import { Search as SearchIcon } from "react-bootstrap-icons";
import s from "./style.module.css";

export default function SearchBar({ onSubmit }) {
  const [value, setValue] = useState("");
  function submit(e) {
    console.log(e.target.value);
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      onSubmit(e.target.value);
      setValue("");
    }
  }
  function handler(e) {
    setValue(e.target.value);
  }
  return (
    <>
      <SearchIcon size={27} className={s.icon} />
      <input
        type="text"
        onChange={handler}
        onKeyUp={submit}
        className={s.input}
        value={value}
        placeholder="Search tv shows"
      />
    </>
  );
}
