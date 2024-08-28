// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import Modal from "./Modal";

// const Apitest = () => {
//   const [buildingDatas, setBuildingDatas] = useState([]);
//   const [openModal, setOpenModal] = useState(false);
//   useEffect(() => {
//     const fetchingData = async () => {
//       const res = await fetch(
//         "http://masterplan.leos.freemyip.com/API/GetUnits?DB=6000&PropertyNo=P10001"
//       );
//       const data = await res.json();
//       console.log(data);
//       setBuildingDatas(data);
//     };
//     fetchingData();
//   }, []);
//   return (
//     <div className="row">
//       <div className="col-6">
//         {buildingDatas.map((buildingData) => (
//           <>
//             <button onClick={() => setOpenModal(true)}>Modal</button>
//             <Modal open={openModal} onClose={() => setOpenModal(false)} />
//             <Link to={`/unit/${buildingData.unitNo}`}>
//               <p>{buildingData.balconyArea}</p>
//             </Link>
//             {buildingData.propertyName}
//             {buildingData.status}
//             {buildingData.balconyArea}
//             {buildingData.balconyArea}
//             {buildingData.balconyArea}
//             <br />
//           </>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Apitest;

// import React from "react";
// import FloorsNavigation from "./components/hadley/floors/FloorsNavigation";

// const Apitest = () => {
//   return (
//     <div>
//       <FloorsNavigation />
//     </div>
//   );
// };

// export default Apitest;
