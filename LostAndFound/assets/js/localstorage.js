function ExampleFunction() {
				try {
					
					// Store
					SavePet("something","PuppyName,Species,Breed,Age,MissingDate,FoundDate,Missing,FoundGeocodeLat,MissingGeocodeLat,FoundGeocodeLong,MissingGeocodeLong");
					// Retrieve
					console.log(GetPets());
					
			}
				catch (e) {
					// Let the user know what went wrong.
					console.log("Error");
					console.log(e.Message);
					}
			}
			
			
			function SavePet(key, value){
				window.localStorage.setItem(key,value);
			}
			
			function GetPets(){
				try{
					var archive = {}, 
					keys = Object.keys(localStorage),
					i = keys.length;

					while ( i-- ) {
						archive[ keys[i] ] = localStorage.getItem( keys[i] );
					}
				
				}
				catch(e){
					console.log("Error");
					console.log(e.Message);
				}
				return archive;
			}
 