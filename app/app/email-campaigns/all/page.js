import React from "react";
import Image from "next/image";

const AllCampaigns = () => {
  return (
    <div>
      <table className="table table-pin-rows ">
        <thead>
          <tr>
            <th className="text-[16px]">Campaigns</th>
            <th className="text-[16px]">Reports</th>
          </tr>
        </thead>
        <tbody>
         
          <tr className="relative">
            <td>
              <div className="font-bold hover:text-blue-500 cursor-pointer ">
                campaign 1
              </div>
            </td>
            <td>report 1</td>
            <td>report 2</td>
            <td>report 3</td>
            <td>report 4</td>
            <td>
              <details className="dropdown dropdown-end absolute right-10 top-4">
                <summary className="cursor-pointer btn btn-xs btn-ghost">
                  <Image
                    src={"/more_icon.png"}
                    alt="more"
                    width={20}
                    height={20}
                  />
                </summary>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 dropdown-shadow bg-base-100 rounded-box w-52 mt-1"
                >
                  <li>
                    <a>Remove Account</a>
                  </li>
                  <li>
                    <a>Reconnect Account</a>
                  </li>
                </ul>
              </details>
            </td>
          </tr>
          <tr className="relative">
            <td>
              <div className="font-bold hover:text-blue-500 cursor-pointer ">
                campaign 1
              </div>
            </td>
            <td>report 1</td>
            <td>report 2</td>
            <td>report 3</td>
            <td>report 4</td>
            <td>
              <details className="dropdown dropdown-end absolute right-10 top-4">
                <summary className="cursor-pointer btn btn-xs btn-ghost">
                  <Image
                    src={"/more_icon.png"}
                    alt="more"
                    width={20}
                    height={20}
                  />
                </summary>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 dropdown-shadow bg-base-100 rounded-box w-52 mt-1"
                >
                  <li>
                    <a>Remove Account</a>
                  </li>
                  <li>
                    <a>Reconnect Account</a>
                  </li>
                </ul>
              </details>
            </td>
          </tr>
          <tr className="relative">
            <td>
              <div className="font-bold hover:text-blue-500 cursor-pointer ">
                campaign 1
              </div>
            </td>
            <td>report 1</td>
            <td>report 2</td>
            <td>report 3</td>
            <td>report 4</td>
            <td>
              <details className="dropdown dropdown-end absolute right-10 top-4">
                <summary className="cursor-pointer btn btn-xs btn-ghost">
                  <Image
                    src={"/more_icon.png"}
                    alt="more"
                    width={20}
                    height={20}
                  />
                </summary>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 dropdown-shadow bg-base-100 rounded-box w-52 mt-1"
                >
                  <li>
                    <a>Remove Account</a>
                  </li>
                  <li>
                    <a>Reconnect Account</a>
                  </li>
                </ul>
              </details>
            </td>
          </tr>
          <tr className="relative">
            <td>
              <div className="font-bold hover:text-blue-500 cursor-pointer ">
                campaign 1
              </div>
            </td>
            <td>report 1</td>
            <td>report 2</td>
            <td>report 3</td>
            <td>report 4</td>
            <td>
              <details className="dropdown dropdown-end absolute right-10 top-4">
                <summary className="cursor-pointer btn btn-xs btn-ghost">
                  <Image
                    src={"/more_icon.png"}
                    alt="more"
                    width={20}
                    height={20}
                  />
                </summary>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 dropdown-shadow bg-base-100 rounded-box w-52 mt-1"
                >
                  <li>
                    <a>Remove Account</a>
                  </li>
                  <li>
                    <a>Reconnect Account</a>
                  </li>
                </ul>
              </details>
            </td>
          </tr>
          <tr className="relative">
            <td>
              <div className="font-bold hover:text-blue-500 cursor-pointer ">
                campaign 1
              </div>
            </td>
            <td>report 1</td>
            <td>report 2</td>
            <td>report 3</td>
            <td>report 4</td>
            <td>
              <details className="dropdown dropdown-end absolute right-10 top-4">
                <summary className="cursor-pointer btn btn-xs btn-ghost">
                  <Image
                    src={"/more_icon.png"}
                    alt="more"
                    width={20}
                    height={20}
                  />
                </summary>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 dropdown-shadow bg-base-100 rounded-box w-52 mt-1"
                >
                  <li>
                    <a>Remove Account</a>
                  </li>
                  <li>
                    <a>Reconnect Account</a>
                  </li>
                </ul>
              </details>
            </td>
          </tr>
          <tr className="relative">
            <td>
              <div className="font-bold hover:text-blue-500 cursor-pointer ">
                campaign 1
              </div>
            </td>
            <td>report 1</td>
            <td>report 2</td>
            <td>report 3</td>
            <td>report 4</td>
            <td>
              <details className="dropdown dropdown-end absolute right-10 top-4">
                <summary className="cursor-pointer btn btn-xs btn-ghost">
                  <Image
                    src={"/more_icon.png"}
                    alt="more"
                    width={20}
                    height={20}
                  />
                </summary>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 dropdown-shadow bg-base-100 rounded-box w-52 mt-1"
                >
                  <li>
                    <a>Remove Account</a>
                  </li>
                  <li>
                    <a>Reconnect Account</a>
                  </li>
                </ul>
              </details>
            </td>
          </tr>
          
        </tbody>
      </table>
    </div>
  );
};

export default AllCampaigns;
