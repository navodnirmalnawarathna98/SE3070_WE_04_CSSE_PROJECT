const router = require("express").Router(); //import router function in express package
let passengers = require("../models/passengers"); //import add blood samples model


//Add Blood Samples (http://localhost:8070/addbloodsamples/add)

router.route("/add").post((req, res) => {  //get data from frontend via request

    // get request body data and assining them to variables
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const contactNumber = Number(req.body.contactNumber);
    const email = req.body.email;
    const nic = req.body.nic;
    const cardType = req.body.cardType;
    const passengerType = req.body.passengerType;
    const state = req.body.state;


    const newPassengers = new passengers({
        firstName,
        lastName,
        contactNumber,
        email,
        nic,
        cardType,
        passengerType,
        state
    })

    //pass the variables to database
    newPassengers.save().then(() => {
        res.json("passenger added succecfull")
    }).catch((err) => {
        console.log(err); //catch errors
    })
})




//GET ALL BLOOD SAMPLES DETAILS (http://localhost:8080/addbloodsamples/)

router.route("/").get((req, res) => {

    passengers.find().then((passengers) => {
        res.json(passengers) //pass data from db to frontend
    }).catch((err) => {
        console.log(err) //display errors
    })

})


//GET SEARCH BLOOD SAMPLES DETAILS (http://localhost:8080/addbloodsamples/search)
router.route("/search").get((req, res) => {

    const { q } = req.query;

    const keys = ["firstName"];

    const search = (passengers) => {
        return passengers.filter((item) =>
            keys.some((key) => item[key].toLowerCase().includes(q))
        );
    };


    passengers.find().then((passengers) => {
        res.json(search(passengers))
    }).catch((err) => {
        console.log(err)
    })
})





//GET ONE BLOOD SAMPLE By ID (http://localhost:8080/addbloodsamples/get/<userID>)

router.route("/get/:id").get(async (req, res) => { // get data from frontend via request. async function is used to increase the performance 
    let passengerID = req.params.id; //fetch the id parameter in url

    const pack = await passengers.findById(passengerID) //pass two parameters(userid,object that store seller data) and find user by id and update relevent data
        .then((passengers) => {
            res.status(200).send({ status: "passenger fetched", passengers }) //if find success, display success message
        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error with find data" }); //if not display error message
        })

})





//UPDATE ONE BLOOD SAMPLE (http://localhost:8080/addbloodsamples/update/<userID>)

router.route("/update/:id").put(async (req, res) => { // get data from frontend via request. async function is used to increase the performance 
    let passengerID = req.params.id; //fetch the id parameter in url
    const { firstName, lastName, contactNumber, email, nic, cardType, passengerType, state } = req.body; //fetch data from frontend

    const updatePassenger = { //create update object and pass values getting from frontend
        firstName,
        lastName,
        contactNumber,
        email,
        nic,
        cardType,
        passengerType,
        state
    }

    const update = await passengers.findByIdAndUpdate(passengerID, updatePassenger) //pass two parameters(userid,object that store seller data) and find user by id and update relevent data
        .then(() => {
            res.status(200).send({ status: "passenger updated" }) //if update success, display success message
        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error with updating data" }); //if not display error message
        })

})





//DELETE SAMPLE (http://localhost:8080/addbloodsamples/delete/<userID>)

router.route("/delete/:id").delete(async (req, res) => { //get userid from frontend
    let passengerID = req.params.id; // assign userid to variable

    await passengers.findByIdAndDelete(passengerID) //delete data that related to packId
        .then(() => {
            res.status(200).send({ status: "passenger deleted" }); //display user deleted successfull
        }).catch((err) => {
            console.log(err.message)
            res.status(500).send({ status: "Error with delete user", error: err.message }); //display error message
        })
})


module.exports = router;