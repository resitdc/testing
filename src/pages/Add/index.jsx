import React, { useState } from "react";
import { Field, Form, Formik, FieldArray } from "formik";
import * as Yup from "yup";
import { Main } from "components/templates";
import {
  Container,
  Button,
  Flex,
  FormInput,
  FormSelect,
  FormGroup,
  FormTextarea
} from "components/atoms";
import { useNavigate } from "react-router-dom";
const relationshipOptions = [
  {
    value: "brother",
    text: "Brother",
  },
  {
    value: "sister",
    text: "Sister",
  },
  {
    value: "parent",
    text: "Parent",
  },
  {
    value: "child",
    text: "Child",
  },
];

const AddPages = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const props = {
    value: "value",
    name: "test-name",
    id: "test-id",
    list: [
      { value: "value1", title: "title1" },
      { value: "value2", title: "title2" },
      { value: "value3", title: "title3" },
    ],
    title: "title",
    selected: "value1",
    defaultChoose: "choose an option",
    readonly: false,
    disabled: false,
    dataTestid: "test",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Tidak boleh kosong"),
    address: Yup.string()
      .required("Tidak boleh kosong"),
    eKtp: Yup.string()
      .required("Tidak boleh kosong"),
    job: Yup.string()
      .required("Tidak boleh kosong"),
    dob: Yup.string()
      .required("Tidak boleh kosong"),
  });

  const onSubmit = async (values) => {
    console.log("VALUES ====>", values);
  };

  return (
    <Main>
      <Container default className="pb-10">
        <Formik
          initialValues={{
            name: "",
            address: "",
            eKtp: "",
            job: "",
            dob: "",
            phones: [""],
            familyMembers: [],
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched, setFieldValue, setFieldTouched, values, handleSubmit }) => (
            <Form>
              <Flex className="items-center justify-between mx-auto mt-6">
                <h1 className="font-bold">Create New User</h1>
              </Flex>
              <Flex className="mt-9">
                <div className="w-2/6 mr-10">
                  <FormGroup label="Name">
                    <Field
                      as={FormInput}
                      type="text"
                      name="name"
                    />
                  </FormGroup>
                  <FormGroup label="Address">
                    <Field
                      as={FormTextarea}
                      name="address"
                      rows="5"
                    />
                  </FormGroup>
                  <FormGroup label="eKTP">
                    <Field
                      as={FormInput}
                      type="text"
                      name="eKtp"
                    />
                  </FormGroup>
                  <FormGroup label="Job">
                    <Field
                      as={FormInput}
                      type="text"
                      name="job"
                    />
                  </FormGroup>
                  <FormGroup label="Date of Birth">
                    <Field
                      as={FormInput}
                      type="date"
                      name="dob"
                    />
                  </FormGroup>
                </div>
                <div className="w-2/6">
                  <FieldArray name="phones">
                    {({ remove, push }) => (
                      <FormGroup label="Phone">
                        <div className="w-full">
                          {values.phones.map((phone, index) => (
                            <Flex className="items-center mb-2" key={index}>
                              <div className="flex-1">
                                <Field
                                  as={FormInput}
                                  type="text"
                                  name={`phones.${index}.number`}
                                />
                              </div>
                              {
                                index > 0 &&
                                <div className="flex-shrink-0 pl-2">
                                  <Button
                                    size="md"
                                    color="red"
                                    type="button"
                                    onClick={() => remove(index)}
                                  >
                                    X
                                  </Button>
                                </div>
                              }
                            </Flex>
                          ))}
                        </div>
                        <div className="mt-1">
                          <Button size="sm" type="button" onClick={() => push({ number: "" })}>
                            Add Phone
                          </Button>
                        </div>
                      </FormGroup>
                    )}
                  </FieldArray>
                </div>
              </Flex>
              <Flex className="items-center justify-between mx-auto mt-8">
                <h1 className="font-bold">
                  Family Member ({values.familyMembers?.length ? values.familyMembers.length : 0})
                </h1>
              </Flex>
              <Flex className="items-center justify-between mx-auto mt-2">
                <FieldArray name="familyMembers">
                  {({ push, remove }) => (
                    <div className="w-2/3">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Date of Birth</th>
                            <th>Relationship Status</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {values.familyMembers.map((member, index) => (
                            <tr key={index}>
                              <td>
                                <Field
                                  as={FormInput}
                                  type="text"
                                  name={`familyMembers.${index}.name`}
                                />
                              </td>
                              <td>
                                <Field
                                  as={FormInput}
                                  type="date"
                                  name={`familyMembers.${index}.dob`}
                                />
                              </td>
                              <td>
                                <Field
                                  as={FormSelect}
                                  name={`familyMembers.${index}.relations`}
                                  list={relationshipOptions}
                                  value="value"
                                  title="text"
                                  defaultChoose="Choose Relation"
                                />
                              </td>
                              <td>
                                <Button
                                  type="button"
                                  color="red"
                                  onClick={() => remove(index)}
                                >
                                  X
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <div className="mt-3">
                        <Button type="button" onClick={() => push({ name: "", dob: "", relations: "" })}>
                          Add Family Member
                        </Button>
                      </div>
                    </div>
                  )}
                </FieldArray>
              </Flex>
              <div className="mt-8">
                <Button type="button" onClick={handleSubmit}>Submit</Button>
              </div>
            </Form>
          )}
        </Formik>
      </Container>
    </Main>
  );
};

export default AddPages;
