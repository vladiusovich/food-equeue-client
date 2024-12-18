const bottomNavigation = (theme: ThemeType) => (
    {
        styleOverrides: {
            root: {
                color: theme.colors.typo.danger.light,
                backgroundColor: theme.colors.background.regular.light,
            },
            label: {
                color: theme.colors.typo.danger.light,
                marginTop: '5px',
                fontSize: '10px',
            },
        },
    }
);

export default bottomNavigation;