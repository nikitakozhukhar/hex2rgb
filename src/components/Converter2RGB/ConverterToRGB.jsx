import styles from "../Converter2RGB/torgb.module.css";
import hexToRgb from "../../utilits/hexToRgb";
import { useState } from "react";

const regHEX = /#[\dabcdef]{6}/;

export function ConverterToRGB() {
  const [value, setValue] = useState("#34495e");

  const handleInputHexCange = e => {
    
    const hexValue = e.target.value;

    if (!regHEX && hexValue.length > 7) return 

    setValue(hexValue);
    
  }
  return (
    <>
      <div
        className={styles.backgroundColorContainer}
        style={{ background: `${hexToRgb(value)}` }}
      >
        <input
          className={`${styles.inputHEX} ${styles.input}`}
          value={value}
          onChange={handleInputHexCange}
        ></input>
        <div className={styles.newRGB}>{hexToRgb(value)}</div>
      </div>
    </>
  );
}
