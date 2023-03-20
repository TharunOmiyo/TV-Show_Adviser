import React from "react";
import s from "./style.module.css";
export default function Logo({ img, title, subtitle }) {
  return (
    <>
      <div className={s.container}>
        <img className={s.image} src={img} alt="Image" />
        <div className={s.title}>{title}</div>
      </div>
      <div className={s.subtitle}>{subtitle}</div>
    </>
  );
}
