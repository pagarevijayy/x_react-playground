import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

const Todo = (props) => {
  const [isModalOpen, setModalIsOpen] = useState(false);

  const doneHandler = () => {
    console.log(`Completed: ${props.itemName}`);
    setModalIsOpen(true);
  };

  const closeModalHandler = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <div className="container mx-auto my-2 p-3 max-w-xs border-gray-400 border-solid border rounded-lg flex justify-between items-center">
        <h3> {props.itemName} </h3>
        <button
          className="bg-indigo-500 px-3 py-1.5 text-sm rounded-lg text-gray-50 focus:outline-none focus:ring focus:ring-offset-1"
          onClick={doneHandler}
        >
          {" "}
          Done{" "}
        </button>
      </div>
      {isModalOpen && <Modal closeModal={closeModalHandler} />}
      {isModalOpen && <Backdrop closeModal={closeModalHandler} />}
    </div>
  );
};

export default Todo;
