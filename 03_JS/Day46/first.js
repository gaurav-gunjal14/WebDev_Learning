// based on mounth
function getZodiacSign(day, month) {
    const signs = [
    ["Capricorn", 20], ["Aquarius", 19], ["Pisces", 20],
    ["Aries", 20], ["Taurus", 21], ["Gemini", 21],
    ["Cancer", 23], ["Leo", 23], ["Virgo", 23],
    ["Libra", 23], ["Scorpio", 22], ["Sagittarius", 22], ["Capricorn", 31]
    ];
    return day < signs[month - 1][1] ? signs[month - 1][0] : signs[month][0];
}

// based on date
const compliments = [
  "You have a beautiful smile.",
  "Your positive energy is contagious.",
  "You are incredibly thoughtful.",
  "You have a sharp mind.",
  "You light up every room you enter.",
  "Your creativity knows no bounds.",
  "You inspire those around you.",
  "You have a kind heart.",
  "You handle challenges with grace.",
  "You're an amazing friend.",
  "Your confidence is admirable.",
  "You always know how to make others laugh.",
  "You are a natural leader.",
  "You bring out the best in people.",
  "Your ideas are brilliant.",
  "You are a great listener.",
  "You are dependable and trustworthy.",
  "Your determination is impressive.",
  "You are unique and special.",
  "Your inner strength is admirable.",
  "You have a great sense of humor.",
  "You radiate positivity.",
  "You make the world a better place.",
  "You are full of great potential.",
  "You are wise beyond your years.",
  "You are resilient and strong.",
  "You are brave and courageous.",
  "You are thoughtful and considerate.",
  "You have a great sense of style.",
  "You are constantly growing and evolving.",
  "You are loved more than you know."
];

// size 20
const victimCardCompliments = [
  "You always do good for others, even when they don’t return the favor.",
  "You stay kind even when the world is unfair to you.",
  "Your heart is pure, even when people take it for granted.",
  "You carry everyone’s burdens but rarely get asked how you are.",
  "You forgive so easily, even when they don’t deserve it.",
  "You give second chances while others wouldn’t even give a first.",
  "You show up for people who wouldn’t do the same for you.",
  "You keep caring, even after being hurt again and again.",
  "You believe in others, even when they stop believing in you.",
  "You fight silently for everyone and expect nothing in return.",
  "You never complain, even when you're the one hurting the most.",
  "You always understand others, even when no one understands you.",
  "You keep supporting others, even when your own cup is empty.",
  "You stay strong for everyone, even when you’re falling apart inside.",
  "You give your best to people who only give you their worst.",
  "You continue loving, even after being left unloved.",
  "You try to keep everyone happy, even if it costs your own peace.",
  "You stay loyal to people who often forget your worth.",
  "You sacrifice your time and energy, even when it goes unnoticed.",
  "You never ask for much, but always give your all."
];


// size 30
const dailyRecommendations = [
  "Feed a street dog or cat today.",
  "Call a loved one and check on them.",
  "Water a plant or plant a seed.",
  "Donate old clothes you no longer wear.",
  "Write down 3 things you're grateful for.",
  "Help someone without expecting anything in return.",
  "Smile at a stranger—it might make their day.",
  "Take a 15-minute walk in nature.",
  "Compliment someone genuinely.",
  "Switch off your phone for 1 hour and enjoy silence.",
  "Write a kind note to yourself.",
  "Pick up trash from a public place.",
  "Cook something healthy for yourself or your family.",
  "Spend time with an elderly person and listen to their stories.",
  "Avoid gossip for the entire day.",
  "Wake up early and enjoy the sunrise.",
  "Practice 10 minutes of deep breathing or meditation.",
  "Say thank you to someone who often goes unnoticed.",
  "Do one thing today that scares you a little.",
  "Buy a meal for someone in need.",
  "Avoid complaining for the whole day.",
  "Learn one new skill or fact today.",
  "Let go of a grudge or forgive someone silently.",
  "Give genuine praise to a co-worker, classmate, or sibling.",
  "Help a younger person with something they struggle with.",
  "Drink more water and eat fresh fruits.",
  "Spend 10 minutes cleaning or decluttering your room.",
  "Be patient with someone who's struggling.",
  "Share something valuable you’ve learned with a friend.",
  "Look at the stars tonight and reflect in silence."
];

// size 20
const futurePredictions = [
  "You will become a crorepati one day.",
  "You will inspire millions with your story.",
  "Your dream job is closer than you think.",
  "You will travel to your favorite destination soon.",
  "Unexpected money is coming your way.",
  "You will be known for your talent.",
  "Your hard work will finally pay off big time.",
  "You’ll soon meet someone who changes your life forever.",
  "One day, your name will be remembered.",
  "A big opportunity is about to knock on your door.",
  "Your future home will be even better than your dreams.",
  "You’ll build a life filled with love and success.",
  "You will turn your passion into a profession.",
  "Fame and recognition are written in your destiny.",
  "The world will see your greatness soon.",
  "You will create something that lasts forever.",
  "You will be the reason for someone’s smile every day.",
  "Your future self will be proud of you.",
  "Massive success is already on its way to you.",
  "You will live a life people wish they had."
];


const form = document.getElementById("astroForm");

form.addEventListener("submit", (event)=>{
    event.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const surname = document.getElementById("surname").value;
    const Day = document.getElementById("birthDate").value;
    const Mounth = document.getElementById("birthMonth").value;
    const Year = document.getElementById("birthYear")
})