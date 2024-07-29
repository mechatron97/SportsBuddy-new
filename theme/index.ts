import {
  BoxProps,
  SpacingProps,
  VariantProps,
  createBox,
  createRestyleComponent,
  createVariant,
  createText,
  createTheme,
  spacing as restyleSpacing,
} from "@shopify/restyle";
import { colors, darkColors } from "./colors";
import { spacing } from "./spacing";
import { borderRadii } from "./borderRadii";
import { textVariants } from "./textVariants";
import { buttonVariants } from "./buttonVariants";

const Theme = createTheme({
  colors,
  spacing,
  borderRadii,
  textVariants,
  buttonVariants,
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
});

const DarkTheme: ThemeProps = {
  ...Theme,
  colors: darkColors,
};

type ThemeProps = typeof Theme;

const Div = createBox<ThemeProps>();
const Span = createText<ThemeProps>();

type ButtonCustomProps = BoxProps<ThemeProps> &
  SpacingProps<ThemeProps> &
  VariantProps<ThemeProps, "buttonVariants">;

const ButtonBox = createRestyleComponent<ButtonCustomProps, ThemeProps>([
  restyleSpacing,
  createVariant({ themeKey: "buttonVariants" }),
]);

export { Theme, ThemeProps, Div, Span, ButtonBox, ButtonCustomProps };
