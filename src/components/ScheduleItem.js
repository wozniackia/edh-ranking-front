import "../styles/ScheduleItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

function ScheduleItem({
  Date,
  Name,
  Location,
  Price,
  CurrentParticipants,
  AllParticipants,
}) {
  return (
    <li className="ScheduleItem">
      <div className="Icon">
        <FontAwesomeIcon icon={faTrophy} />
      </div>
      <div className="Date">{Date}</div>
      <div className="Name">{Name}</div>
      <div className="Location">{Location}</div>
      <div className="Price">{Price}</div>
      <div className="Participants">
        {CurrentParticipants}/{AllParticipants}
      </div>
    </li>
  );
}

export default ScheduleItem;
