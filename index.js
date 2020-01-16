const fullName = "Hairsh Tagadghar"

const nameCollection = fullName.split(' ')

const firstName = nameCollection[0]
const lastName = nameCollection[1]


const person = {}

for (let i = 0; i < 5; i++) {

    if (i === 0) {
        person.name = "Harish";
        // break; // Breaks complete iteration 
        // continue; // Jumps to next iteration
    }
    if (i === 1) {
        person.place = "Bidar"
        continue;

    }
    if (i === 2) {
        person.age = 20
        continue;

    }
    if (i === 3) {
        person.profession = "DEV"
        continue;

    }
    if (i === 4) {
        person.country = "India"
        continue;

    }

}

[].fi