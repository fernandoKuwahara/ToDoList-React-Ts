import "styled-components";
import { ThemeDefault } from "../../styles/Theme/Theme";

type ThemeType = typeof ThemeDefault;

declare module "styled-components" {
    export interface DefaultTheme extends ThemeType {}
}