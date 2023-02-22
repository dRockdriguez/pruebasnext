import { Text, Navbar } from "@nextui-org/react";
import { useRouter } from "next/router";
import AutocompleteComponent from "./autocomplete";
import Link from "next/link";

export default function HeaderComponen() {
  const { locale, locales } = useRouter();

  const restLocales = locales.filter((l) => l !== locale);

  const l = {
    selected: locale,
    rest: restLocales,
  };

  return (
    <Navbar
      isBordered
      variant="sticky"
      css={{ margin: "0 auto", width: "60%" }}
    >
      <Navbar.Brand>
        {" "}
        <Text css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }} h3>
          <Text small>next</Text>
          xkcd
        </Text>
      </Navbar.Brand>
      <Navbar.Content hideIn="xs" variant="highlight-rounded">
        <Navbar.Link href="/">Home</Navbar.Link>
        <Navbar.Link href="/search">Search</Navbar.Link>
        <AutocompleteComponent></AutocompleteComponent>
        <Link href={`/`} locale={l.rest[0]}>
          {`${l.rest[0]}`}
        </Link>
      </Navbar.Content>
    </Navbar>
  );
}
