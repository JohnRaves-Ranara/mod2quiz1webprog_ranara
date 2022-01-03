document.getElementById("get-quote-button").style.display="none";
let index_counter = 0;
quote_array = [];

let bezos_quotes = [
    '“If we can keep our competitors focused on us while we stay focused on the customer, ultimately we&lsquo;ll turn out all right.” - Jeff Bezos',
    '“E-mail has some magical ability to turn off the politeness gene in a human being.” - Jeff Bezos',
    '“Invention is by its very nature disruptive. If you want to be understood at all times, then don&lsquo;t do anything new.” - Jeff Bezos',
    '“A brand for a company is like a reputation for a person. You earn reputation by trying to do hard things well.” - Jeff Bezos',
    '“We are stubborn on vision. We are flexible on details….” - Jeff Bezos'
]

let musk_quotes = [
    '"When something is important enough, you do it even if the odds are not in your favor." - Elon Musk',
    '"Life is too short for long-term grudges."- Elon Musk',
    '"I&lsquo;d rather be optimistic and wrong than pessimistic and right." - Elon Musk',
    '"I would like to die on Mars. Just not on impact." - Elon Musk',
    '"Rockets are cool. There&lsquo;s no getting around that." - Elon Musk'
]

let obama_quotes = [
    '"If you&lsquo;re walking down the right path and you&lsquo;re willing to keep walking, eventually you\'ll make progress." - Barack Obama',
    '"Why can&lsquo;t I just eat my waffle?" - Barack Obama',
    '"You know, my faith is one that admits some doubt." - Barack Obama',
    '"I mean, I do think at a certain point you&lsquo;ve made enough money." - Barack Obama',
    '"I cannot swallow whole the view of Lincoln as the Great Emancipator." - Barack Obama'
]

let das_quotes = [
    '"It is not the happy people who are thankful, it is the thankful people who are happy." - Gaur Gopal Das',
    '"Anyone can find the dirt in someone. Be the one that finds the gold." - Gaur Gopal Das',
    '"Live your life in such a way that those who know you but don&lsquo;t know God, will come to know God because they know you." - Gaur Gopal Das',
    '"Worry never robs tomorrow of its sorrow, it only saps today of its joy." - Gaur Gopal Das',
    '"The paradox of our times is that those who have the most can often be the least satisfied." - Gaur Gopal Das'
]

let aristotle_quotes = [
    '"It is the mark of an educated mind to be able to entertain a thought without accepting it." &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp- Aristotle',
    '"What is a friend? A single soul dwelling in two bodies." - Aristotle',
    '"Educating the mind without educating the heart is no education at all." - Aristotle',
    '"No great mind has ever existed without a touch of madness." - Aristotle',
    '"Happiness is the meaning and the purpose of life, the whole aim and end of human existence." - Aristotle'
]


function setPerson(person){
    document.getElementById("get-quote-button").style.display="inline";
    if(person=='bezos'){
        document.getElementById("quote").innerHTML = "";
        index_counter = 0;
        quote_array = bezos_quotes;
    }
    else if(person=='musk'){
        document.getElementById("quote").innerHTML = "";
        index_counter = 0;
        quote_array = musk_quotes;
    }
    else if(person=='obama'){
        document.getElementById("quote").innerHTML = "";
        index_counter = 0;
        quote_array = obama_quotes;
    }
    else if(person=='das'){
        document.getElementById("quote").innerHTML = "";
        index_counter = 0;
        quote_array = das_quotes;
    }
    else{
        document.getElementById("quote").innerHTML = "";
        index_counter = 0;
        quote_array = aristotle_quotes;
    }
}


function getQuote(){
    if(index_counter!=5){
        document.getElementById("quote").innerHTML = quote_array[index_counter];
        index_counter++;
    }else{
        index_counter = 0;
        document.getElementById("quote").innerHTML = quote_array[index_counter];
        index_counter++;
    }
    
}