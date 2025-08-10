// Define the category variables
            let permanents=0;
            let usables=0;
            let transportm=0;
            let foodm=0;
            let necessitiesm=0;
            let items=0;

        //function that adds and removes the money and then sends it to local storage and prints it
        function disappointmentlook(){

            let amt=parseFloat(document.getElementById("amount").value);
            let category=document.getElementById("category").value;
            let typeOp=document.getElementById("typeOfOperation").value;


            event.preventDefault(); //stops the webpage from refreshing everytime submit is clicked

            //addition of money
            if (typeOp=="+")
            {
                switch(category)
                {
                    case "psave":
                        permanents = parseFloat(localStorage.getItem("permanents"))+amt; //adds the amount to the permanent savings
                        localStorage.setItem("permanents",permanents)
                        break;
                    case "usave":
                        usables = parseFloat(localStorage.getItem("usables"))+amt;
                        localStorage.setItem("usables",usables) //adds the amount to the usable savings
                        break;
                    case "transport":
                        transportm =parseFloat(localStorage.getItem("transportm"))+amt; //adds the amount used for transport
                        localStorage.setItem("transportm",transportm);
                        break;
                    case "food":
                        foodm = parseFloat(localStorage.getItem("foodm"))+amt; //adds the amount used for food
                        localStorage.setItem("foodm",foodm);
                        break;
                    case "necessities":
                        necessitiesm = parseFloat(localStorage.getItem("necessitiesm"))+amt; //adds the amount used for necessities 
                        localStorage.setItem("necessitiesm",necessitiesm);                    
                        break;
                    case "items":
                        items = parseFloat(localStorage.getItem("items"))+amt;; //adds the amount used to buy items
                        localStorage.setItem("items",items); 
                        break;        
                }
            }
            
            //removal of money 
            else if(typeOp=="-")
            {
               switch(category)
            {
                case "psave":
                    permanents = parseFloat(localStorage.getItem("permanents"))-amt; //subtracts the amount to the permanent savings
                    localStorage.setItem("permanents",permanents)
                    break;
                case "usave":
                    usables = parseFloat(localStorage.getItem("usables"))-amt;
                    localStorage.setItem("usables",usables) //subtracts the amount to the usable savings
                    break;
                case "transport":
                    transportm =parseFloat(localStorage.getItem("transportm"))-amt; //subtracts the amount used for transport
                    localStorage.setItem("transportm",transportm);
                    break;
                case "food":
                    foodm = parseFloat(localStorage.getItem("foodm"))-amt; //subtracts the amount used for food
                    localStorage.setItem("foodm",foodm);
                    break;
                case "necessities":
                    necessitiesm = parseFloat(localStorage.getItem("necessitiesm"))-amt; //subtracts the amount used for necessities 
                    localStorage.setItem("necessitiesm",necessitiesm);                    
                    break;
                case "items":
                    items = parseFloat(localStorage.getItem("items"))-amt;; //subtracts the amount used to buy items
                    localStorage.setItem("items",items); 
                    break;        
            } 
            }
        
            //prints all the values
            document.getElementById("transportationMoney").innerHTML=localStorage.getItem("transportm")+ " INR";
            document.getElementById("foodMoney").innerHTML=localStorage.getItem("foodm")+ " INR";
            document.getElementById("necessMoney").innerHTML=localStorage.getItem("necessitiesm")+ " INR";
            document.getElementById("itemsMoney").innerHTML=localStorage.getItem("items")+ " INR";
            document.getElementById("psave").innerHTML=localStorage.getItem("permanents")+ " INR";
            document.getElementById("usave").innerHTML=localStorage.getItem("usables")+ " INR";
            
            //adds and prints the total
            let totalMoneyUsed=parseFloat(localStorage.getItem("transportm"))
                                +parseFloat(localStorage.getItem("foodm"))
                                +parseFloat(localStorage.getItem("necessitiesm"))
                                +parseFloat(localStorage.getItem("items"));
            localStorage.setItem("totalMoneyUsed",totalMoneyUsed);
            document.getElementById("totalAmt").innerHTML=localStorage.getItem("totalMoneyUsed")+ " INR";
        }
        
        //clears all the data stored in the local storage
        function cleardata()
        {
             localStorage.setItem("transportm","0");
             localStorage.setItem("foodm","0");
             localStorage.setItem("necessitiesm","0");
             localStorage.setItem("items","0");
             localStorage.setItem("usables","0");
             localStorage.setItem("permanents","0");
        }