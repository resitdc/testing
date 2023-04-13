import React from "react";
import { Main } from "components/templates";
import { Container, Button, Flex } from "components/atoms";
import { useNavigate } from "react-router-dom";

const AddPages = () => {
  const navigate = useNavigate();

  return (
    <Main>
      <Container default>
        <Flex className="items-center justify-between mx-auto mt-6">
          <h1>Create New User</h1>
        </Flex>
      </Container>
    </Main>
  );
};

export default AddPages;
