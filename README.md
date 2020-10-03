## Startup instructions

```
docker-compose up
```

# Problems

## First problem: client side routing

1 - Open localhost in your browser

2 - Click on the link that takes you to the test page

3 - You'll see that you're actually still on the Home page but it'll render the home page with the /test params

4 - Visit localhost/test directly in your browser (if you are on step 3 you can just refresh the page)

5 - If you visit /test directly it'll display the test page route instead of home as it should


It looks like this problem is only on client side routing, if you visit the pages directly it works fine, a possible easy workaround would be to force the browser to always load the pages instead of next/link just changing the dom.

## Second problem: the actual static generation

1 - Open localhost in your browser

2 - You should see that it's displaying a fallback page with no content (no random number or hostname is shown)

3 - The same happens if you visit localhost/test


Now the interesting part:

4 - Visit localhost:3000/localhost/

5 - As expected the ISG works fine here

6 - Head back to localhost (at port 80)

7 - Now the ISG is working


ISG works after the page is built on the port 3000 and it'll revalidate it just fine too, the problem here is on the first generation, for some reason it doesn't work with the reverse proxy setup.


If you visit localhost:3000/localhost/test and then visit localhost/test it also works fine.