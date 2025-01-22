this.firstName = "Leminhthanh";
var person = {
    firstName: "Anh",
    lastName: "Tranngoc",
    fullName: function() {
        console.log(this.firstName + " " + this.lastName);
        

        const v = ()=> {
            console.log(this.firstName + " " + this.lastName + "v");  
        }
        const a = function() {
            console.log(this + " " + this.lastName + "a");
        }
        
        v();
        a();
        var person2 = {
            firstName: "Anh123",
            lastName: "Tranngoc132",
            fullName: function() {
                console.log(this.firstName + " " + this.lastName + " d");
                
                const v = ()=> {
                    console.log(this.firstName + " " + this.lastName + " b");  
                }
                const a = function() {
                    console.log(this.firstName + " " + this.lastName + " c");
                }
                v();
        a();
                
            },
            nameFull: ()=> {
                console.log(this.firstName + " " + this.lastName  + " e");
            }
            
        }

        person2.fullName();
        person2.nameFull();      
        
    },
    nameFull: ()=> {
        console.log(this.firstName + " " + this.lastName );
    }
    
}
var a = person.fullName;
//console.log(a);
person.fullName();
person.nameFull();

//console.log(arguments.callee.toString());

