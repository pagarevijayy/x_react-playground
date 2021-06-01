const Main = (props) => {
  return (
    <main className="p-6 space-y-1.5 md:space-y-6">
      <h1 className="md:text-2xl"> Hello world!</h1>
      <p className="text-gray-600 md:text-lg">
        I am learning{" "}
        <span className="px-1.5 py-0.5 mx-0.5  bg-[#2f86bd] text-gray-50">
          react js
        </span>
      </p>
      <p className="pt-8 capitalize">Name: {props.name}</p>
      {props.children}
    </main>
  );
};

export default Main;
