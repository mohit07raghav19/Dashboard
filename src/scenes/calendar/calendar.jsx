import { useState } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    console.log(selected.endStr);
    console.log(selected.endStr.slice(0,19));
    let dater1 = selected.endStr.slice(0,19);
    console.log(dater1)
    const sliced=dater1.slice(0,19)
    console.log(sliced)
    console.log(title);
    localStorage.setItem("date", sliced);
    localStorage.setItem("title", title);
    setCurrentEvents((olditem) => {
      return [
        ...olditem,
        {
          title: localStorage.getItem("title"),
          start: localStorage.getItem("date"),
          allDay: false,
        },
      ];
    });
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };

  return (
    <Box m="20px">
      <Header title="Calendar" subtitle="Full Calendar Interactive Page" />

      <Box display="flex" justifyContent="space-between">
        {/* CALENDAR SIDEBAR */}
        {/*  */}

        {/* CALENDAR */}
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="timeGridWeek"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              { title: "web dev", start: "2023-04-28T08:00:00", allDay: false },
              { title: "app dev", start: "2023-04-27T09:00:00", allDay: false },
              { title: "subj", start: "2023-04-26T05:00:00", allDay: false },
              { title: "subj", start: "2023-04-23T11:00:00", allDay: false },
              { title: "subj", start: "2023-04-23T12:00:00", allDay: false },
              {
                title: "blockchain",
                start: "2023-04-28T13:00:00",
                allDay: false,
              },
              { title: "subj", start: "2023-04-23T14:00:00", allDay: false },
              {
                title: "machine learning",
                start: "2023-04-27T15:00:00",
                allDay: false,
              },
              { title: "subj", start: "2023-04-28T05:00:00", allDay: false },

              { title: "subj", start: "2023-04-26T19:00:00", allDay: false },
              { title: "subj", start: "2023-04-29T21:00:00", allDay: false },
              {
                title: "Computer Architecture",
                start: "2023-04-23T21:00:00",
                allDay: false,
              },
              { title: "subj", start: "2023-04-23T22:00:00", allDay: false },
              { title: "subj", start: "2023-04-25T23:00:00", allDay: false },
              { title: "subj", start: "2023-04-23T08:00:00", allDay: false },

              {
                title: "Competitive Programming",
                start: "2023-04-23T10:00:00",
                allDay: false,
              },
              { title: "subj", start: "2023-04-23T11:00:00", allDay: false },

              {
                title: "Object-Oriented Programming",
                start: "2023-04-29T13:00:00",
                allDay: false,
              },
              { title: "subj", start: "2023-04-24T14:00:00", allDay: false },
              {
                title: "Competitive Programming",
                start: "2023-04-23T15:00:00",
                allDay: false,
              },
              { title: "subj", start: "2023-04-23T18:00:00", allDay: false },
              {
                title: "Competitive Programming",
                start: "2023-04-24T07:00:00",
                allDay: false,
              },
              {
                title: "Object-Oriented Programming",
                start: "2023-04-23T02:00:00",
                allDay: false,
              },
              {
                title: "Computer Architecture",
                start: "2023-04-23T01:00:00",
                allDay: false,
              },
              {
                title: localStorage.getItem("title"),
          start: localStorage.getItem("date"),
          allDay: false,
              },
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;