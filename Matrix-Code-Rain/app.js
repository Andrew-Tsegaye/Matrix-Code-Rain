/* Get the main container element */
const matrix = document.querySelector('.matrix');

/* Function for generating a random character */
function makeID() {
  let result = '';
  // Characters that can be randomely picked
  // You can add everything you want
  let characters = `ABCDEFG010101010101HIJKLMNOPQRSTUVWXYZ
  abcdefghijkl0101010101010101010mnopqrstuvwxyz0123456789
  ㄥㄖ尺乇爪　乇卩丂ㄩ爪　ᎶㄖㄖᎶㄥ乇　ﾌ卂卩卂几乇丂乇　ㄒ乇乂ㄒ`;
  // Returning a random character
  result += characters.charAt(Math.floor(Math.random() * characters.length));
  return result;
}

function generateText() {
  // Setting the width and height of the rain
  const w = 1000;
  const h = 75;

  // Looping through the column
  for (let i = 0; i < w; i++) {
    // Adding a random timeout delay for each column
    const timeout = Math.floor(Math.random() * 10) * 1000;
    let delay = 0;

    // Create the columns
    const column = document.createElement('p');

    // Loop thourgh all rows
    for (let i = 0; i < h; i++) {
      // Create the rows
      const letter = document.createElement('span');
      // Generate a random character and add it to the sapn / row
      letter.innerHTML = makeID();
      // Add the spans / rows to the column
      column.appendChild(letter);

      // Delay each character animation by 100 milliseconds
      // This creates the rain drop effect
      delay += 90;
      column.children[i].style.animationDelay = delay + 'ms';
    }
    // Delay each column by a random number of seconds
    setTimeout(() => {
      matrix.appendChild(column);
    }, timeout);
  }
}

// Start the rain on page logo
generateText();
