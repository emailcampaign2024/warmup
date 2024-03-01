import React from "react";

const EmptyEmailAccount = () => {
  return (
    <div className="flex flex-col space-y-10 h-full py-6 items-center ">
    <h2 className="text-xl text-slate-800 card-title p-6">No Email Accounts Listed !</h2>
      <div className="card w-96 bg-base-100 shadow-md lg:h-[300px]">
        <figure className="px-10">
          <img
            src="https://storage.googleapis.com/distributedsourceblog/1/Add-your-email-address-blog-poster-featured-image.png"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center space-y-3">
          <h2 className="card-title text-slate-800">Add Email Account</h2>
          <div className="card-actions ">
            <button className="btn bg-blue-500 text-slate-100">SMTP Setup</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyEmailAccount;
