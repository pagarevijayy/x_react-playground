import MeetupCard from "./MeetupCard";

const MeetupList = ({ meetupData }) => {
  return (
    <ul className="py-3 space-y-8 text-left md:flex md:justify-center md:py-8 md:space-y-0 md:space-x-8">
      {meetupData.map((meetup) => (
        <MeetupCard key={meetup.id} item={meetup} />
      ))}
    </ul>
  );
};

export default MeetupList;
