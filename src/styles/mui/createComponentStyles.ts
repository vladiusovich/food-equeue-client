import { Components } from "@mui/material/styles";
import paper from "./components/paper";
import bottomNavigationAction from "./components/bottomNavigationAction";
import bottomNavigation from "./components/bottomNavigation";
import chip from "./components/chip";

export const overrideComponentStyles = (theme: ThemeType): Components<Omit<ThemeType, 'components'>> => {
    const styles = {
        MuiPaper: paper(theme),
        MuiBottomNavigation: bottomNavigation(theme),
        MuiBottomNavigationAction: bottomNavigationAction(theme),
        MuiChip: chip(theme),
    };

    return styles;
};
