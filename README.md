# Google Calendar Events Export Script

This script allows you to automatically export public and private events from your Google Calendar to a Google Sheets document. It creates separate sheets for public and private events, making it easy to track and analyze your calendar data.

## Overview

The `listPublicAndPrivateEvents()` function:
1. Retrieves events from your primary Google Calendar for a specified date range (default: the entire year 2024)
2. Categorizes events as either public or private based on their visibility settings
3. Exports the events to a pre-specified Google Sheets document, creating or updating sheets named "Public Events" and "Private Events"
4. For each event, it exports the title, start time, end time, and description

## Requirements

- Google account with access to Google Calendar and Google Sheets
- Google Apps Script enabled

## Setup Instructions

1. Open Google Apps Script (https://script.google.com/)
2. Create a new script project
3. Copy and paste the provided code into the script editor
4. Replace the placeholder spreadsheet ID with your own:
   ```javascript
   var spreadsheetId = '17y-vIqJY4xxzWwONZi_URO5u1N7FEmBj0M_YVO7ewD8'; // Replace with your actual spreadsheet ID
   ```
5. (Optional) Modify the date range to fit your needs:
   ```javascript
   var events = calendar.getEvents(new Date('2024-01-01'), new Date('2024-12-31'));
   ```

## How to Get Your Spreadsheet ID

1. Create a new Google Sheets document or use an existing one
2. The spreadsheet ID is found in the URL:
   `https://docs.google.com/spreadsheets/d/YOUR_SPREADSHEET_ID/edit`
3. Copy the ID and paste it into the script

## Permissions

When you run the script for the first time, it will ask for permissions to:
- Access your Google Calendar
- Access and modify your Google Sheets

## Running the Script

### Manual Execution
1. Save the script
2. Select the `listPublicAndPrivateEvents` function from the dropdown menu
3. Click the "Run" button

### Scheduled Execution
To run the script automatically on a schedule:
1. Click on the "Triggers" icon in the Apps Script editor (clock icon)
2. Click "Add Trigger"
3. Configure the trigger to run `listPublicAndPrivateEvents` at your desired frequency

## Output

The script will create or update two sheets in your specified Google Sheets document:
1. **Public Events**: Contains all events with visibility set to PUBLIC
2. **Private Events**: Contains all events with visibility set to PRIVATE

Each sheet includes the following columns:
- Title
- Start Time
- End Time
- Description

## Troubleshooting

- **Error: "Script does not have permission"**: Accept the permissions request when prompted
- **Error: "Spreadsheet not found"**: Verify the spreadsheet ID is correct and you have access to it
- **No events showing up**: Check the date range and make sure you have events in your calendar during that period
- **Missing events**: The script only categorizes events explicitly marked as PUBLIC or PRIVATE; events with default visibility will not be included

## Customization

- To use a different calendar, replace `'primary'` with the specific calendar ID:
  ```javascript
  var calendarId = 'your.email@domain.com';
  ```
- To add more event details, modify the data arrays:
  ```javascript
  publicEvents.push([
    event.getTitle(),
    event.getStartTime(),
    event.getEndTime(),
    event.getDescription(),
    event.getLocation() // Added location
  ]);
  ```

## License

This script is provided as-is with no warranty. Feel free to modify and use it according to your needs.