function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  //  ✨ add your code here
  const terms = document.querySelectorAll("section div")
  terms.forEach(function(term) {term.classList.add("widget")})
  // 👉 TASK 2 - Build a "Quote of the Day" widget
  //  ✨ add your code here
  const qouter = document.createElement("div")
  let random = Math.floor(Math.random() * 10)
  qouter.textContent = quotes[random].quote
  document.querySelector(".quoteoftheday").appendChild(qouter)
  
  const qouterN = document.createElement("div")
  if (quotes[random].date === null) {
    qouterN.textContent = quotes[random].author + " in an unknown date"
  } else {
    qouterN.textContent = quotes[random].author + " in " + quotes[random].date
  }
  document.querySelector(".quoteoftheday").appendChild(qouterN)
  // 👉 TASK 3 - Build a "Corporate Speak" widget
  //  ✨ add your code here
  function randomizer() {
    return Math.floor(Math.random() * 10)
  }
  const speaker = document.createElement("p")
  speaker.textContent = `We need to ${verbs[randomizer()]} our ${nouns[randomizer()]} ${adverbs[randomizer()]} in order to ${verbs[randomizer()]} our ${nouns[randomizer()]} ${adverbs[randomizer()]}.`
  document.querySelector(".corporatespeak").appendChild(speaker)
  // 👉 TASK 4 - Build a "Countdown" widget
  //  ✨ add your code here
  const timer = document.createElement("p")
  let num = 5
  let text = "Liftoff! 🚀"

  timer.textContent = `T-minus ${num}...`
  document.querySelector(".countdown").appendChild(timer)
  
  let temp = setInterval(function() {
    num--
    timer.textContent = `T-minus ${num}...`
  }, 1000)
  setTimeout(function() {
    clearInterval(temp)
    timer.textContent = text
  }, 5000)
  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here
  let friend = people[Math.floor(Math.random() * 15)]
  let friendsarr = [...friend.friends]
  let friends = []
  friendsarr.forEach(friend => {
    people.forEach(person => {
      if (friend === person.id) {
        friends.push(person)
      }
    })
  })


  const friendly = document.createElement("p")
  let final = []
  if (friends.length === 0) {
    friendly.textContent = `${friend.fname} ${friend.lname} was born in ${friend.dateOfBirth.slice(0, 4)} and has no friends.`
  } else if (friends.length === 1) {
    friendly.textContent = `${friend.fname} ${friend.lname} was born in ${friend.dateOfBirth.slice(0, 4)} and is friends with ${friends[0].fname} ${friends[0].lname}.`
  } else {
    for (let i = 0; i < friends.length -2; i++) {
      final.push(` ${friends[i].fname} ${friends[i].lname}`)
    }
    final.push(` ${friends[friends.length -2].fname} ${friends[friends.length -2].lname} and ${friends[friends.length -1].fname} ${friends[friends.length -1].lname}.`)
    friendly.textContent = `${friend.fname} ${friend.lname} was born in ${friend.dateOfBirth.slice(0, 4)} and is friends with ${final.toString()}`
  }
  document.querySelector(".friends").appendChild(friendly)
  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here
  terms.forEach((term, idx) => {
    term.setAttribute("tabindex", idx+1)
  })
  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
