import {
  Container,
  Kbd,
  Space,
  Title,
  Text,
  UnstyledButton,
  useMantineTheme,
  Stack,
  Code,
} from "@mantine/core";
import Markdown from "markdown-to-jsx";
import { useNavigate, useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const theme = useMantineTheme();

  const content = "# Testing ## H2 _italic_ <Code>let testing = 10;</Code>";

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
        <UnstyledButton onClick={() => navigate("/blog")}>
          <Kbd>&lt;- go back</Kbd>
        </UnstyledButton>
        <Space h="xl" />
        <Title color={theme.colors.smokyBlack[0]} order={1}>
          <Text span inherit>
            Figma, microsoft word killer (?)
          </Text>
          <Text span inherit color={theme.colors.silver[0]} mr="md">
            .
          </Text>
        </Title>
        <Markdown
          options={{
            overrides: {
              Code: {
                component: Code,
                props: {
                  block: true,
                  language: "javascript",
                  color: "white",
                },
              },
            },
          }}
        >
          {content}
        </Markdown>
      </Stack>
    </Container>
  );
}

export default BlogPost;
