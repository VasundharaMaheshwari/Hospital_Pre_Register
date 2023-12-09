const { Schema, default: mongoose } = require('mongoose')
const ChildSchema = new Schema({
    cname: {
        type: String
    },
    cage: {
        type: Number
    },
    ccontact: {
        type: Number
    }
})



// const ParentSchema = new Schema({
//     childrenno: {
//         type: Number,
//         // required: true
//     },
//     childrendetails: {
//         type: [ChildSchema]
//     }
// })



const RegisterSchema = new Schema({
    // photo: {
    //     type: String,
    //     required: true
    // },
    // sign: {
    //     type: String,
    //     required: true
    // },
    name: {
        type: String,
        //required: true
    },
    middle_name: {
        type: String,
        //required: true
    },
    last_name: {
        type: String,
        //required: true
    },
    address: {
        type: String,
        //required: true
    },
    birthdate: {
        type: Date,
        //required: true
    },
    age: {
        type: String,
        //required: true
    },
    gender: {
        type: String,
        //required: true
    },
    email: {
        type: String,
        //required: true
    },
    citizenship: {
        type: String,
        //required: true
    },
    citiproof: {
        type: String,
        //required: true
    },
    state: {
        type: String,
        //required: true
    },
    city: {
        type: String,
        //required: true
    },
    pincode: {
        type: Number,
        //required: true
    },
    maritalstatus: {
        status: {
            type: String,
            //required: true
        },
        spouse: {
            type: ChildSchema
        }
    },
    cno: {
        childrenno: {
            type: Number
        },
        childrendetails: {
             type: [ChildSchema]
        }
        //required: true
    },
    emergency: {
        type: Number,
        //required: true
    },
    education: {
        type: String,
        //required: true
    },
    eduproof: {
        type: String,
        //required: true
    },
    edudoc: {
        type: String,
        //required: true
    },
    institute: {
        type: String,
        //required: true
    },
    gradyear: {
        type: Number,
        //required: true
    },
    employer:{
        type: String,
        //required: true
    },
    eaddress: {
        type: String,
        //required: true
    },
    branch: {
        type: String,
        //required: true
    },
    edate: {
        type: Date,
        //required: true
    },
    allergies: {
        type: String,
        //required: true
    },
    pastmeds: {
        type: String
    },
    immu: {
        type: String
    },
    bloodgrp: {
        type: String
    },
    diet: {
        type: String
    },
    exercise: {
        type: String
    },
    rh: {
        type: String
    },
    smoke: {
        type: String
    },
    alcohol: {
        type: String
    },
    drugs: {
        type: String
    },
    meds: {
        type: String,
        //required: true
    },
    btransp: {
        type: String
    },
    bp: {
        type: String
    },
    diabetes: {
        type: String
    },
    asthma: {
        type: String
    },
    hypertension: {
        type: String
    },
    cardiac: {
        type: String
    },
    mentalhealth: {
        type: String
    },
    anemia: {
        type: String
    },
    fammedhist: {
        type: String,
       // required: true
    },
    illness: {
        type: String,
       // required: true
    },
    surgery: {
        type: String,
       // required: true
    },
    hospi: {
        type: String,
       // required: true
    },
    medaddonhist: {
        type: String 
    },
    username: {
        type: String,
        //required: true
    },
    password: {
        type: String,
        //required: true
    },
    uid: {
        type: String,
        //required: true
    }
})

const ContactSchema = new Schema({
    namer: {
        type: String
    },
    emailid: {
        type: String
    },
    message: {
        type: String
    }
})

const ContactUs = mongoose.model('Contact', ContactSchema)
const Register = mongoose.model('User', RegisterSchema)
module.exports = { Register, ContactUs }