const eventbrite = new EventBrite();
const ui = new UI();

document.getElementById('submitBtn').addEventListener('click', (e) => {
     e.preventDefault();

     const eventName = document.getElementById('event-name').value;
     const category = document.getElementById('category').value;


     if(eventName !== '') {
          eventbrite.queryAPI(eventName, category)
               .then(events => {
                    const eventsList = events.events.events;
                    if(eventsList.length > 0 ) {
                         ui.displayEvents(eventsList);
                    } else {
                         ui.printMessage('No Results Found', 'text-center alert alert-danger mt-4');
                    }
               })

     } else {
          ui.printMessage('Add an Event or City', 'text-center alert alert-danger mt-4');
     }
})