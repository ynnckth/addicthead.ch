# addicthead.ch
Public band website running at: [http://www.addicthead.ch](http://www.addicthead.ch)

## Maintenance

**Adding gigs**  
To add a gig insert it into the `gigs.json` file in the specified format.
The app will automatically detect if it's a future or past date and display it accordingly.

**Adding pictures to the gallery**  
To add a picture to the gallery place the large version into the `assets/images/gigs/larges` directory
and prefix it with a 4 digit number (relevant for the sorting order).

Add the thumbnail version into the `assets/images/gigs/thumbs` directory and prefix the file 
with the same 4 digit number as the large one.


## Development
This is a client-only single page app using React.

Initial project setup after cloning:  
`npm install`

Start a live reload server for client development running on port 8080 (hot deployer) (http://localhost:8080):  
`npm run watch:client`


Build client for production:  
`npm run build:client`


## Deployment
Build the client for production by running:  
`npm run build:client`

Test the app with a local http server:  
`node_modules/http-server/bin/http-server client/dist`

Then move/upload the built `dist` directory to the production http server.