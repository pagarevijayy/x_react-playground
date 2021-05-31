import Main from "./components/Main";
import Todo from "./components/Todo";

function Basic() {
  return (
    <div className="text-center">
      <Main name="vijay pagare">
        <div className="text-xs text-gray-500">Software Developer</div>
      </Main>
      <h2 className="p-6">Todo List</h2>
      <div className="md:space-y-6">
        <Todo itemName="Learn fast" />
        <Todo itemName="Learn faster" />
        <Todo itemName="Learn fastest" />
      </div>
    </div>
  );
}

export default Basic;
