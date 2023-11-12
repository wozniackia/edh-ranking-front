import "../styles/ScheduleItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

function ScheduleItem({
  Date,
  Name,
  Location,
  Price,
  CurrentParticipants,
  AllParticipants,
}) {

  const [participantsStyle, setParticipantsStyle] = useState({});

  useEffect(() => {
    if(CurrentParticipants > AllParticipants/2) {
      setParticipantsStyle({color: "red"})
    } else if(CurrentParticipants > AllParticipants/3) {
      setParticipantsStyle({color: "orange"})
    } else {
      setParticipantsStyle({color: "green"})
    }
  }, []);

  return (
    <li className="ScheduleItem">
      <div className="Icon">
        <FontAwesomeIcon icon={faTrophy} />
      </div>
      <div className="Name">{Name}</div>
      <div className="Date">{Date}</div>
      <div className="Location">{Location}</div>
      <div className="Price">{Price}</div>
      <div className="Participants" style={participantsStyle}>
        {CurrentParticipants}/{AllParticipants}
      </div>
    </li>
  );
}

export default ScheduleItem;
