const router = require("express").Router(); //import router function in express package
let inspectors = require("../models/Inspectors"); //import add blood samples model


//Add Blood Samples (http://localhost:8070/addbloodsamples/add)

router.route("/add").post((req, res) => {  //get data from frontend via request

    // get request body data and assining them to variables
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const contactNumber = Number(req.body.contactNumber);
    const email = req.body.email;
    const nic = req.body.nic;
    const city = req.body.city;
    const state = req.body.state;


    const newInspectors = new inspectors({
        firstName,
        lastName,
        contactNumber,
        email,
        nic,
        city,
        state
    })

    //pass the variables to database
    newInspectors.save().then(() => {
        res.json("inspector added succecfull")
    }).catch((err) => {
        console.log(err); //catch errors
    })
})




//GET ALL BLOOD SAMPLES DETAILS (http://localhost:8080/addbloodsamples/)

router.route("/").get((req, res) => {

    inspectors.find().then((inspectors) => {
        res.json(inspectors) //pass data from db to frontend
    }).catch((err) => {
        console.log(err) //display errors
    })

})


//GET SEARCH BLOOD SAMPLES DETAILS (http://localhost:8080/addbloodsamples/search)
router.route("/search").get((req, res) => {

    const { q } = req.query;

    const keys = ["firstName"];

    const search = (inspectors) => {
        return inspectors.filter((item) =>
            keys.some((key) => item[key].toLowerCase().includes(q))
        );
    };


    inspectors.find().then((inspectors) => {
        res.json(search(inspectors))
    }).catch((err) => {
        console.log(err)
    })
})





//GET ONE BLOOD SAMPLE By ID (http://localhost:8080/addbloodsamples/get/<userID>)

router.route("/get/:id").get(async (req, res) => { // get data from frontend via request. async function is used to increase the performance 
    let inspectorID = req.params.id; //fetch the id parameter in url

    const pack = await inspectors.findById(inspectorID) //pass two parameters(userid,object that store seller data) and find user by id and update relevent data
        .then((inspectors) => {
            res.status(200).send({ status: "inspector fetched", inspectors }) //if find success, display success message
        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error with find data" }); //if not display error message
        })

})





//UPDATE ONE BLOOD SAMPLE (http://localhost:8080/addbloodsamples/update/<userID>)

router.route("/update/:id").put(async (req, res) => { // get data from frontend via request. async function is used to increase the performance 
    let inspectorID = req.params.id; //fetch the id parameter in url
    const { firstName, lastName, contactNumber, email, nic, city, state } = req.body; //fetch data from frontend

    const updateInspector = { //create update object and pass values getting from frontend
        firstName,
        lastName,
        contactNumber,
        email,
        nic,
        city,
        state
    }

    const update = await inspectors.findByIdAndUpdate(inspectorID, updateInspector) //pass two parameters(userid,object that store seller data) and find user by id and update relevent data
        .then(() => {
            res.status(200).send({ status: "inspector updated" }) //if update success, display success message
        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error with updating data" }); //if not display error message
        })

})





//DELETE SAMPLE (http://localhost:8080/addbloodsamples/delete/<userID>)

router.route("/delete/:id").delete(async (req, res) => { //get userid from frontend
    let inspectorID = req.params.id; // assign userid to variable

    await inspectors.findByIdAndDelete(inspectorID) //delete data that related to packId
        .then(() => {
            res.status(200).send({ status: "passenger deleted" }); //display user deleted successfull
        }).catch((err) => {
            console.log(err.message)
            res.status(500).send({ status: "Error with delete user", error: err.message }); //display error message
        })
})


module.exports = router;