import { getFeaturedEvents } from "../helpers/api-utils";
import EventList from "../components/events/event-list";

export default function Beranda(props) {
  return (
    <div>
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
  };
}
