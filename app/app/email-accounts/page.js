"use client";
import AddAccountModal from "@/app/ui/modals/addAccount/page";
import React, { useState } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  const modalStyle = {
    display: isOpen ? "block" : "none",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    padding: "20px",
    zIndex: 1000,
  };

  return (
    <div style={modalStyle}>
      {children}
      <button onClick={onClose}>Close Modal</button>
    </div>
  );
};

const EmailAccounts = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <div className="w-[95.2vw] h-full flex flex-col">
      <dialog id="selectProvider" className="modal">
        <div className="modal-box w-96 max-w-5xl flex flex-col justify-center items-center">
          <h3 className="font-bold text-lg">Connect Google/Gmail Account</h3>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-[#0052CC]" >SMTP Setup</button>
            </form>
          </div>
        </div>
      </dialog>
      <dialog id="connectSMTP" className="modal">
        <div className="modal-box w-96 max-w-5xl flex flex-col justify-center items-center">
          <h3 className="font-bold text-lg">connecting smtp</h3>
          <div className="modal-action">
            <form method="dialog modal-backdrop">
              <button className="btn btn-[#0052CC]">SMTP Setup</button>
            </form>
          </div>
        </div>
      </dialog>
      <div className="h-[60px] w-full  border-b border-[#E0E0E0] flex justify-between items-center px-6">
        <h2 className="font-semibold text-xl text-slate-800">Email Accounts</h2>
        <button
          className="btn btn-sm bg-[#0052CC] text-slate-100"
          onClick={() => document.getElementById("selectProvider").showModal()}
        >
          Add Account
        </button>
      </div>
      <div>
        <div className="overflow-x-auto h-[550px]">
          <table className="table table-pin-rows">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Name</th>
                <th>Email</th>
                <th>Daily limit</th>
                <th>Warmup enabled</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {Array.from({ length: 10 }, (index) => {
                return (
                  <tr key={index} className="cursor-pointer hover:bg-[#DEEBFF]">
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div>
                          <div className="font-bold">Gokul</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p>gokulsidharth02@gmail.com</p>
                    </td>
                    <td>0/200</td>
                    <td>
                      {/* <div className="badge bg-green-500 text-slate-800">Yes</div> */}
                      <div className="badge badge-ghost text-slate-800">No</div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmailAccounts;
