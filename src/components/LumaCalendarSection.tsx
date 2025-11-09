const CalendarSection = () => {
  return (
    <section id="calendar" className="py-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Upcoming Lumeo Events
          </h2>
          <p className="text-xl text-gray-light mt-4">
          Join our community events, demos, and sessions happening soon.
          </p>
        </div>
       
        
        <div className="flex justify-center">
           <iframe
             src="https://luma.com/embed/calendar/cal-BGKRCwxg3DFozOx/events?lt=light"
             width="600"
             height="300"
             frameBorder="0"
             style={{ border: '1px solid #bfcbda88', borderRadius: 4 }}
             allowFullScreen
             aria-hidden="false"
             tabIndex={0}
             title="Lumeo Calendar"
             className="w-full max-w-[1024px] h-[300px] bg-background"
           />
        </div>
      </div>
    </section>
  );
};

export default CalendarSection;


