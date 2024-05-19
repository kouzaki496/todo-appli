import { extendTheme} from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global:{
      body: {
        backgroundColor: "blue.100",
        color: "blue.900",
        // fontSize: { base: "sm", md: "lg"},

      }
    },
    fontSizes: {
      xs: '0.75rem', // 12px
      sm: '0.875rem', // 14px
      md: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.25rem', // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem', // 48px
      '6xl': '4rem', // 64px
      '7xl': '5rem', // 80px
    },
  }
});

export default theme;