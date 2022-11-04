const router = require("express").Router(); //import router function in express package
let card = require("../models/Card"); //import add blood samples model


//Add Blood Samples (http://localhost:8070/addbloodsamples/add)

router.route("/add").post((req, res) => {  //get data from frontend via request

    // get request body data and assining them to variables
    const firstName = req.body.firstName;
    const charge = req.body.charge;
    const passengerType = req.body.passengerType;
    const period = req.body.period;


    const newCard = new card({
        firstName,
        charge,
        passengerType,
        period
    })

    //pass the variables to database
    newCard.save().then(() => {
        res.json("card added succecfull")
    }).catch((err) => {
        console.log(err); //catch errors
    })
})


module.exports = router;