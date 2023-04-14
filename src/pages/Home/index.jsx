import React, { useState } from "react";
import { Main } from "components/templates";
import { Container, Button, Flex } from "components/atoms";
import { useNavigate } from "react-router-dom";
import { ModalFamilyMembers } from "components/organisms";
import { useSelector, useDispatch } from "react-redux";
import { seeResidentDetail } from "plugins/redux/actions/sampleAction";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { residents } = useSelector((state) => state.residentReducer);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = (index) => {
    if (index !== null) {
      dispatch(seeResidentDetail(residents[index]));
      setIsModalOpen(true);
    }
  };

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
            {
              Array.isArray(residents)
                ? (
                  residents.length > 0
                    ? residents.map(({ name, eKtp, address, job, dob, phones, familyMembers }, index) => (
                      <tr key={index}>
                        <td>{name}</td>
                        <td>{eKtp}</td>
                        <td>{address}</td>
                        <td>{job}</td>
                        <td>{dob}</td>
                        <td>
                          {phones && phones.map((a) => a.number).join(", ")}
                        </td>
                        <td>
                          <Button size="sm" onClick={() => showModal(index)}>
                            Show ({familyMembers?.length ? familyMembers.length : 0})
                          </Button>
                        </td>
                      </tr>
                    ))
                    : <tr className="bg-red-1 text-white-1"><td colSpan="7" className="text-center">NO DATA</td></tr>
                )
                : <tr className="bg-red-1 text-white-1"><td colSpan="7" className="text-center">DATA ERROR</td></tr>
            }
          </tbody>
        </table>
        <ModalFamilyMembers
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </Container>
    </Main>
  );
};

export default Home;
