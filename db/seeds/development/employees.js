exports.seed = function(knex, Promise) {
    return knex('employees').del()
        .then(function(){
            return knex('employees').insert([
                {
                    firstName: 'John', 
                    middleInitial: 'A', 
                    lastName: 'Smith', 
                    birthDate: 'Fri Mar 25 1985', 
                    startDate: 'Tue Apr 10 2010', 
                    status: true
                }, {
                    firstName: 'Timothy', 
                    middleInitial: 'C', 
                    lastName: 'Greene', 
                    birthDate: 'Thur Jan 13 1975', 
                    startDate: 'Tue May 4 2005', 
                    status: false
                }, {
                    firstName: 'Carl', 
                    middleInitial: 'M', 
                    lastName: 'Edmond', 
                    birthDate: 'Mon May 11 1995', 
                    startDate: 'Mon Nov 7 2007', 
                    status: true
                }, {
                    firstName: 'Chris', 
                    middleInitial: 'L', 
                    lastName: 'Traeger', 
                    birthDate: 'Fri Feb 28 1977', 
                    startDate: 'Wed July 22 2009', 
                    status: true
                }
            ])
        }
    )
}