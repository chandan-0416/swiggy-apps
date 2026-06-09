// const Shimmer=()=>{
//     return (
//         <div className="shimmer-container">
//             <div className="shimmer-card"></div>
//             <div className="shimmer-card"></div>
//             <div className="shimmer-card"></div>
//             <div className="shimmer-card"></div>
//             <div className="shimmer-card"></div>
//             <div className="shimmer-card"></div>
//             <div className="shimmer-card"></div>
//         </div>
//     );
// };
// export default Shimmer

const Shimmer = () => {
  return (
    <div className="w-6/12 mx-auto">
      {Array(6)
        .fill("")
        .map((_, i) => (
          <div
            key={i}
            className="h-20 bg-gray-200 my-4 rounded"
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;
