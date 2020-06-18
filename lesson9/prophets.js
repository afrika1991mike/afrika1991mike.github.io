
// set the json source url
const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
// set fetch
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    for (let i = 0; i < prophets.length; i++ ){
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p1= document.createElement('p');
        let birthplace= document.createElement('birthplace');
        let image= document.createElement('img');

        
        h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
        p1.innerHTML ="<strong>"+ prophets[i].birthdate +"</strong>";
        birthplace.textContent=prophets[i].birthplace;
        image.setAttribute('src', prophets[i].imageurl);
        
        card.appendChild(h2);
        card.appendChild(p1);
        card.appendChild(birthplace)
        card.appendChild(image)
        
        document.querySelector('div.cards').appendChild(card);
    }

  });
  