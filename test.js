const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const port = 3000;



app.listen(port,() => {
    console.log('server started')
});



app.post('/discount', (req, res) =>{
    
    const amount = req.body.value;                // total amount

    const offers = coupons.filter((x)=>{
        
          
        
         return x.minVal <= amount  ;  
    
    });                                           //total valid offers
 

    const discountOffers = offers.filter((x)=>{
        
        const percent = x.offer / 100 * amount;

        if ( x.offer / 100 * amount > x.maxDis){
            x["discount"] = x.maxDis;   
        }
        else {
            x["discount"] = Math.round(percent);
        }
        
        return x;    
   
   });                                             // discount amount added to the offer array
    
    res.send(discountOffers)
})


// mock database 
const coupons =[
    {"offer":10,
     "minVal":500,
     "maxDis":100,
     "discount":"" },

     {"offer":20,
     "minVal":700,
     "maxDis":100,
     },

     {"offer":30,
     "minVal":1000,
     "maxDis":200,
     },

     {"offer":40,
     "minVal":2000,
     "maxDis":100,
     },

     {"offer":35,
     "minVal":1000,
     "maxDis":200,
     },

]