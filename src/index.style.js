import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
body {
  font-family: 'Poppins', sans-serif;
  margin: 0;
}
`

export const theme = {
primary: {
  cyan: "#17a2b8",
  darkViolet: "#3b3054"
},
secondary: {
  red: "#ec5252",
  orange: "#f4a261",
  yellow: "#e9c46a",
  pink: "#ef476f"
},
neutral: {
  gray: "#bfbfbf",
  lightGray: "#F3F4F6",
  grayishViolet: "#9e9aa7",
  veryDarkBlue: "#35323e",
  veryDarkViolet: "#232127"
},
fontSize: "1.2rem"
}