const paper = (theme: ThemeType) => (
    {
        styleOverrides: {
            root: {
                color: theme.colors.typo.danger.light,
                padding: '12px 16px',
                border: "1px solid",
                borderRadius: theme.border.radius.regular,
                borderColor: theme.colors.border.regular.main,
                backgroundColor: theme.colors.background.regular.light,
            },
        },
    }
);

export default paper;