const Modal = (props) => {
  return (
    <div className="rounded-lg shadow-md bg-white w-3/4 max-w-md p-6 text-center z-20 fixed top-1/4 left-1/2 transform -translate-x-1/2">
      <p className="p-4">Are you sure?</p>
      <button
        className="bg-green-500 px-3 mt-2 py-1.5 text-gray-50 rounded-lg"
        onClick={props.closeModal}
      >
        Yeaah bwoy!
      </button>
    </div>
  );
};

export default Modal;
