import { useRef } from "react";

const NewMeetupForm = (props) => {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const submitFormDataObject = {
      title: titleInputRef.current.value,
      image: imageInputRef.current.value,
      address: addressInputRef.current.value,
      description: descriptionInputRef.current.value,
    };

    props.onCreateMeetup(submitFormDataObject);
  };

  return (
    <div className="text-left">
      <div className="mt-8 max-w-md border border-gray-300 p-6 rounded-lg shadow">
        <form className="grid grid-cols-1 gap-6" onSubmit={formSubmitHandler}>
          <label className="block">
            <span className="text-gray-800">Meetup Title</span>
            <input
              type="text"
              className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm 
            focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="ReactConf 2021"
              required
              ref={titleInputRef}
            />
          </label>
          <label className="block">
            <span className="text-gray-800">Cover Image URL</span>
            <input
              className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="https://image.com/here.png"
              required
              ref={imageInputRef}
            />
          </label>
          <label className="block">
            <span className="text-gray-800">Where is your event?</span>
            <input
              type="text"
              className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="Some Arena, Mumbai 63"
              required
              ref={addressInputRef}
            />
          </label>
          <label className="block">
            <span className="text-gray-800">Description</span>
            <textarea
              className="form-textarea mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              ref={descriptionInputRef}
              rows="3"
              required
            ></textarea>
          </label>
          <div className="block">
            <div className="mt-2">
              <div>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-input-checkbox rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                  <span className="ml-2">Email me news and special offers</span>
                </label>
              </div>
            </div>
            <div className="mt-6 text-center">
              <button
                type="submit"
                className="w-60 px-3 py-2 text-md text-gray-50 bg-indigo-500 hover:bg-indigo-400 
                rounded-3xl transform hover:-translate-y-0.5 transition 
                focus:outline-none focus:ring focus:ring-offset-2 focus:ring-indigo-500 focus:ring-opacity-50
                active:bg-indigo-600"
              >
                {" "}
                Create a Meetup!{" "}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewMeetupForm;
