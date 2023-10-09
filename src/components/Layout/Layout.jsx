import { Container } from "@mui/system";
import Header from "./Header";
import { Footer } from "./Footer";
import { ThemeProvider } from "@mui/material";
import { appTheme } from "../../themes/theme";
import PropTypes from 'prop-types';
Layout.propTypes = { children: PropTypes.node.isRequired, };

export function Layout({ children }) {
    return (
        <ThemeProvider theme={appTheme}>
            <Header></Header>
            <Container maxWidth='x1' style={{ paddingTop: '1rem', paddingBottom: '4,5rem' }}>
                {children}
            </Container>
            <Footer></Footer>
        </ThemeProvider>
    )
}