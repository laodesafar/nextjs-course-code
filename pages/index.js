import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";

export default function Beranda() {
  const fiturEvent = getFeaturedEvents();
  return (
    <div>
      <EventList items={fiturEvent} />
    </div>
  );
}
