                // // to filter all country flags.
                // for (var index of flags) {
                //     const flaglist = index.flag;
                //     console.log(flaglist);
                // }

                // // to filter all country names.
                // for (var index of flags) {
                //     const countrylist = index.name;
                //     console.log(countrylist);
                // }

                // // to get the data in asia continent
                // const asiaCountries = flags.filter(fl => fl.region === "Asia");
                // console.log(asiaCountries);

                // // to get the country names in asia continent.
                // const asiaCountryList = flags.filter(fl => fl.region === "Asia");
                // for (var index of asiaCountryList) {
                //     const asiaCountrynames = index.name;
                //     console.log(asiaCountrynames);
                // }

                // // to get the population less than 2 lakhs
                // const population = flags.filter(fl => fl.population < 200000);
                // console.log(population);

                // // to display all countries population
                // for (var index of flags) {
                //     const population = index.population;
                //     console.log(population);
                // }

                // // to get the total population of all countries using reduce method
                // const totalPopulation = flags.reduce((a, c) => a + c.population, 0);
                // console.log(totalPopulation);

                // for( var index of flags) {
                //     for(var i=0;i<1;i++){
                //         currency.push (index.currencies[i].code);
                //     }
                // }
                // console.log(currency);
                
                console.log(flags[0].currencies[0].code);
                console.log(flags.length);

                // for(i=0;i<249;i++){
                //     for(j=0;j<1;j++){
                //         console.log(flags[i].currencies[j]);
                //     }   
                // }


                // to print country names which uses US Dollar as currency.
                // let currency ; 
                // for( var index of flags) {
                //     for (i=0;i<7;i++) {
                //         currency = flags.filter( fl => fl.currencies === "USD");
                //     }
                // }
                // console.log(currency);


                // // to display all country currencies:
                // for (var index of flags) {
                //     for (i = 0; i < currency.length; i++) {
                //         const currency = flags.currency[i].code;
                //         console.log(currency);
                //     }
                // }


                // to get the list of countries flags, names and capital
                //  for (var index of flags) {
                //         document.body.innerHTML += `
                //             <div>
                //                 <img src= ${index.flag}/>
                //                 <h1> Country Name : ${index.name}</h1>
                //                 <p> Capital Name : ${index.capital}</p>
                //             </div>`;
                //     }


                // // print all countries which use USD as currency using forEach loop
                // flags.forEach ( fl => {
                //     fl.currencies.forEach( cr => {
                //         if( cr.code === "USD"){
                //             console.log(fl.name, cr.code)
                //         }
                //     })
                // })