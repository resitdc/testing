import React from "react";
import { Main } from "components/templates";
import { Container, Button, Flex } from "components/atoms";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Main>
      <Container default>
        <Flex className="items-center justify-between mx-auto my-6">
          <h1>List User</h1>
          <Button size="sm" onClick={() => navigate("/add")}>
            Create New User
          </Button>
        </Flex>
        <table className="table">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>John Doe</td>
              <td>johndoe@example.com</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jane Doe</td>
              <td>janedoe@example.com</td>
            </tr>
          </tbody>
        </table>
      </Container>
    </Main>
  );
};

export default Home;
