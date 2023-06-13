import { ThemeProvider } from "@mui/material/styles";
import theme from "@/components/ui/Theme";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
