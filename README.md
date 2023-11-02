# Airline-Systems
>this systems provides some very common functionalities that all airline booking systems provides.

## I build 5 Microservices

1. Search Service     [ PORT = 3001 ]
2. Auth Service       [ PORT = 3002 ]
3. Booking Service    [ PORT = 3003 ]
4. Reminder Service   [ PORT = 3004 ]
5. API GateWay        [ PORT = 3005 ]

## Use Cases of each Microservices 

#### 1. Search Service
 >provides search service to end Users to get flights details by Cities, Airports. and CRUD functionalities also provides for ADMIN to insert,delete,update,read the deatils of Cities,airports. 

#### 2. Auth Service
>provides authentication service to end USERS. like sign-up, sign-in & to check wheater a user authenticated [signed-in] or not using JSON web tokens.

#### 3. Booking Service
>provides a functionality to book a flight.

#### 4. Reminder Service 
>provides notifications to USERS

#### 5. API Gateway
~connects above microservices to each other.


## Tech Stacks
* Javasript
* Nodejs
* MySQL[ORM]
* Some third-party libraries like JWT , bcrypt , axios , rateLimit , morgan.


