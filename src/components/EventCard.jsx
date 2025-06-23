import { imageBaseURL } from "../api/client";
import { Link } from "react-router";


export default function EventCard({event}) {
    return (
        <div>
            <img src={`${imageBaseURL}/${event.image}`} alt="Event Card" />
            <Link to={`/view-event?id=${event.id}`}>{event.title}</Link>
            <h2>Saturday, March 18, 9.30PM</h2>
            <h3>ONLINE EVENT - Attend anywhere</h3>
        </div>
    );
}