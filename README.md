# THE RUBANDA CORPORATE LEAGUE OFFICIAL WEBSITE

## CORE DEVELOPMENT

## Backend

I used PHP/Laravel to build the server side of this website

## Core modules

1. _Admin table_
   The Admin is able to create an account, login and perform other primary modifications of the application's data eg, he registers; - Players - Teams - Matches - Match results - News posts

2. News Posts
   The admin also can post any news concerning with the league. He adds the title, description and image

3. Playes table
   The Player's table has a player's name and team(as core data) and optional(nullable) values eg age, residence

4. Matches Table
   This table has matches logically registered, the admin has nothing to do with logical match fixing, I've done enough to pre-render teams during match fixing in a way that a;->
    - team cannot play itself
    - team cannot have 2 matches in a single match day (match day means the Xth match of the tournament)
    - Typically once a team is selected to be fixed under a given match day, it get's out of the que

5. Match Results
    - When the matches of a given match day are fixed, the results are created right away, and both matches are pinned at 0:0
    - The role of the admin is to come and update the results according to how the match is standing/has ended
    - This takes us to another part of business logic, it's elaborated below

- Table
  The table is auto updated depending on the match results. Points are between 2 playing teams(each match) as follows

* Winner: 3 points
* Draw: 1 point each team
* Loser: 0 points

## Client

I used React.js, Tailwindcss, Rtk(for state management), React Router Dom

## Containerization

# NEW SKILLS THAT WILL BE AQUIRED

## Web Server/Reverse Proxy

## Deployment

## Infra (IaC)

## CI/CD
