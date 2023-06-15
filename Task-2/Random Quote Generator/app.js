// Collection Of Quote
const quotes = [{
    quote: `Perfection is achieved not when there is nothing more to add; but rather when there is nothing more to take away.`,
    author: `â€• Antoine de Saint-Exupery `
}, {
    quote: `Experience is the name everyone gives to their mistakes.`,
    author: `â€• Oscar Wilde`
}, {
    quote: `In order to be irreplaceable, one must always be different.`,
    author: `â€• Coco Chanel`
}, {
    quote: `Knowledge is power.`,
    author: `â€• Francis Bacon`
}, {
    quote: `Simplicity is the soul of efficiency.`,
    author: `â€• Austin Freeman`
}, {
    quote: `Make it work, make it right, make it fast`,
    author: `â€• Kent Beck`
}, {
    quote: `I am not a great programmer; I am just a good programmer with great habits.`,
    author: `â€• Kent Beck`
}, {
    quote: `How you look at it is pretty much how you will see it.`,
    author: `â€• Rasheed Ogunlaru`
}, {
    quote: `A language that does not affect the way you think about programming is not worth knowing.`,
    author: `â€• Alan J. Perlis`
}, {
    quote: `If at first you do not succeed, call it version 1.0`,
    author: `â€• Khayri R.R. Woulfe`
}, {
    quote: `Programming is not easy like Sunday morning, it is silent poetry`,
    author: `â€• Waseem Latif`
}, {
    quote: `Engineering is a profession that can do the job of almost all other professions`,
    author: `â€• Amit Kalantri`
}, ]
// New Quote Button
const quoteBtn = document.getElementById('quote-btn');
// Get Quote and author Section
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
// Event Handler
quoteBtn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].quote;
    author.innerHTML = quotes[random].author;
})