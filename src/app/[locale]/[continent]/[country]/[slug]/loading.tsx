export default function PostLoading() {
  return (
    <div className="flex flex-col items-center w-full animate-pulse py-12">
      <div className="h-10 w-64 mt-4 rounded-full bg-gray-300" />

      <div className="my-8 lg:my-16 h-12 w-3/5 bg-gray-300" />

      {/* Image Skeleton */}
      <div className="my-12 lg:my-24 w-full h-96 bg-gray-300" />

      <div className="w-full lg:w-[720px] flex flex-col px-6 lg:px-0">
        {new Array(8).fill(null).map((_, i) => (
          <div key={i} className="mb-4 h-4 w-full bg-gray-300" />
        ))}

        <br />
        <br />

        {new Array(8).fill(null).map((_, i) => (
          <div key={i} className="mb-4 h-4 w-full  bg-gray-300" />
        ))}
      </div>
    </div>
  );
}
