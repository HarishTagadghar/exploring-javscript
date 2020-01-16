// let data = ['hh','harish'];

// for (let i = 0; i < data.length; i++) {

// if (0===0) {
//     let new = 'data';
//     data.push()    
//     console.log(data);

// }

// }
const persons = []
function add(nameOfPerson, personAge) {

    const person = {
        name: nameOfPerson,
        age: personAge
    }
    persons.push(person);
}

function read(nameOfPerson) {
    if (!nameOfPerson) {
        return persons;
    }else{

        // return persons.find(o=>o.name === nameOfPerson)

        for (let i = 0; i < persons.length; i++) {
            const member = persons[i].name;
                if (nameOfPerson === member) {
                    return persons[i];
                }
        }
    }
    
};

function update(find,nameOfperson,ageOfPerson) {
    for (let i = 0; i < persons.length; i++) {
            if (persons[i].name == find) {
                persons[i].name = nameOfperson;
                persons[i].age = ageOfPerson;
            }
    }
}

function deletePerson(name) {
    for (let i = 0; i < persons.length; i++) {
            
        if (persons[i].name == name) {
            persons.splice(i,1)
        }
    }
}


add('harish', 19);

add('nitesh',20);


// console.log(play);
const single = read('harish');

const updates = update('harish','rakesh',25);

const deleted = deletePerson('nitesh');


const all = read();
