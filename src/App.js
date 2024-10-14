import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const pastEvents = [
    {
      title: "Google Cloud Study Jams",
      date: "10 Nov, 2023",
      description: "Embark on a journey of cloud mastery with Google Cloud Study Jams.",
    },
    {
      title: "Winter of Code - Ideathon",
      date: "10 Nov, 2023",
      description: "Ideate, Innovate, and Code your way through winter!",
    },
    {
      title: "Winter of Code - TechQuiz",
      date: "10 Nov, 2023",
      description: "Unleash your inner techie, compete in a dynamic quiz experience.",
    },
  ];

  const upcomingEvents = [
    {
      title: "HackNiche 2.0 - Hackathon",
      date: "17th - 18th February, 2024",
      description: "A 24-hour hackathon where brilliant teams collaborate and compete.",
    },
    {
      title: "DeepInsight - ML Bootcamp",
      date: "Coming Soon",
      description: "Unleash the Power of Data: Elevate your skills with our ML Bootcamp.",
    },
    {
      title: "Winter of Code - Ideathon",
      date: "10 Nov, 2024",
      description: "Join Winter of Code for a season of creative ideation and coding excellence.",
    },
  ];

  const openEvent = (event) => {
    setSelectedEvent(event);
  };

  const closeOverlay = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="timeline-container">
      <video className="background-video" autoPlay loop muted>
        <source src="/background-video.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <h1>Events Timeline</h1>
      <div className="timeline">
        <div className="past-events">
          <h2>Past Events</h2>
          {pastEvents.map((event, index) => (
            <div
              key={index}
              className="timeline-item past"
              onClick={() => openEvent(event)}
            >
              <h3>{event.title}</h3>
              <span>{event.date}</span>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
        <div className="upcoming-events">
          <h2>Upcoming Events</h2>
          {upcomingEvents.map((event, index) => (
            <div
              key={index}
              className="timeline-item upcoming"
              onClick={() => openEvent(event)}
            >
              <h3>{event.title}</h3>
              <span>{event.date}</span>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
      </div>

      {selectedEvent && (
        <div className="event-overlay" onClick={closeOverlay}>
          <div className="event-overlay-content">
            <h3>{selectedEvent.title}</h3>
            <span>{selectedEvent.date}</span>
            <p>{selectedEvent.description}</p>
            <button onClick={closeOverlay}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
