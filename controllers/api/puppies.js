//We will be responding with JSON and a Status Code to every HTTP request to our API.

// function index(req, res) {
//     Puppy.find({}, function(err, puppies) {
//         res.status(200).json(puppies);
//     });
// }

const index = () => {
    Puppy.find({})
    .then((puppies)=> {
        res.status(200).json(puppies)
    })
    .catch((err)=> {
        console.log(err)
    })
}

// function create(req, res) {
//     Puppy.create(req.body).then(function(puppy) {
//       res.status(201).json(puppy);
//     });
// }

const create = () => {
    Puppy.create(req.body)
    .then((puppy)=> {
        res.status(200).json(puppy)
    })
    .catch((err)=> {
        console.log(err)
    })
}

// const index = () => {
//     Puppy.find({})
//     .then((puppies)=> {
//         res.status(200).json(puppies)
//     })
//     .catch((err)=> {
//         console.log(err)
//     })
// }
// const index = () => {
//     Puppy.find({})
//     .then((puppies)=> {
//         res.status(200).json(puppies)
//     })
//     .catch((err)=> {
//         console.log(err)
//     })
// }
// const index = () => {
//     Puppy.find({})
//     .then((puppies)=> {
//         res.status(200).json(puppies)
//     })
//     .catch((err)=> {
//         console.log(err)
//     })
// }
// const index = () => {
//     Puppy.find({})
//     .then((puppies)=> {
//         res.status(200).json(puppies)
//     })
//     .catch((err)=> {
//         console.log(err)
//     })
// }

module.exports = {
    index,
    create,
    // show,
    // remove,
    // update
}