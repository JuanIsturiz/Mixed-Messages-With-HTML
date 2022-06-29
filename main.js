//List of authors and quotes
const authorsAndQuotes = [
    {
        author: 'Winston Churchill',
        quote: ['"Never in the field of human conflict was so much owed by so many to so few."', '"Success is not final, failure is not fatal: it is the courage to continue that counts."']
    },
    {
        author: 'Abraham Lincoln',
        quote: `"There's no honorable way to kill, no gentle way to destroy.There is nothing good in war.Except its ending."`
    },
    {
        author: 'Joseph Stalin',
        quote: '"The death of one man is a tragedy. The death of millions is a statistic."'
    },
    {
        author: 'General George S. Patton',
        quote: ['"It is foolish and wrong to mourn the men who died. Rather we should thank God that such men lived."', '"Better to fight for something than live for nothing."']
    },
    {
        author: 'Platto.',
        quote: '"Only the dead have seen the end of war."'
    },
    {
        author: 'Napoleon Bonaparte',
        quote: '"Death is nothing, but to live defeated and inglorious is to die daily."'
    },
    {
        author: 'H. G. Wells',
        quote: `"If we don't end war, war will end us."`
    },
    {
        author: 'Thomas Jefferson',
        quote: '"War is as much a punishment to the punisher as it is to the sufferer."'
    }
]

//List of elements from html
const quote = document.getElementById('quote');
const author = document.getElementById('author');
const button = document.getElementById('button')

//Event handler function for the button 
const handlerFunction = () => {
    //Number randomizer
    const randomNumber = num => {
        return Math.floor(Math.random() * num);
    }

    //Grabs a random object from the authorAndQuotes array
    let randomAuthor = authorsAndQuotes[randomNumber(authorsAndQuotes.length)];
    
    //Grabs the index of the previous object
    let arrIndex = authorsAndQuotes.indexOf(randomAuthor);
    
    //Initializing the author and quote where the value is going to be saved
    let newAuthor = '';
    let newQuote = '';

    //Switch that will treat authors with multiples quotes
    switch (arrIndex) {
        case 0:
            newAuthor = (authorsAndQuotes[arrIndex].author)
            newQuote = authorsAndQuotes[arrIndex].quote[randomNumber(authorsAndQuotes[arrIndex].quote.length)]
            break
        case 3:
            newAuthor = (authorsAndQuotes[arrIndex].author)
            newQuote = authorsAndQuotes[arrIndex].quote[randomNumber(authorsAndQuotes[arrIndex].quote.length)]
            break
        default:
            newAuthor = (authorsAndQuotes[arrIndex].author)
            newQuote = authorsAndQuotes[arrIndex].quote
    }

    //Changing html paragraphs
    quote.innerHTML = newQuote;
    author.innerHTML = newAuthor;

}

//Seting the handler function on the button onclick event
button.onclick = handlerFunction;
