import {
  Group,
  Image,
  Stack,
  Title,
  Text,
  useMantineTheme,
  Space,
  ActionIcon,
  Tooltip,
} from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconIdBadge2,
  IconMail,
} from "@tabler/icons-react";
import Atropos from "atropos/react";
import avatar from "./assets/avatar.svg";

function App() {
  const theme = useMantineTheme();

  return (
    <Group
      h="100vh"
      w="100vw"
      p={80}
      align="center"
      styles={{
        backgroundColor: theme.colors.platinum,
      }}
    >
      <Stack
        w="calc(100% - 600px - 40px)"
        h="calc(100% - 80px)"
        pl={80}
        pt={40}
      >
        <Tooltip.Floating label="Work in progress !" color="yellow">
          <Title color={theme.colors.smokyBlack[0]}>
            <Text component="a" href="/projects" td="underline" inherit>
              developer
            </Text>
            <Text span inherit color={theme.colors.silver[0]}>
              .
            </Text>
          </Title>
        </Tooltip.Floating>
        <Tooltip.Floating label="Work in progress !" color="yellow">
          <Title color={theme.colors.smokyBlack[0]}>
            <Text component="a" href="/blog" td="underline" inherit>
              husband
            </Text>
            <Text span inherit color={theme.colors.silver[0]}>
              .
            </Text>
          </Title>
        </Tooltip.Floating>
        <Tooltip.Floating label="Soon !" color="green">
          <Title color={theme.colors.smokyBlack[0]}>
            <Text
              span
              variant="gradient"
              gradient={{
                from: theme.colors.platinum[0],
                to: theme.colors.smokyBlack[0],
                deg: -90,
              }}
              inherit
            >
              father
            </Text>
            <Text span inherit color={theme.colors.silver[0]}>
              .
            </Text>
          </Title>
        </Tooltip.Floating>
        <Space h={42} />
        <Text size={24}>Raka Khairil Azhar</Text>
        <Text size="sm" color={theme.colors.silver[0]} mt={-20}>
          Currently work as
        </Text>
        <Text size={24} mt={-20}>
          Technical Assistance Manager
        </Text>
        <Text size="sm" color={theme.colors.silver[0]} mt={-20}>
          @ PT. Solusi Cipta Integrasi
        </Text>
        <Space h={72} />
        <Group align="start">
          <ActionIcon
            component="a"
            href="https://www.linkedin.com/in/raka-khairil-0830b8195/"
            target="_blank"
            size="lg"
          >
            <IconBrandLinkedin color={theme.colors.smokyBlack[0]} size={32} />
          </ActionIcon>
          <ActionIcon
            component="a"
            href="https://github.com/rakakhrl"
            target="_blank"
            size="lg"
          >
            <IconBrandGithub color={theme.colors.smokyBlack[0]} size={32} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconMail color={theme.colors.smokyBlack[0]} size={32} />
          </ActionIcon>
        </Group>
      </Stack>
      <Tooltip.Floating label="Avatar created with Open Peeps by Pablo Stanley.">
        <Image
          src={avatar}
          height={600}
          width={600}
          fit="contain"
          alt="Avatar provided by Open Peeps by Pablo Stanley"
        />
      </Tooltip.Floating>
    </Group>
  );
}

export default App;
