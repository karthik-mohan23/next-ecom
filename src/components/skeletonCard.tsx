function SkeletonCard() {
  return (
    <div className="flex flex-col rounded overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] h-full ">
      <div className=" w-full h-48 animate-pulse bg-gray-300"></div>
      <div className="px-6 py-2 flex-grow flex flex-col gap-4 ">
        <div className="flex items-center gap-2">
          <div className=" h-4    px-2 py-1  mr-2 animate-pulse bg-gray-300"></div>
          <div className=" h-4 rounded-full px-3 py-1  mr-2 animate-pulse bg-gray-300"></div>
        </div>
        <div className=" h-4 px-3 py-1  mr-2 animate-pulse bg-gray-300"></div>
      </div>
      <div className="mt-auto h-4 animate-pulse bg-gray-300"></div>
    </div>
  );
}
export default SkeletonCard;
