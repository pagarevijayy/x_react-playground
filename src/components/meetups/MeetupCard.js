const MeetupCard = ({ item }) => {
  return (
    <li className="meet-up-card max-w-sm rounded-lg overflow-hidden shadow-lg border border-solid border-gray-100">
      <img src={item.image} alt={item.address} />
      <div className="p-4 space-y-3 ">
        <h1 className="text-xl font-medium">{item.title}</h1>
        <span className="block text-sm text-gray-500">{item.address}</span>
        <p>{item.description}</p>
      </div>
    </li>
  );
};

export default MeetupCard;
