import { Fragment } from "react";
import router, { useRouter } from "next/router";
import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/event-detail/event-search";

export default function HalamanEvent() {
  const events = getAllEvents();

  function findEventsHandler(year, month) {
    const fullpath = `/events/${year}/${month}`;

    router.push(fullpath);
  }

  return (
    <Fragment>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}
