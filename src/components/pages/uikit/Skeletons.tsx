import UI from "@ui";
import React from "react";
import { Skeleton } from "@mui/material";

const Skeletons: React.FC = () => {
    return (
        <UI.Paper>
            <UI.Stack direction="column" gap={1}>
                {/* Text Skeleton */}
                <Skeleton variant="text" width="100%" />
                <Skeleton variant="text" width="75%" />
                <Skeleton variant="text" width="50%" />

                {/* Rectangular Skeleton */}
                Rectangular Variant:
                <Skeleton variant="rectangular" width={300} height={200} />
                <Skeleton variant="rectangular" width={150} height={100} sx={{ marginTop: 2 }} />

                {/* Circular Skeleton */}
                <Skeleton variant="circular" width={80} height={80} />
                <Skeleton variant="circular" width={50} height={50} sx={{ marginTop: 2 }} />

                {/* Custom Animation Variants */}
                <Skeleton variant="text" animation="wave" width="90%" />
                <Skeleton variant="rectangular" animation="wave" width={300} height={100} sx={{ marginTop: 2 }} />
                <Skeleton variant="circular" animation="wave" width={60} height={60} sx={{ marginTop: 2 }} />

                <Skeleton variant="text" animation={false} width="90%" sx={{ marginTop: 4 }} />
                <Skeleton variant="rectangular" animation={false} width={300} height={100} sx={{ marginTop: 2 }} />
                <Skeleton variant="circular" animation={false} width={60} height={60} sx={{ marginTop: 2 }} />
            </UI.Stack>
        </UI.Paper>
    );
}

export default Skeletons;
