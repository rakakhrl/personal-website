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
  Container,
  Box,
  Center,
  TextInput,
  Button,
  Textarea,
} from "@mantine/core";
import { useHover, useMediaQuery } from "@mantine/hooks";
import { openModal } from "@mantine/modals";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import avatar from "./assets/avatar.svg";
import icon from "./assets/icon.svg";

function App() {
  const theme = useMantineTheme();
  const phone = useMediaQuery("(min-width: 320px) and (max-width: 480px)");
  const tablet = useMediaQuery("(min-width: 481px) and (max-width: 1024px)");
  const laptop = useMediaQuery("(min-width: 1025px) and (max-width: 1280px)");
  const desktop = useMediaQuery("(min-width:1281px)");
  const { hovered: hoveredDev, ref: refDev } = useHover();
  const { hovered: hoveredHus, ref: refHus } = useHover();

  const onContactOpen = () => {
    openModal({
      title: "Contact me 👋",
      centered: true,
      closeOnClickOutside: false,
      size: "lg",
      children: (
        <form>
          <Group position="apart" grow>
            <TextInput label="Your name" data-autofocus />
            <TextInput label="Your email" />
          </Group>
          <Textarea label="Your message" minRows={4} mt="md" />
          <Group position="right">
            <Button
              uppercase
              onClick={() => {}}
              mt="md"
              type="submit"
              style={{
                backgroundColor: theme.colors.smokyBlack[0],
                outlineColor: theme.colors.smokyBlack[0],
              }}
            >
              Send
            </Button>
          </Group>
        </form>
      ),
    });
  };

  if (phone || tablet) {
    return (
      <Container h="100vh" w="100vw" p={40} style={{ boxSizing: "border-box" }}>
        <Stack w="100%" h="100%">
          <Image
            src={icon}
            height={30}
            width={30}
            fit="contain"
            style={{ boxShadow: `5px 5px ${theme.colors.smokyBlack[0]}` }}
          />
          <Space h={24} />
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
          <Text size={tablet ? 24 : 18}>Raka Khairil Azhar</Text>
          <Text
            size={tablet ? "md" : "xs"}
            color={theme.colors.silver[0]}
            mt={-20}
          >
            Currently working as
          </Text>
          <Text size={tablet ? 24 : 18} mt={-20}>
            Technical Assistance Manager
          </Text>
          <Text
            size={tablet ? "md" : "xs"}
            color={theme.colors.silver[0]}
            mt={-20}
          >
            @ PT. Solusi Cipta Integrasi
          </Text>
          <Space h={42} />
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
          </Group>
          <Space h={24} />
          <Box
            sx={(theme) => ({
              backgroundColor: theme.colors.smokyBlack[0],
              width: "100%",
              height: "100%",
              padding: 20,
              boxSizing: "border-box",
            })}
          >
            <Center h="100%" w="100%">
              <Text size="sm" color={theme.colors.silver[0]} align="center">
                I don't know what to put down here so please enjoy this black
                box.
              </Text>
            </Center>
          </Box>
        </Stack>
      </Container>
    );
  }

  return (
    <Group
      h="100vh"
      w="100vw"
      px={desktop ? 160 : 80}
      py={80}
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
        align="start"
      >
        <Tooltip.Floating label="Work in progress !" color="yellow">
          <Title
            color={
              hoveredDev
                ? theme.fn.lighten(theme.colors.smokyBlack[0], 0.6)
                : theme.colors.smokyBlack[0]
            }
            ref={refDev}
          >
            <Text component="a" href="/projects" td="underline" inherit>
              developer
            </Text>
            <Text span inherit color={theme.colors.silver[0]}>
              .
            </Text>
          </Title>
        </Tooltip.Floating>
        <Tooltip.Floating label="Work in progress !" color="yellow">
          <Title
            color={
              hoveredHus
                ? theme.fn.lighten(theme.colors.smokyBlack[0], 0.6)
                : theme.colors.smokyBlack[0]
            }
            ref={refHus}
          >
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
          Currently working as
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
          <ActionIcon size="lg" onClick={onContactOpen}>
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
          onClick={() => window.open("https://www.openpeeps.com/", "_blank")}
        />
      </Tooltip.Floating>
    </Group>
  );
}

export default App;
