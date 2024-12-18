import Grid from "@mui/material/Unstable_Grid2/Grid2";

import Skeleton from "@mui/material/Skeleton";
import CircularProgress from "@mui/material/CircularProgress";

import IconButton from "./iconButton/IconButton";

import Divider from '@mui/material/Divider';

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import Chip from "./chip/Chip";
import Paper from "./paper/Paper";
import Stack from "./stack/Stack";
import Button from "./button/Button";
import Typography from "./typography/Typography";

export * from "@mui/material/Stack";
export * from "@mui/material/Unstable_Grid2/Grid2";

export * from "@mui/material/Skeleton";
export * from "@mui/material/CircularProgress";

export * from "@mui/material/Button";
export * from "./iconButton/IconButton";

export * from '@mui/material/Divider';
export * from '@mui/material/Paper';

export * from "@mui/material/BottomNavigation";
export * from "@mui/material/BottomNavigationAction";

export * from "@mui/material/Chip";
export * from "./typography/Typography";

const UI = {
    Typography,
    Stack,
    Grid,

    Skeleton,
    CircularProgress,

    Button,
    IconButton,
    Divider,
    Paper,

    BottomNavigation,
    BottomNavigationAction,

    Chip,
};

export default UI;
