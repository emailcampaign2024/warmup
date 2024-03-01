"use client";
import EmptyEmailAccount from "@/app/ui/emptyEmailAccounts/page";
import { EmailAccountsList } from "@/constants";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

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
  const [emailAccounts, setEmailAccounts] = useState([]) 
  const router = useRouter()
  useEffect(()=> {
    setEmailAccounts(EmailAccountsList)
  },[])

  const handleAccountClick = () => {
    router.push('email-accounts/overview')
  }
  return (
    <div className="w-[98vw] h-full flex flex-col  rounded-2xl ">
      <dialog id="selectProvider" className="modal">
        <div className="modal-box w-96 max-w-5xl flex flex-col justify-center items-center">
          <h3 className="font-bold text-lg">Connect Google/Gmail Account</h3>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-[#0052CC]" onClick={() => document.getElementById("connectSMTP").showModal()} >SMTP Setup</button>
            </form>
          </div>
        </div>
      </dialog>
      <dialog id="connectSMTP" className="modal">
        <div className="modal-box w-11/12 max-w-3xl flex flex-col justify-center items-center">
          <div className="modal-action">
            <form method="dialog modal-backdrop">
              <h3 className="font-semibold text-lg my-3">SMTP settings</h3>
              <div className="w-full space-x-6  flex  mb-6">
              <input type="text" placeholder="From Name" className="input input-bordered w-[50%] max-w-xs" />
              <input type="text" placeholder="From Email" className="input input-bordered w-[50%] max-w-xs" />
              </div>
              <div className="w-full space-x-6 flex mb-6">
              <input type="text" placeholder="User Name" className="input input-bordered w-[50%] max-w-xs" />
              <input type="text" placeholder="App Password" className="input input-bordered w-[50%] max-w-xs" />
              </div>
              <div className="w-full flex space-x-6 mb-6">
              <input type="text" placeholder="SMTP Host" className="input input-bordered w-[50%] max-w-xs" />
              <div className="w-[50%] flex items-center justify-between ">
              <input type="text" placeholder="Port" className="input input-bordered w-[30%] max-w-xs" />
              <input type="radio" name="radio-1" className="radio" />
              <input type="radio" name="radio-1" className="radio" />
              <input type="radio" name="radio-1" className="radio" />
              </div>
              </div>
              <div className="w-full space-x-6 flex mb-6">
              <input type="text" placeholder="Message Per Day" className="input input-bordered w-[50%] max-w-xs" />
              <input type="text" placeholder="Minimum time gap" className="input input-bordered w-[50%] max-w-xs" />
              </div>
              <div>
              <h3 className="font-semibold text-lg my-3">IMAP settings</h3>
              <div className="w-full space-x-6 flex mb-6">
              <input type="text" placeholder="IMAP Host" className="input input-bordered w-[50%] max-w-xs" />
              <input type="text" placeholder="IMAP Port" className="input input-bordered w-[50%] max-w-xs" />
              </div>
              <div className="w-full space-x-6 flex mb-6">
              <input type="text" placeholder="From Name" className="input input-bordered w-[50%] max-w-xs" />
              <input type="text" placeholder="From Email" className="input input-bordered w-[50%] max-w-xs" />
              </div>
              </div>
              <div className="w-full space-x-6 flex mb-6 justify-end">
              <button className="btn btn-md  bg-blue-500 text-slate-100" onClick={console.log('saved')}>Save</button>
              <button className="btn btn-md  bg-gray-500 text-slate-100">cancel</button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
      <div className="h-[60px] w-full  flex justify-between items-center px-2">
        <h2 className="font-semibold text-xl text-slate-800">Email Accounts</h2>
        {emailAccounts.length !== 0 ? (
          <button
          className="btn btn-sm bg-blue-500 text-slate-100"
          onClick={() => document.getElementById("selectProvider").showModal()}
        >
          Add Account
        </button>
        ) : null}
      </div>
      <div>
      {emailAccounts.length !== 0 ? (
        <div className="overflow-x-auto h-[500px] px-4 border border-[#E0E0E0]  bg-white">
          <table className="table table-pin-rows ">
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
              {emailAccounts.map((account) => {
                return (
                  <tr key={account.name} className="cursor-pointer hover:bg-[#DEEBFF]" onClick={handleAccountClick}>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div>
                          <div className="font-bold">{account.name}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p>{account.email}</p>
                    </td>
                    <td>{account.dailyLimit}/200</td>
                    <td>
                      <div className={`badge  ${account.warmupEnabled ? 'bg-green-300' : 'badge-ghost'} text-slate-800`}>{account.warmupEnabled ? 'Yes' : 'No'}</div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ): <EmptyEmailAccount />}
      </div>
    </div>
  );
};

export default EmailAccounts;
