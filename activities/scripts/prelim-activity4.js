/*
 *This stores the title and author of the poem and other variables
 * */
let ict = 'ICT';
let technology = 'Technology';
let title = ict + " Makes World Wonderful Poem <br>";
let author = "(by James Ivan Almalez) <br>";
/*
 *This variables are storing the poem by stanza
 * */
let stanza_one = "Improve much more <br>Unlike before <br>We're literate <br>And enable to soar";
let stanza_two = "<br>Don't need to write on bond papers <br>With Microsoft <br>You'll type and print it up";
let stanza_three = "<br>Everyone else in the world can see it <br>Everyone else, it's true. <br>";
let stanza_four = technology + " lights a path to progressive world <br>And we have many more ideas to unfold <br> We can't deny that " + technology + " is cool <br>And we know, " + ict + " is wonderful";
let stanza_five = "<br>Philippines is now a developing country <br>And we can improve more through " + technology + " <br>Because using this our works are very easy <br>We should enhance, " + ict + " Literacy";

/*
 *Combine all variables into an array to add or remove and also having more readabilty
 *<br> is to after each stanza it has spaces for the next stanza
 * */
const poem = [title, author, "<br>", stanza_one, "<br>", stanza_two, "<br>", stanza_three, "<br>", stanza_four, "<br>", stanza_five];

/*
 *Iterates the array then returns a value which I call p then writeln() into poem.html
 * */
poem.forEach(p => {
  document.writeln(p)
})