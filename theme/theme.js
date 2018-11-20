export function FontFamily() {
  return `
    font-family: 'EB Garamond', serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  `;
}

export function FontHeader() {
  return `
    font-family: 'Oswald', sans-serif;
    -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
    font-weight: 700;
  `;
}

export function FontFancy() {
  return `
    font-family: 'Dancing Script', cursive;
    -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
    font-weight: 400;
  `;
}

/*-----------------------------------------
  Breakpoint Variables
------------------------------------------*/
export const PhoneWidth = 320;
export const MaxWidth = 740;

/*-----------------------------------------
  Color Variables
------------------------------------------*/
export const Background = "#333333";
export const PrimaryColor = "#37BC97";
export const PrimaryText = "#FFFFFF";
export const SecondaryText = "#999999";

/*-----------------------------------------
  Size Variables
------------------------------------------*/
export const Padding = 10;
export const NavHeight = 50;
export const Touch = 40;

/*-----------------------------------------
  Functions with Variables
------------------------------------------*/
export function Container() {
  return `
    box-sizing: border-box;
    margin: 0 auto;
    max-width: ${MaxWidth}px;
    padding: 0 ${Padding}px;
    overflow: hidden;
    width: 100%;
  `;
}
