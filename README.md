## Fetch-Rewards-Coding-Exercise

This web app retrieves the data from https://fetch-hiring.s3.amazonaws.com/hiring.json.

It will display the list of items to the user based on the following requirements:

- Display all the items grouped by "listId"
- Sort the results first by "listId" then by "name" when displaying
- Filter out any items where "name" is blank or null
- The final result should be displayed to the user in an easy-to-read list

To start the app:

1. `npm install`
2. `npm start`
3. Go to http://localhost:3000/ on your browser
