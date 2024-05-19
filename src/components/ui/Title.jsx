import React, { memo } from "react";
import { Heading } from "@chakra-ui/react";

export const Title = memo(({ title, as, fontSize, textAlign = "left" }) => {
  return (
    <Heading
      mt="10"
      as={as}
      fontWeight="extrabold" // フォントの太さをboldに変更
      fontSize={ {base: "xl", md: "2xl" }}
      w=""
      bgClip="text"
      color="blue.600"
      mb="4"
      textAlign={textAlign}>
      {title}
    </Heading>
  );
});

export default Title;
