import React from "react";
import { Main } from "components/templates";
import { Container, Button, Flex } from "components/atoms";
import { useNavigate } from "react-router-dom";
import { Modal } from "components/molecules";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Main>
      <Container default>
        <Flex className="items-center justify-between mx-auto my-6">
          <h1 className="font-bold">List User</h1>
          <Button size="sm" onClick={() => navigate("/add")}>
            Create New User
          </Button>
        </Flex>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>eKTP</th>
              <th>Address</th>
              <th>Job</th>
              <th>Date of Birth</th>
              <th>Phone Number</th>
              <th>Family</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Restu Dwi Cahyo</td>
              <td>3273022404000008</td>
              <td>Pasirkaliki barat RT 04 RW 15 No 45 A</td>
              <td>Engineer</td>
              <td>24 April 2000</td>
              <td>081546416749</td>
              <td>
                <Button size="sm" onClick={() => navigate("/add")}>
                  Create New User
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </Container>
    </Main>
  );
};

export default Home;
