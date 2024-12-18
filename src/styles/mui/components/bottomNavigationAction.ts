const bottomNavigationAction = (theme: ThemeType) => (
    {
        styleOverrides: {
            label: {
                color: theme.colors.typo.regular.main,
                marginTop: '5px',
                fontSize: '10px',
                '&.Mui-selected': {
                    fontSize: '10px',
                    color: theme.colors.typo.regular.dark,
                },
            },
        },
    }
);

export default bottomNavigationAction;