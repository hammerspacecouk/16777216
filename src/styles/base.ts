import { css } from "styled-components";
import {GRID} from "./variables";
import {BASE_FONT} from "./typography";

export const scrollbarStyles = css`
  /* 1st: thumb, 2nd: track. */
  scrollbar-color: #999 #111;
  scrollbar-width: thin;
  &::-webkit-scrollbar {
    width: ${GRID.HALF};
  }
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px #111;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #999;
    outline: 1px solid slategrey;
  }
`;

export const base = css`
  * {
    ${scrollbarStyles};
    box-sizing: border-box;
    &:before,
    &:after {
      box-sizing: border-box;
    }
  }

  html {
    ${BASE_FONT};
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    margin: 0;
    min-height: 100%;
    background: #333933;
    color: #ccc;
  }

  body {
    min-height: 100vh;
    padding: ${GRID.DOUBLE};
    text-align: center;
  }

  // a {
  //   background-color: transparent;
  //   font-weight: inherit;
  //   text-decoration: inherit;
  //   &:active,
  //   &:hover {
  //     outline: 0;
  //   }
  //   &:hover,
  //   &:active,
  //   &:focus {
  //     text-decoration: none;
  //   }
  // }

  img,
  svg {
    border: 0;
    max-width: 100%;
    flex: 1;
  }
  svg:not(:root) {
    overflow: hidden;
    fill: currentColor;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    color: inherit;
    font: inherit;
    margin: 0;
  }

  button {
    overflow: visible;
    cursor: pointer;
  }
  button,
  select {
    text-transform: none;
  }

  button[disabled],
  html input[disabled] {
    cursor: default;
  }

  abbr {
    text-decoration: none;
  }

  em {
    font-style: italic;
  }

  strong {
    font-weight: bold;
  }
`;
