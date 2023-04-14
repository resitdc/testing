import React from "react";
import { useSelector } from "react-redux";
import { Modal } from "components/organisms";

const ModalFamilyMembers = ({ isOpen, onClose }) => {
  const { detail } = useSelector((state) => state.residentReducer);

  return (
    <Modal
      title={`Family Member from ${detail?.name || ""}`}
      isOpen={isOpen}
      onClose={onClose}
    >
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Relationship Status</th>
          </tr>
        </thead>
        <tbody>
          {
            detail?.familyMembers &&
            Array.isArray(detail.familyMembers)
              ? (
                detail.familyMembers.length > 0
                  ? detail.familyMembers.map((familyMember, index) => (
                    <tr key={index}>
                      <td>{familyMember.name}</td>
                      <td>{familyMember.dob}</td>
                      <td>{familyMember.relations}</td>
                    </tr>
                  ))
                  : <tr className="bg-red-1 text-white-1"><td colSpan="3" className="text-center">NO DATA</td></tr>
              )
              : <tr className="bg-red-1 text-white-1"><td colSpan="3" className="text-center">DATA ERROR</td></tr>
          }
        </tbody>
      </table>
    </Modal>
  );
};

export default ModalFamilyMembers;
