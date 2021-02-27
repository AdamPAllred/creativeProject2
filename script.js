document.getElementById("dndButton").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("spellInput").value;
  let s = document.getElementById('selector');
  let type = s.options[s.selectedIndex].value;


  if(type === "spells") {
    if (value === "") {
        const url = "https://www.dnd5eapi.co/api/spells/";
        fetch(url)
         .then(function(response) {
           return response.json();
         }).then(function(json) {
           console.log(json);
           let results = "";
           results += "<h2> List of all the spells </h2>";
           results += '<ul>';
           for (let i=0; i < json.results.length; i++) {
            results += "<li>" + json.results[i].index + "</li>";
            }
            results += '</ul>';
             document.getElementById("dndResults").innerHTML = results;
       });
     }
    else {
    const url = "https://www.dnd5eapi.co/api/spells/" + value;
      fetch(url)
       .then(function(response) {
         return response.json();
       }).then(function(json) {
         console.log(json);
         let results = "";
         results += '<h2> Spell: ' + json.name + "</h2>";
         results += "<h3> Basic Information </h3>";

         results += '<ul>';
          results += "<li> School: " + json.school.name + "</li>";
          results += "<li> Range: " + json.range + "</li>";
          results += "<li> Level: " + json.level + "</li>";
          results += '</ul>';

          results += '<h3> Materials Needed </h3>';
          results += '<p>' + json.material + '</p>';
          results += '<h3> Description of Spell </h3>';
          results += '<p id="para">' + json.desc[0] + '</p>';
          results += '<h3> Casting Time </h3>';
          results += '<p>' + json.casting_time + '</p>';
           document.getElementById("dndResults").innerHTML = results;
     });
    }
   }
   else if (type === "classes") {
     if (value === "") {
         const url = "https://www.dnd5eapi.co/api/classes/";
         fetch(url)
          .then(function(response) {
            return response.json();
          }).then(function(json) {
            console.log(json);
            let results = "";
            results += "<h2> List of all the Classes </h2>";
            results += '<ul>';
            for (let i=0; i < json.results.length; i++) {
             results += "<li>" + json.results[i].index + "</li>";
             }
             results += '</ul>';
              document.getElementById("dndResults").innerHTML = results;
        });
      }
     else {
     const url = "https://www.dnd5eapi.co/api/classes/" + value;
       fetch(url)
        .then(function(response) {
          return response.json();
        }).then(function(json) {
          console.log(json);
          let results = "";
          results += '<h2> Class: ' + json.name + "</h2>";
          results += '<h3> Proficiencies </h3>';

          results += '<ul>';
          for (let i=0; i < json.proficiencies.length; i++) {
           results += "<li>" + json.proficiencies[i].name + "</li>";
           }
           results += '</ul>';

           results += '<h3> SubClasses </h3>';
           results += '<ul>';
           for (let i=0; i < json.subclasses.length; i++) {
            results += "<li>" + json.subclasses[i].name + "</li>";
            }
            results += '</ul>';

           results += '<h3> Starting Equipment </h3>';
           results += '<ul>';
           for (let i=0; i < json.starting_equipment.length; i++) {
            results += "<li>" + json.starting_equipment[i].equipment.name + "</li>";
            }
            results += '</ul>';
            document.getElementById("dndResults").innerHTML = results;
      });
     }
   }
   else if (type === "monsters") {
     if (value === "") {
         const url = "https://www.dnd5eapi.co/api/monsters/";
         fetch(url)
          .then(function(response) {
            return response.json();
          }).then(function(json) {
            console.log(json);
            let results = "";
            results += "<h2> List of all the Monsters </h2>";
            results += '<ul>';
            for (let i=0; i < json.results.length; i++) {
             results += "<li>" + json.results[i].index + "</li>";
             }
             results += '</ul>';
              document.getElementById("dndResults").innerHTML = results;
        });
      }
     else {
     const url = "https://www.dnd5eapi.co/api/monsters/" + value;
       fetch(url)
        .then(function(response) {
          return response.json();
        }).then(function(json) {
          console.log(json);
          let results = "";
          results += '<h2> Monster: ' + json.name + "</h2>";
          results += '<h3> Type </h3>';
          results += "<p>" + json.type + "</p>";
          results += '<h3> Alignment </h3>';
          results += "<p>" + json.alignment + "</p>";

          results += '<h3> Profeciencies </h3>';
          if (json.proficiencies.length === 0) {
            results += '<p> None </p>';
          }
          else {
            results += '<ul>';
            for (let i=0; i < json.proficiencies.length; i++) {
             results += "<li>" + json.proficiencies[i].proficiency.name + "</li>";
             }
             results += '</ul>';
           }

           results += '<h3> XP  </h3>';
           results += "<p>" + json.xp + "</p>";
            document.getElementById("dndResults").innerHTML = results;
      });
     }
   }



});
