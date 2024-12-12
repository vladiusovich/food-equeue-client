import UI, { TypoVariant } from "@ui";
import React from "react";
import typography from "@typography";

const Typography: React.FC = () => {
    const typos = Object.keys(typography) as Array<TypoVariant>;

    return (
        <UI.Paper>
            <UI.Stack direction="column" gap={2}>
                {typos.map((typo) => (
                    <UI.Typography key={typo} variant={typo}>
                        {typo}
                    </UI.Typography>
                ))}
            </UI.Stack>
        </UI.Paper>
    );
}

export default Typography;
