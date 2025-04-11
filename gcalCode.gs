function listPublicAndPrivateEvents() {
  var calendarId = 'primary';  // Use 'primary' for the default calendar or replace with a specific calendar ID
  var calendar = CalendarApp.getCalendarById(calendarId);
  var events = calendar.getEvents(new Date('2024-01-01'), new Date('2024-12-31'));  // Adjust date range as needed

  var publicEvents = [];
  var privateEvents = [];

  events.forEach(function(event) {
    if (event.getVisibility() === CalendarApp.Visibility.PUBLIC) {
      publicEvents.push([
        event.getTitle(),
        event.getStartTime(),
        event.getEndTime(),
        event.getDescription()
      ]);
    } else if (event.getVisibility() === CalendarApp.Visibility.PRIVATE) {
      privateEvents.push([
        event.getTitle(),
        event.getStartTime(),
        event.getEndTime(),
        event.getDescription()
      ]);
    }
  });

  // Get or create the spreadsheet
   var spreadsheetId = '17y-vIqJY4xxzWwONZi_URO5u1N7FEmBj0M_YVO7ewD8'; // Replace 'YOUR_SPREADSHEET_ID' with the ID of your Google Sheets document
  var ss = SpreadsheetApp.openById(spreadsheetId);
  
  // Update public events sheet
  var publicSheet = ss.getSheetByName('Public Events');
  if (!publicSheet) {
    publicSheet = ss.insertSheet('Public Events');
  } else {
    publicSheet.clear();
  }
  var publicData = [['Title', 'Start Time', 'End Time', 'Description']].concat(publicEvents);
  if (publicEvents.length > 0) {
    publicSheet.getRange(1, 1, publicData.length, publicData[0].length).setValues(publicData);
  } else {
    publicSheet.getRange(1, 1, 1, publicData[0].length).setValues(publicData);  // Set headers only if no public events
  }

  // Update private events sheet
  var privateSheet = ss.getSheetByName('Private Events');
  if (!privateSheet) {
    privateSheet = ss.insertSheet('Private Events');
  } else {
    privateSheet.clear();
  }
  var privateData = [['Title', 'Start Time', 'End Time', 'Description']].concat(privateEvents);
  if (privateEvents.length > 0) {
    privateSheet.getRange(1, 1, privateData.length, privateData[0].length).setValues(privateData);
  } else {
    privateSheet.getRange(1, 1, 1, privateData[0].length).setValues(privateData);  // Set headers only if no private events
  }

  Logger.log('Spreadsheet updated: ' + ss.getUrl());
}
