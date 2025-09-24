import React, {useState} from 'react'

function Scheduler() {
  const [scheduleDate, setScheduleDate] = useState('');
  const [scheduleTime, setScheduleTime] = useState('09:00');
  const [scheduledEvents, setScheduledEvents] = useState([]);

  const handleScheduleSubmit = (e) => {
    e.preventDefault();
    if (scheduleDate) {
      setScheduledEvents([
        ...scheduledEvents,
        {
          date: scheduleDate,
          time: scheduleTime,
          location: 'Main Beach',
        },
      ]);
      setScheduleDate('');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-card rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Schedule Cleanup</h2>

      <form onSubmit={handleScheduleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Date</label>
          <input
            type="date"
            value={scheduleDate}
            onChange={(e) => setScheduleDate(e.target.value)}
            className="w-full p-2 border border-border rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Time</label>
          <input
            type="time"
            value={scheduleTime}
            onChange={(e) => setScheduleTime(e.target.value)}
            className="w-full p-2 border border-border rounded-md"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-primary text-primary-foreground px-4 py-2 rounded-md"
        >
          Add Event
        </button>
      </form>

      {/* Scheduled Events */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Upcoming Events</h3>
        {scheduledEvents.length === 0 ? (
          <p className="text-muted-foreground">No events scheduled yet.</p>
        ) : (
          <ul className="space-y-2">
            {scheduledEvents.map((event, index) => (
              <li
                key={index}
                className="p-3 bg-muted rounded-md shadow-sm flex justify-between"
              >
                <span>
                  {event.date} at {event.time}
                </span>
                <span className="text-sm text-muted-foreground">
                  {event.location}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Scheduler