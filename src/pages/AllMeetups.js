import MeetupList from "../components/meetups/MeetupList";
import React, { useState, useEffect } from "react";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];

const AllMeetupsPage = () => {
  // Ideally, API call here to get the data (GET request)
  // useEffect Hook will be used to make the api call as we don't want an infinite loop due
  // useState Hook will be used to manipulate the loading and final view.

  // note: component gets re-rendered when we change the state (hence, infinite loop case)
  // more on hooks: https://reactjs.org/docs/hooks-intro.html

  return (
    <div className="py-8 text-center">
      <h1 className="py-3 text-xl text-indigo-600">Upcoming Meetups</h1>
      <MeetupList meetupData={DUMMY_DATA} />
    </div>
  );
};

export default AllMeetupsPage;
