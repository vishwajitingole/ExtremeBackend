Status Code

1xx

100
Server ko response bhej di hai aur return mein server ne server ne bas chota sa response diya
101
After hitting the req the if it gets redirected somewhere else

2xx

200 (OK status200)
Server pe request aayi aur res bhi successfully send kardi
201 (Created)
Server pe request aayi aur uski wajah se server pe kuch create hogya
202 (Accepted)
Server pe ek request aayi hai aur wo process mein hai abhi ke liye server ispe kaam kar rha hai lekin aage jaake error aa sakte hai ye ek async task hota hai
203 (Distributed System)
Agar server pe request bhejne pe agar wo req wapas kisi aur server pe jaati hai

3xx(Warning)

301
The resource has moved somewhere else permanently
307
Sign which indicates that the data has moved temporarily somewhere else
308
The resource has moved somewhere else permanently also give a link where it has been redirected to

4xx(Error)

400 (Bad Request)
Wrong inputs given by the user as a result the server is unable to process it
401 (Unauthorised)
User not having rights to access some piece of information
403 (forbidden)
Trying to access a resource that is sensitive
404 ( Not Found )
Url which doesn't exist

5xx(Server ki taraf ki galti)

500(Internal Server Error)
502(Bad Gateway)
Server pe request aayi usne kahi aur dusre server pe bhej di aur return mein sahi response nhi mila
503(Service Unavailable)
Jab server pe req bheji jaaye aur server pe already kaafi load hai toh server unavailable hojta hai
