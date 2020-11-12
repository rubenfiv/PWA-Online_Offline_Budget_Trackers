# PWA-Online_Offline_Budget_Trackers

## Description 

  * This is a progressive web app budget tracker that utilizes MongoDB, Express route handling, as well as service-worker and cache APIs to ensure the app is functional with or without a data/internet connection.
  
## Installation

   * Open 'https://pwa-budget-trackerr.herokuapp.com/'.
 
   * Fill out the 'Name of transaction' and 'Transaction amount' fields with the transaction description and dollar amount of the transaction, respectively.

   * You then click the '+ Add Funds' or '- Subtract Funds' button depending on how you want the transaction to affect your budget total.

   * After clicking the add or subtract button, your budget total is displayed at the top. A list of your recent transactions are displayed in a chart below with an accompanying graph illustrating your budget total over time.

   -- If the user is online, the transaction entered will occur instantly and be reflected in the budget total, table, and graph.

   -- If the user is offline, the transactions they enter will be cached and reflected in the budget total instantly. Once the user is back online the transactions will be bulk uploaded. At that time, the transactions they will be reflected in the budget table, and graph.

## Usage 

With this budget tracker app the user is able to view create and track budget deposits and withdrawals. The user can view their budget total amount, transaction history, and a graph illustrating their budget change over time. The app is functional regardless if the user is online.

## Questions

Github Repo: https://github.com/rubenfiv/PWA-Online_Offline_Budget_Trackers

Email: rubenfiv@gmail.com