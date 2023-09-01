const student = {
    name: 'shamim sikdar',
    id: 121,
    address: 'faridpur',
    isSingle: true,
    friends: ['tawhid', 'sojib','sihab', 'amin'],
    movies: [{name: 'no.1', year: 2015}, {name: 'King khan', year: 2012}],
    act: function(){
        console.log('acting like shakib khan')
    },
    car: {
        brand: 'tesla',
        price: 5000000,
        made: 2021,
        manufacturer: {
            name: 'tesla',
            ceo: 'Elon Mask',
            country: 'USA'

        }
    }
}

// console.log(student);
console.log(student.act);
student.act();


