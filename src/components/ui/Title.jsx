import React, { memo } from "react";
import { Heading } from "@chakra-ui/react";

export const Title = memo(({ title, as, fontSize }) => {
  return (
    <Heading
      mt="10"
      as={as}
      fontSize={ {base: "xl", md: "2xl" }}
      w="">
      {title}
    </Heading>
  );
});

export default Title;
