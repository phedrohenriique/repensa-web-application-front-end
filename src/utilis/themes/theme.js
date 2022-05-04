import { extendTheme } from "@chakra-ui/react";

// global styles overrides

// foundational styles overrides

// component styles overrides example

import { Button } from "./components/button";

export const overrides = extendTheme({
    //styles,
    // borders,
    // Other foundational style overrides go here
    components: {
        Button
        // Other components go here
    },
})
