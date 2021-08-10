// This file is part of Coog. The COPYRIGHT file at the top level of
// this repository contains the full copyright notices and license terms.

import React from "react";

import Button from '../Button';

const button = (<Button
  eventEmitter={() => console.log('eventEmitter::1')}
  id={0}
  label="Selectionner"
  type="primary"
/>)

// CARDS
const cards = [
  {
    titleFront: "Important Message",
    front: "There's a lot of text on the other side",
    back:
      "I told you there was a lot of text back here.  I need to make this kinda long so sorry if it gets a little repetitive.  Again, I apologize for how long this is but I'm attempting to show you something.  I bet you were all like, \"OK, but what if I have a lot of text what would that look like would the whole thing scroll?\"  Well, here's your answer",
    frontActions: button,
  },
  {
    titleFront: "Important Message",
    front: "There's a lot of text on the other side",
    back:
      "I told you there was a lot of text back here.  I need to make this kinda long so sorry if it gets a little repetitive.  Again, I apologize for how long this is but I'm attempting to show you something.  I bet you were all like, \"OK, but what if I have a lot of text what would that look like would the whole thing scroll?\"  Well, here's your answer",
    theme: 'yellow',
  },
  {
    titleFront: "Important Message",
    front: "There's a lot of text on the other side",
    back:
      "I told you there was a lot of text back here.  I need to make this kinda long so sorry if it gets a little repetitive.  Again, I apologize for how long this is but I'm attempting to show you something.  I bet you were all like, \"OK, but what if I have a lot of text what would that look like would the whole thing scroll?\"  Well, here's your answer",
    theme: 'green',
  },
  {
    titleFront: "Important Message",
    front: "There's a lot of text on the other side",
    back:
      "I told you there was a lot of text back here.  I need to make this kinda long so sorry if it gets a little repetitive.  Again, I apologize for how long this is but I'm attempting to show you something.  I bet you were all like, \"OK, but what if I have a lot of text what would that look like would the whole thing scroll?\"  Well, here's your answer",
    theme: 'bleu',
  },
  {
    titleFront: "Important Message",
    front: "There's a lot of text on the other side",
    back:
      "I told you there was a lot of text back here.  I need to make this kinda long so sorry if it gets a little repetitive.  Again, I apologize for how long this is but I'm attempting to show you something.  I bet you were all like, \"OK, but what if I have a lot of text what would that look like would the whole thing scroll?\"  Well, here's your answer",
    theme: 'purple',
  },
  {
    titleFront: "Important Message",
    front: "There's a lot of text on the other side",
    back:
      "I told you there was a lot of text back here.  I need to make this kinda long so sorry if it gets a little repetitive.  Again, I apologize for how long this is but I'm attempting to show you something.  I bet you were all like, \"OK, but what if I have a lot of text what would that look like would the whole thing scroll?\"  Well, here's your answer",
    theme: 'red',
  },
  {
    titleFront: "Important Message",
    front: "There's a lot of text on the other side",
    back:
      "I told you there was a lot of text back here.  I need to make this kinda long so sorry if it gets a little repetitive.  Again, I apologize for how long this is but I'm attempting to show you something.  I bet you were all like, \"OK, but what if I have a lot of text what would that look like would the whole thing scroll?\"  Well, here's your answer",
    theme: 'orange',
  },
  {
    titleFront: "Important Message",
    front: "There's a lot of text on the other side",
    back:
      "I told you there was a lot of text back here.  I need to make this kinda long so sorry if it gets a little repetitive.  Again, I apologize for how long this is but I'm attempting to show you something.  I bet you were all like, \"OK, but what if I have a lot of text what would that look like would the whole thing scroll?\"  Well, here's your answer",
    theme: 'black',
  },
  {
    titleFront: "Important Message",
    front: "There's a lot of text on the other side",
    back:
      "I told you there was a lot of text back here.  I need to make this kinda long so sorry if it gets a little repetitive.  Again, I apologize for how long this is but I'm attempting to show you something.  I bet you were all like, \"OK, but what if I have a lot of text what would that look like would the whole thing scroll?\"  Well, here's your answer",
    theme: 'grey',
  },
  {
    titleFront: "Important Message",
    front: "There's a lot of text on the other side",
    back:
      "I told you there was a lot of text back here.  I need to make this kinda long so sorry if it gets a little repetitive.  Again, I apologize for how long this is but I'm attempting to show you something.  I bet you were all like, \"OK, but what if I have a lot of text what would that look like would the whole thing scroll?\"  Well, here's your answer",
    theme: 'white',
  },
  {
    titleFront: "Important Message",
    front: "There's a lot of text on the other side",
    back:
      "I told you there was a lot of text back here.  I need to make this kinda long so sorry if it gets a little repetitive.  Again, I apologize for how long this is but I'm attempting to show you something.  I bet you were all like, \"OK, but what if I have a lot of text what would that look like would the whole thing scroll?\"  Well, here's your answer",
    theme: 'blue-solid',
  },
  {
    titleFront: "Important Message",
    front: "There's a lot of text on the other side",
    back:
      "I told you there was a lot of text back here.  I need to make this kinda long so sorry if it gets a little repetitive.  Again, I apologize for how long this is but I'm attempting to show you something.  I bet you were all like, \"OK, but what if I have a lot of text what would that look like would the whole thing scroll?\"  Well, here's your answer",
    theme: 'red-solid',
  },
  {
    titleFront: "Important Message",
    front: "There's a lot of text on the other side",
    back:
      "I told you there was a lot of text back here.  I need to make this kinda long so sorry if it gets a little repetitive.  Again, I apologize for how long this is but I'm attempting to show you something.  I bet you were all like, \"OK, but what if I have a lot of text what would that look like would the whole thing scroll?\"  Well, here's your answer",
    theme: 'purple-solid',
  },
  {
    titleFront: "Important Message",
    front: "There's a lot of text on the other side",
    back:
      "I told you there was a lot of text back here.  I need to make this kinda long so sorry if it gets a little repetitive.  Again, I apologize for how long this is but I'm attempting to show you something.  I bet you were all like, \"OK, but what if I have a lot of text what would that look like would the whole thing scroll?\"  Well, here's your answer",
    theme: 'orange-solid',
  },
  {
    titleFront: "Important Message",
    front: "There's a lot of text on the other side",
    back:
      "I told you there was a lot of text back here.  I need to make this kinda long so sorry if it gets a little repetitive.  Again, I apologize for how long this is but I'm attempting to show you something.  I bet you were all like, \"OK, but what if I have a lot of text what would that look like would the whole thing scroll?\"  Well, here's your answer",
    theme: 'yellow-solid',
  },
  {
    titleFront: "Important Message",
    front: "There's a lot of text on the other side",
    back:
      "I told you there was a lot of text back here.  I need to make this kinda long so sorry if it gets a little repetitive.  Again, I apologize for how long this is but I'm attempting to show you something.  I bet you were all like, \"OK, but what if I have a lot of text what would that look like would the whole thing scroll?\"  Well, here's your answer",
    theme: 'green-solid',
  },
];

const card = cards[0];

const options = {
  lgColumns: 4,
  mdColumns: 3,
  smColumn: 2,
  cards,
}

export { cards, card, options }