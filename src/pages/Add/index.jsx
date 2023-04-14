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
import { useDispatch } from "react-redux";
import { addResident } from "plugins/redux/actions/sampleAction";
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
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Can not be empty"),
    address: Yup.string()
      .required("Can not be empty"),
    eKtp: Yup.number()
      .typeError("Value must be a number")
      .test("13", "eKTP must have at least 13 digits", (value) => {
        if (typeof value !== "number") return false;
        return value.toString().length >= 13;
      }),
    job: Yup.string()
      .required("Can not be empty"),
    dob: Yup.date()
      .min("1800-01-01", "Date too old")
      .max(new Date(), "The date cannot be later than today")
      .required("Can not be empty"),
  });

  const onSubmit = async (values) => {
    dispatch(addResident(values));
    navigate("/");
    alert("ADD DATA SUCCESS");
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
          {({ errors, touched, values, handleSubmit }) => (
            <Form>
              <Flex className="items-center justify-between mx-auto mt-6">
                <h1 className="font-bold">Create New User</h1>
              </Flex>
              <Flex className="mt-9">
                <div className="w-2/6 mr-10">
                  <FormGroup label="Name" errorMessage={errors.name}>
                    <Field
                      as={FormInput}
                      type="text"
                      name="name"
                    />
                  </FormGroup>
                  <FormGroup label="Address" errorMessage={errors.address}>
                    <Field
                      as={FormTextarea}
                      name="address"
                      rows="5"
                    />
                  </FormGroup>
                  <FormGroup label="eKTP" errorMessage={errors.eKtp}>
                    <Field
                      as={FormInput}
                      type="text"
                      name="eKtp"
                    />
                  </FormGroup>
                  <FormGroup label="Job" errorMessage={errors.job}>
                    <Field
                      as={FormInput}
                      type="text"
                      name="job"
                    />
                  </FormGroup>
                  <FormGroup label="Date of Birth" errorMessage={errors.dob}>
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
