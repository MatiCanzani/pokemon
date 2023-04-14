import { useTheme, Text, Spacer, Container } from "@nextui-org/react";
import Image from "next/image";
import NextLink from "next/link";

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0px 30px",
        backgroundColor: theme?.colors.error.value,
      }}
    >
      <NextLink href="/" passHref>
        <Container display="inline-flex" alignItems="baseline">
          <Text color="white" h2>
            P
          </Text>
          <Text color="yellow" h3>
            okémon
          </Text>
        </Container>
      </NextLink>
      <Spacer css={{ flex: 1 }} />
      <NextLink href="/favorites">
        <Text color="white" h3>
          Favorities
        </Text>
      </NextLink>
    </div>
  );
};
