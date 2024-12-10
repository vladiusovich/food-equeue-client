import UI from "@ui";
import React from "react";
import typography from "@typography";

const Typography: React.FC = () => {
    const typos = Object.keys(typography) as Array<keyof typeof typography>;

    return (
        <UI.Paper>
            <UI.Stack direction="column" gap={1}>
                {
                    typos.map((typo) => {
                        const Typo = typography[typo as keyof typeof typography];
                        return <Typo key={typo}>{typo}</Typo>;
                    })
                }
            </UI.Stack>
        </UI.Paper>
    );
}

export default Typography;
