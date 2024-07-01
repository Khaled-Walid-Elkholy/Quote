

const qoutes = [
    {
        "qoute": "Nothing can stop the man with the right mental attitude from achieving his goal nothing on earth can help the man with the wrong mental attitude.",
        "author": "Thomas Jefferson"
        },
        {
        "qoute": "Attitude is a little thing that makes a big difference.",
        "author": "Winston Churchill"
        },
        {
        "qoute": "Your attitude, not your aptitude, will determine your altitude.",
        "author": "Zig Ziglar"
        },
        {
        "qoute": "There is little difference in people, but that little difference makes a big difference. The little difference is attitude. The big difference is whether it is positive or negative.",
        "author": "W. Clement Stone"
        },
        {
        "qoute": "Develop an attitude of gratitude, and give thanks for everything that happens to you, knowing that every step forward is a step toward achieving something bigger and better than your current situation.",
        "author": "Brian Tracy"
        },
        {
        "qoute": "Everything can be taken from a man but one thing: the last of human freedoms - to choose one's attitude in any given set of circumstances, to choose one's own way.",
        "author": "Viktor E. Frankl"
        },
        {
        "qoute": "A positive attitude causes a chain reaction of positive thoughts, events and outcomes. It is a catalyst and it sparks extraordinary results.",
        "author": "Wade Boggs"
        },
        {
        "qoute": "Morality is simply the attitude we adopt towards people whom we personally dislike.",
        "author": "Oscar Wilde"
        },
        {
        "qoute": "It is not the body's posture, but the heart's attitude that counts when we pray.",
        "author": "Billy Graham"
        },
        {
        "qoute": "People may hear your words, but they feel your attitude.",
        "author": "John C. Maxwell"
        },
        {
        "qoute": "But the attitude of faith is to let go, and become open to truth, whatever it might turn out to be.",
        "author": "Alan Watts"
        },
        {
        "qoute": "Character is the result of two things: mental attitude and the way we spend our time.",
        "author": "Elbert Hubbard"
        },
        {
        "qoute": "Our attitude towards others determines their attitude towards us.",
        "author": "Earl Nightingale"
        },
        {
        "qoute": "Adopting the right attitude can convert a negative stress into a positive one.",
        "author": "Hans Selye"
        },
        {
        "qoute": "Take the attitude of a student, never be too big to ask questions, never know too much to learn something new.",
        "author": "Og Mandino"
        },
        {
        "qoute": "The reactionary is always willing to take a progressive attitude on any issue that is dead.",
        "author": "Theodore Roosevelt"
        },
        {
        "qoute": "Ability is what you're capable of doing. Motivation determines what you do. Attitude determines how well you do it.",
        "author": "Raymond Chandler"
        },
        {
        "qoute": "Cock your hat - angles are attitudes.",
        "author": "Frank Sinatra"
        },
        {
        "qoute": "When you pray for anyone you tend to modify your personal attitude toward him.",
        "author": "Norman Vincent Peale"
        },
        {
        "qoute": "If you are going to achieve excellence in big things, you develop the habit in little matters. Excellence is not an exception, it is a prevailing attitude.",
        "author": "Colin Powell"
        },
        {
        "qoute": "I'm only going to stand before God and give an account for my life, not for somebody else's life. If I have a bad attitude, then I need to say there's no point in me blaming you for what's wrong in my life.",
        "author": "Joyce Meyer"
        },
        {
        "qoute": "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
        "author": "William James"
        },
        {
        "qoute": "My attitude is, if someone's going to criticize me, tell me to my face.",
        "author": "Simon Cowell"
        },
        {
        "qoute": "Having a positive mental attitude is asking how something can be done rather than saying it can't be done.",
        "author": "Bo Bennett"
        },
        {
        "qoute": "My general attitude to life is to enjoy every minute of every day. I never do anything with a feeling of, 'Oh God, I've got to do this today.'",
        "author": "Richard Branson"
        },
        {
        "qoute": "A complainer is like a Death Eater because there's a suction of negative energy. You can catch a great attitude from great people.",
        "author": "Barbara Corcoran"
        },
        {
        "qoute": "The meaning of things lies not in the things themselves, but in our attitude towards them.",
        "author": "Antoine de Saint-Exupery"
        },
        {
        "qoute": "Pink isn't just a color, it's an attitude!",
        "author": "Miley Cyrus"
        },
        {
        "qoute": "The remarkable thing is, we have a choice everyday regarding the attitude we will embrace for that day.",
        "author": "Charles R. Swindoll"
        },
        {
        "qoute": "A positive attitude can really make dreams come true - it did for me.",
        "author": "David Bailey"
        },
];



function newQoute(){
  
var elements = document.getElementsByTagName("i");

// Iterate through each <i> and change its visibility
for (var i = 0; i < elements.length; i++) {
    elements[i].style.visibility = "visible";
}
console.log(elements);

    //I'm using the Math dot floor here to return intger index form the array to add the index values e.x qoute$ auther
    const quouteIndex =Math.floor(Math.random()*qoutes.length);
    console.log(quouteIndex); 

    document.getElementById('quote').innerHTML= qoutes[quouteIndex].qoute;
    document.getElementById('quote-auther').innerHTML= qoutes[quouteIndex].author;


}