import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const meetupFormHandler = (meetupData) => {
    console.log(meetupData);

    // API Call here. [Post request to save the data.]
  };

  return (
    <div className="text-center pt-3 pb-6">
      <h1 className="text-xl text-gray-500">New Meetup Form</h1>
      <NewMeetupForm onCreateMeetup={meetupFormHandler} />
    </div>
  );
};

export default NewMeetupPage;
