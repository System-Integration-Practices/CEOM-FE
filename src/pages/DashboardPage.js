import Gap from "components/common/Gap";
import Heading from "components/common/Heading";
import { Dropdown } from "components/dropdown";
import Pagination from "components/pagination/Pagination";
import TableAutoGenerate from "components/tables/TableAutoGenerate";
import useAxiosPrivate from "hooks/useAxiosPrivate";
import DashboardSearch from "modules/dashboard/DashboardSearch";
import React, { Fragment, useState } from "react";
import { useEffect } from "react";
import { formatValue } from "react-currency-input-field";
import { v4 } from "uuid";

const formatCurrency = (money) => {
  return formatValue({
    value: "" + money,
    groupSeparator: ",",
    decimalSeparator: ".",
    suffix: "₫",
  });
};

const listItemsPerPage = [5, 10, 15, 20];

const DashboardPage = () => {
  const axiosPrivate = useAxiosPrivate();
  const [listPersonalOverview, setListPersonalOverview] = useState([]);
  const [pagination, setPagination] = useState({
    totalPages: 0,
    currentPage: 0,
    itemsPerPage: 10,
    query: "",
  });

  const [search, setSearch] = useState({
    query: "",
  });

  const handleSelectDropdownOption = (value) => {
    setPagination((item) => {
      return { ...item, itemsPerPage: value, currentPage: 0 };
    });
  };
  useEffect(() => {
    async function fetchCampaigns() {
      console.log(
        `/personal_integration?fullName=${search.query}&benefitPlanId=&page=${pagination.currentPage}&limit=${pagination.itemsPerPage}`
      );
      try {
        const response = await axiosPrivate.get(
          `/personal_integration?fullName=${search.query}&benefitPlanId=&page=${pagination.currentPage}&limit=${pagination.itemsPerPage}`
        );
        setPagination((item) => {
          return {
            totalPages: response.data.totalPages,
            currentPage: response.data.currentPage,
            itemsPerPage: item.itemsPerPage,
            query: item.query,
          };
        });
        setListPersonalOverview(
          response.data.personals.map((item) => {
            return {
              personalId: item.personalId,
              fullName: [
                item.firstName,
                item.middleInitial,
                item.lastName,
              ].join(" "),
              gender: item.gender,
              payAmount: item.payAmount,
              planName: item.planName,
            };
          })
        );
      } catch (error) {
        console.log(error);
      }
    }
    fetchCampaigns();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination.currentPage, search.query, pagination.itemsPerPage]);
  return (
    <Fragment>
      <div className="flex items-center justify-between mb-2">
        <Heading number={4} className="mb-0">
          Your personals
        </Heading>
        <div className=" max-w-[458px] w-full">
          <DashboardSearch
            displayButton={false}
            setPagination={setSearch}
          ></DashboardSearch>
        </div>
      </div>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <span>Show</span>
          <Dropdown>
            <Dropdown.Select
              placeholder={pagination.itemsPerPage}
              className="gap-2"
            ></Dropdown.Select>
            <Dropdown.List>
              {listItemsPerPage.map((value) => (
                <Dropdown.Option
                  key={value}
                  onClick={() => handleSelectDropdownOption(value)}
                >
                  <span>{value}</span>
                </Dropdown.Option>
              ))}
            </Dropdown.List>
          </Dropdown>
          <span>entries</span>
        </div>
      </div>
      {/* <CampaignFeature></CampaignFeature> */}
      {listPersonalOverview && listPersonalOverview.length > 0 ? (
        // <>
        //   <table className=" w-full table-auto border-separate border-spacing-y-5 rounded-tl-xl rounded-tr-xl">
        //     <thead className=" w-full bg-[#ECEFF1]">
        //       <tr>
        //         {listPersonalOverview &&
        //           listPersonalOverview.length > 0 &&
        //           Object.keys(listPersonalOverview[0]).map((label, index) => {
        //             if (index === 0)
        //               return (
        //                 <th
        //                   key={index}
        //                   className="rounded-l-xl py-3 px-2 text-left text-base font-medium text-[#1B2432]"
        //                 >
        //                   STT
        //                 </th>
        //               );
        //             if (
        //               index ===
        //               Object.keys(listPersonalOverview[0]).length - 1
        //             )
        //               return (
        //                 <th className="rounded-r-xl text-left text-base font-medium text-[#1B2432]">
        //                   {label
        //                     .split(/(?=[A-Z])/)
        //                     .map(
        //                       (word) =>
        //                         word.charAt(0).toUpperCase() + word.slice(1)
        //                     )
        //                     .join(" ")}
        //                 </th>
        //               );
        //             return (
        //               <th
        //                 key={index}
        //                 className=" py-3 px-2 text-left text-base font-medium text-[#1B2432]"
        //               >
        //                 {label
        //                   .split(/(?=[A-Z])/)
        //                   .map(
        //                     (word) =>
        //                       word.charAt(0).toUpperCase() + word.slice(1)
        //                   )
        //                   .join(" ")}
        //               </th>
        //             );
        //           })}
        //       </tr>
        //     </thead>
        //     <tbody className="w-full">
        //       {listPersonalOverview.map((user, index) => {
        //         return (
        //           <tr key={index} className=" bg-[#FFF]">
        //             <td className="py-3 pl-3 rounded-l-xl">
        //               <span>{pagination.currentPage * 10 + index + 1}</span>
        //             </td>
        //             <td className="py-3 pl-3 rounded-l-xl">
        //               <span>{user.fullName}</span>
        //             </td>

        //             {/* <td className="py-3 pl-3 rounded-l-xl">
        //           <span>{user.lastName}</span>
        //         </td>

        //         <td className="py-3 pl-3 rounded-l-xl">
        //           <span>{user.middleInitial}</span>
        //         </td> */}

        //             <td className="py-3 pl-3 rounded-l-xl">
        //               <span>{user.gender ? "Male" : "Female"}</span>
        //             </td>
        //             <td className="py-3 pl-3 rounded-l-xl">
        //               <span>{formatCurrency(user.payAmount)}</span>
        //             </td>

        //             <td className="py-3 pl-3 rounded-l-xl">
        //               <span>{user.planName}</span>
        //             </td>
        //             {/* <td className="py-3 pl-3 rounded-l-xl">
        //           <span>{user.name}</span>
        //         </td>
        //         <td className="py-3 pl-3">
        //           <span>{user.id}</span>
        //         </td>
        //         <td className="py-3 pl-3">
        //           <span> {user.email}</span>
        //         </td>
        //         <td className="py-3 pl-3">
        //           <span>{user.phone}</span>
        //         </td>
        //         <td className="py-3 pl-3">
        //           <span>{user.address}</span>
        //         </td>
        //         <td className="py-3 pl-3">
        //           <span>{user.roles[0].roleValue}</span>
        //         </td>
        //         <td className="py-3 pl-3 ml-auto rounded-r-xl">
        //           <div className="flex gap-2">
        //             <button
        //               onClick={() => {
        //                 // setUser(() => user);
        //                 // handleEdit();
        //               }}
        //               className="rounded-xl bg-[#23A9F9] px-3 py-2 text-white font-semibold"
        //             >
        //               Sửa
        //             </button>
        //             <button
        //               onClick={() => {
        //                 // setUser(() => user);
        //                 // setModalRemove(true);
        //               }}
        //               className="rounded-xl bg-[#FFA900] px-3 py-2 text-white font-semibold"
        //             >
        //               Xóa
        //             </button>
        //           </div>
        //         </td> */}
        //           </tr>
        //         );
        //       })}
        //     </tbody>
        //   </table>
        //   {pagination ? (
        //     <Pagination
        //       itemsPerPage={pagination.itemPerPage}
        //       setCurrentPage={setPagination}
        //       totalPages={pagination.totalPages}
        //     ></Pagination>
        //   ) : (
        //     <></>
        //   )}
        // </>
        <TableAutoGenerate
          listData={listPersonalOverview}
          pagination={pagination}
          setPagination={setPagination}
        ></TableAutoGenerate>
      ) : (
        <>Not found</>
      )}
      {/* <Gap></Gap>
      <Heading>Popular campaign</Heading>
      <CampaignGrid>
        {Array(4)
          .fill(0)
          .map((item) => (
            <CampaignItem key={v4()}></CampaignItem>
          ))}
      </CampaignGrid>
      <Gap></Gap>
      <Heading>Recent campaign</Heading>
      <CampaignGrid>
        {Array(4)
          .fill(0)
          .map((item) => (
            <CampaignItem key={v4()}></CampaignItem>
          ))}
      </CampaignGrid>
      <Gap></Gap>
      <Heading>Table</Heading>
      <CampaignGrid>
        {Array(4)
          .fill(0)
          .map((item) => (
            <CampaignItem key={v4()}></CampaignItem>
          ))}
      </CampaignGrid> */}
    </Fragment>
  );
};

export default DashboardPage;
