import chroma from "chroma-js";
import { StylesConfig } from "react-select";
export const customStyles: StylesConfig = {
  control: (base: any, state: any) => ({
    ...base,
    height: "3rem",
    background: "#181818",
    fontSize: "1.125rem",

    // match with the menu

    borderRadius: 8,
    // Overwrittes the different states of border
    borderColor: "transparent",
    // Removes weird border around container
    boxShadow: state.isFocused ? null : null,
    "&:hover": {
      // Overwrittes the different states of border
      borderColor: state.isFocused ? "#4b5563" : "#4b5563",
    },
  }),
  multiValue: (styles) => ({
    ...styles,
    background: "#2e2e2e",
    borderRadius: 4,
    zIndex: 1,
  }),
  multiValueLabel: (styles) => ({
    ...styles,
    color: "#e5e7eb",

    zIndex: 1,
  }),

  menu: (base: any) => ({
    ...base,
    // override border radius to match the box

    borderRadius: 0,
    // kill the gap
    marginTop: 0,
  }),
  menuList: (base: any) => ({
    ...base,
    // kill the white space on first and last option
    color: "white",

    padding: 12,

    background: "#131313",
  }),
};
