import React, { useState, useContext, useEffect } from "react";

import "../App.css";
import { getMonth } from "../util";

import CalendarHeader from "./CalendarHeader";
import Sidebar from "./Sidebar";
import Month from "./Month";
import GlobalContext from "../context/GlobalContext";
import EventModal from "./EventModal";
import EventsModal from "./EventsModal";
import ServiceListModal from "./ServiceListModal";
import ServiceModal from "./ServiceModal";
import EditServiceModal from "./EditServiceModal";
import MsgService from "./MsgService";
import MsgEvent from "./MsgEvent";
import EditEventModal from "./EditEventModal";

export default function Home(userDetails) {
  const user = userDetails.user;
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const {
    monthIndex,
    showEventsModal,
    showEventModal,
    showServiceListModal,
    showServiceModal,
    showEditServiceModal,
    showEditEventModal,
    isMsgService,
    isMsgEvent,
  } = useContext(GlobalContext);
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <React.Fragment>
      {showEventModal && <EventModal />}
      {showEventsModal && <EventsModal />}
      {showServiceListModal && <ServiceListModal />}
      {showEditServiceModal && <EditServiceModal />}
      {showEditEventModal && <EditEventModal />}
      {showServiceModal && <ServiceModal />}
      {isMsgService && <MsgService />}
      {isMsgEvent && <MsgEvent />}
      <div className="h-screen flex flex-col">
        <CalendarHeader user={user} />
        <div className="flex flex-1 flex-col sm:flex-row">
          <Sidebar user={user} className="flex-1 flex flex-col" />
          {window.innerWidth >= 640 ? (
            <Month month={currentMonth} className="block sm:hidden" />
          ) : null}
        </div>
      </div>
    </React.Fragment>
  );
}
