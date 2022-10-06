# MemeMaker App

This App generates a random 1 - 2 panel meme image and allows you to fill in the top and bottom text. This was built to help develop my skills with React and to improve my knowledge of the state and effect hooks.

## How does it work?

Using the Effect Hook, the app has an asynchronous API call and generates an array of available meme images. One is hard coded at the start.
The meme is stored in state and is refreshed each time the button is pressed - however any text written is still in place.

You areable to call a new random meme and input top text and bottom text.

## What have I learnt through doing this?

- useState hook
- useEffect hook
- React form control
- API calling

## What challenges did I face?

The API calls using asynchronous functions required some fiddling to get to work. This may have been easier with a fetch-then system but I wanted to expand my repertoire. 

The useEffect hook, side effects and the concepts are still quite abstract and will require more practice to fully understand when a dependency array is needed, when it should point to a stateful item and when a return clean-up function will be necessary. Whilst I believe I have a rudimentary understanding, another project or two would be good for this.

An odd little challenge was getting the single meme generator function to choose another meme if the currently chosen one was greater than 3 panels. I think I have solved this using a while loop wherein it simply updates the random number and searches again.

Finally, some memes do not display centrally alinged or are vertically panneled - this means text does not display properly on the image as it is coded to be entered on the top and bottom. This dynamic text placement is something I have not yet figured out how to get across.
