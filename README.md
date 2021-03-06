# Resources Used
---
Here is the link to read about [Options](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html)

Here is the link to read about [CORS](https://www.w3.org/TR/cors/)

### Learning points that this repo shows:

- Pre-flight request are sent by browsers, [here](https://www.w3.org/TR/cors/#resource-preflight-requests). Also refer to the link about CORS above.

- When a GET or POST request is sent out that does not have any headers attached to it, no pre-flight request is sent first. (Tested using Fetch Web API, and Axios), refer to code

- Inversely for the point above, when headers is attached to a GET or POST request, then an pre-flight request gets sent. Refer to code.

- Other HTTP Methods (Put, Delete, Patch, etc.) triggers the browsers pre-flight request. 

- Chrome's browser network tab shows both the request and response in the same 

- Chrome reads XHR and Fetch differently.

- Chrome reads Axios request as XHR.  

- Axios data is sent as FormData if the Content-Type isn't specified

- Each request in the Network tab of Chrome is it's own 'Package', meaning that it consist of the Response, Request, Data (if there is any), and General information about the cycle. Read Chrome docs.


### Additional resources to read
- [Cross-Domain AJAX for XMPP HTTP Binding Made Easy](https://metajack.im/2010/01/19/crossdomain-ajax-for-xmpp-http-binding-made-easy/)

- [Bidirectional-streams Over Synchronous HTTP](https://xmpp.org/extensions/xep-0124.html)

- [Chromium Open source browser](https://www.chromium.org/developers)