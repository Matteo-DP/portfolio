Multiple services hosted on my RPI load balanced with HAProxy. Local dashboard exposed through tunneling.

## Lamp control API
Python flask API which controls a relay on a RPI B+ through GPIO

### Routes:

| Route | Info | Query params
--- | --- | ---
/ | Toggles lights, returns state | /
/state | Returns the current state | /
/api/data | Returns all DB data | /
/api/state | Returns the current state in log format | /
/api/toggle | Toggles lights, returns state in log format | /
/api/plt | Generates time plot. Deprecated | Month and day
/api/plt/img | Returns the specified plot as a png. Deprecated | Month and day
/api/graphdata | Returns time dataset, Rechart readable format | Month and day
/api/monthly | Returns total usage per day, Rechart readable format | Month

## Lamp Dashboard
NextJS password protected dashboard page for the [lamp-api](https://github.com/Matteo-DP/lamp-api). Time graphs generated with Recharts.  
View on Github [here](https://github.com/Matteo-DP/lamp-frontend).