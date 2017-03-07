# Natural Language Helper

Natural Language Helper API is a extractor service that is able to extract entities from a given phrase. Right now it can identify a few dates and a few locations from Brasil.
It can be used to create chat bots or personal assistants.

### Example:
```sh
http://ENDPOINT.com:3000/?message=vai chover hoje em sao paulo?&entities=location,date
```
returns:
```sh
    {"message":"vai chover hoje em sao paulo?","entities":{"date":{"name":"Hoje","value":"2017-03-07T11:57:34.847Z"},"location":["São Paulo"]}}
```

```sh
http://ENDPOINT.com:3000/?message=que%20dia%20do%20mes%20vai%20na%20proxima%20segunda-feira?&entities=date
```
returns: 
```sh
    {"message":"que dia do mes vai na proxima segunda-feira?","entities":{"date":{"name":"Segunda-Feira","value":"2017-03-13T12:00:56.697Z"}}}
```
    
### Parameters:
    message: the message that you want extract entities
    entities: the entities that you want identity.
    
### Entities types:
    location: any city in Brasil
    date: ["hoje","amanha","ontem"] + week days ["Segunda-feira", "Terça-feira"...]
    
    