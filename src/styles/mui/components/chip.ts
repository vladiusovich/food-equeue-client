const chip = (theme: ThemeType) => (
    {
        styleOverrides: {
            root: {
                color: theme.colors.typo.regular.main,
                borderColor: theme.colors.border.regular.main,
            },
        },
    }
);

export default chip;