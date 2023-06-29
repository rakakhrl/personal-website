import React from "react";
import {
  useMantineTheme,
  Kbd,
  Stack,
  Text,
  Container,
  Title,
  Button,
  UnstyledButton,
  Group,
  Card,
  Space,
  Badge,
} from "@mantine/core";
import { useHover, useMediaQuery } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";

function Blog() {
  const theme = useMantineTheme();
  const phone = useMediaQuery("(min-width: 320px) and (max-width: 480px)");
  const tablet = useMediaQuery("(min-width: 481px) and (max-width: 1024px)");
  const laptop = useMediaQuery("(min-width: 1025px) and (max-width: 1280px)");
  const desktop = useMediaQuery("(min-width:1281px)");
  const navigate = useNavigate();
  const { hovered, ref } = useHover();

  return (
    <Container
      h="100vh"
      w="100vw"
      px={40}
      py={80}
      style={{ boxSizing: "border-box" }}
    >
      <Stack
        w="100%"
        h="100%"
        align="start"
        styles={{
          backgroundColor: theme.colors.platinum,
        }}
      >
        <UnstyledButton onClick={() => navigate("/")}>
          <Kbd>&lt;- go back</Kbd>
        </UnstyledButton>
        <Space h="xl" />
        <Title color={theme.colors.smokyBlack[0]}>
          <Text span inherit>
            blog posts
          </Text>
          <Text span inherit color={theme.colors.silver[0]} mr="md">
            .
          </Text>
        </Title>
        <Text size="sm" color={theme.colors.silver[0]}>
          blog posts about <Kbd>tech</Kbd>, <Kbd>personal life</Kbd>,{" "}
          <Kbd>hobby</Kbd>, and
          <Kbd>random things</Kbd> I'm interested in.
          <Space h={6} />
          posts are written in markdown syntax and stored in personal{" "}
          <Text
            component="a"
            inherit
            color={theme.colors.smokyBlack[0]}
            underline
            href="https://firebase.google.com/"
          >
            firebase
          </Text>{" "}
          project.
        </Text>
        <Space h="xl" />
        <Text size="sm" color={theme.colors.silver[0]}>
          latest posts
        </Text>
        <Group w="100%" grow>
          <Card withBorder>
            <Card.Section
              py="xs"
              px="md"
              component="a"
              href="/blog/1"
              td="none"
            >
              <Title color={theme.colors.smokyBlack[0]} order={4}>
                <Text span inherit>
                  Figma, microsoft word killer (?)
                </Text>
              </Title>
              <Space h="xs" />
              <Group spacing={8}>
                <Badge variant="filled" color="blue" size="sm">
                  technology
                </Badge>
                <Badge variant="filled" color="yellow" size="sm">
                  design
                </Badge>
              </Group>
            </Card.Section>
            <Card.Section withBorder py="xs" px="md">
              <Group position="apart">
                <Text component="span" color={theme.colors.silver[0]} size="sm">
                  03 - january - 2023
                </Text>
                <Text
                  component="a"
                  href="#"
                  color={theme.colors.silver[0]}
                  size="sm"
                  td="underline"
                >
                  read this post
                </Text>
              </Group>
            </Card.Section>
          </Card>
          <Card withBorder>
            <Card.Section py="xs" px="md" component="a" href="#" td="none">
              <Title color={theme.colors.smokyBlack[0]} order={4}>
                <Text span inherit>
                  do we need useEffect() ?
                </Text>
              </Title>
              <Space h="xs" />
              <Group spacing={8}>
                <Badge variant="filled" color="blue" size="sm">
                  technology
                </Badge>
              </Group>
            </Card.Section>
            <Card.Section withBorder py="xs" px="md">
              <Group position="apart">
                <Text component="span" color={theme.colors.silver[0]} size="sm">
                  03 - january - 2023
                </Text>
                <Text
                  component="a"
                  href="#"
                  color={theme.colors.silver[0]}
                  size="sm"
                  td="underline"
                >
                  read this post
                </Text>
              </Group>
            </Card.Section>
          </Card>
        </Group>
        <Group w="100%" grow>
          <Card withBorder>
            <Card.Section py="xs" px="md" component="a" href="#" td="none">
              <Title color={theme.colors.smokyBlack[0]} order={4}>
                <Text span inherit>
                  marvel snap sacrifice deck
                </Text>
              </Title>
              <Space h="xs" />
              <Group spacing={8}>
                <Badge variant="filled" color="grape" size="sm">
                  hobby
                </Badge>
              </Group>
            </Card.Section>
            <Card.Section withBorder py="xs" px="md">
              <Group position="apart">
                <Text component="span" color={theme.colors.silver[0]} size="sm">
                  03 - january - 2023
                </Text>
                <Text
                  component="a"
                  href="#"
                  color={theme.colors.silver[0]}
                  size="sm"
                  td="underline"
                >
                  read this post
                </Text>
              </Group>
            </Card.Section>
          </Card>
          <Card withBorder>
            <Card.Section py="xs" px="md" component="a" href="#" td="none">
              <Title color={theme.colors.smokyBlack[0]} order={4}>
                <Text span inherit>
                  the best food in town
                </Text>
              </Title>
              <Space h="xs" />
              <Group spacing={8}>
                <Badge variant="filled" color="dark" size="sm">
                  personal life
                </Badge>
                <Badge variant="filled" color="grape" size="sm">
                  hobby
                </Badge>
              </Group>
            </Card.Section>
            <Card.Section withBorder py="xs" px="md">
              <Group position="apart">
                <Text component="span" color={theme.colors.silver[0]} size="sm">
                  03 - january - 2023
                </Text>
                <Text
                  component="a"
                  href="#"
                  color={theme.colors.silver[0]}
                  size="sm"
                  td="underline"
                >
                  read this post
                </Text>
              </Group>
            </Card.Section>
          </Card>
        </Group>
        <Space h="lg" />
        <Title
          color={
            hovered
              ? theme.fn.lighten(theme.colors.smokyBlack[0], 0.6)
              : theme.colors.smokyBlack[0]
          }
          ref={ref}
        >
          <Text
            component="button"
            size="sm"
            onClick={() => alert("something happen")}
            td="underline"
            style={{
              backgroundColor: "transparent",
              border: "none",
              padding: 0,
            }}
          >
            see more posts
          </Text>
        </Title>
      </Stack>
    </Container>
  );
}

export default Blog;
