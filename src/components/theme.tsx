import { createTheme } from '@mui/material';
import * as colors from 'tailwindcss/colors';

export const theme = createTheme({
    components: {
        MuiFormControl: {
            defaultProps: {
                classes: {
                    root: 'w-full'
                }
            }
        }
    },
    palette: {
        mode: 'light',
        dimmed: {
            light: colors.neutral[300],
            main: colors.neutral[500],
            dark: colors.neutral[800],
            contrastText: colors.black
        },
        vivid: {
            light: colors.yellow[300],
            main: colors.yellow[500],
            dark: colors.yellow[800],
            contrastText: colors.black
        },
        ash: {
            light: colors.zinc[300],
            main: colors.zinc[500],
            dark: colors.zinc[800],
            contrastText: colors.white
        },
        callout: {
            light: colors.rose[300],
            main: colors.rose[500],
            dark: colors.rose[800],
            contrastText: colors.white
        },
        neutral: {
            light: colors.gray[300],
            main: colors.gray[500],
            dark: colors.gray[800],
            contrastText: colors.white
        },
        neon: {
            light: colors.lime[300],
            main: colors.lime[500],
            dark: colors.lime[800],
            contrastText: colors.black
        },
        highlight: {
            light: colors.fuchsia[300],
            main: colors.fuchsia[500],
            dark: colors.fuchsia[800],
            contrastText: colors.white
        },
        metal: {
            light: colors.slate[300],
            main: colors.slate[500],
            dark: colors.slate[800],
            contrastText: colors.white
        },
        important: {
            light: colors.cyan[300],
            main: colors.cyan[500],
            dark: colors.cyan[800],
            contrastText: colors.white
        },
        caution: {
            light: colors.yellow[300],
            main: colors.yellow[500],
            dark: colors.yellow[800],
            contrastText: colors.black
        },
        tertiary: {
            light: colors.teal[300],
            main: colors.teal[500],
            dark: colors.teal[800],
            contrastText: colors.black
        }
    }
});