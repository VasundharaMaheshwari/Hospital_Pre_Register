const express = require('express')
const connectDB = require('./db') //destructuring for required components??
const { Register, ContactUs } = require('./model.js')
const mongoose = require('mongoose')
const body = require('body-parser')
const app = express()
const multer = require('multer')
const { MongoClient } = require('mongodb')

const upload = multer({dest: 'uploads/'})

const handlebars = require("express-handlebars");
//Sets our app to use the handlebars engine
app.set("view engine", "handlebars");
//Sets handlebars configurations (we will go through them later on)
app.engine("handlebars", handlebars.engine({ defaultLayout: "main" }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json())


// connectToDb((err) => {
//     if(!err){
//         app.listen(5500,() => {
//             console.log('listening on 5500')
//         })
//         db = getDb()
//     }
// })
// to display images using handlebars apparently



app.use(express.static('public', { setHeaders: (res, path) => {
    if (path.endsWith('.png')) {
      res.setHeader('Content-Type', 'image/png');
    }
  }}));  




// get routes and linking pages express.Router() and router.get kinda similar to app.get and express()??? works the same for now so i dont care
app.get('/',(req,res) => {
    res.render('home.hbs')
})
app.get('/index.html',(req,res) => {
    res.render('register.hbs')
})
app.get('/qr.html',(req,res) => {
    res.render('qr.hbs')
})
app.get('/index2.html',(req,res) => {
    res.render('faq.hbs')
})
app.get('/Front.html',(req,res) => {
    res.render('home.hbs')
})
app.get('/contactblack.html',(req,res) => {
    res.render('contact.hbs')
})
app.get('/login.html',(req,res) => {
    res.render('login.hbs')
})



app.post('/index.html',async (req,res) => {
    try{
        const numChildren = parseInt(req.body.num_children);
        const childrendetails = [];

        for (let i = 1; i <= numChildren; i++) {
            childrendetails.push({
            cname: req.body[`child_name_${i}`],
            cage: req.body[`child_age_${i}`],
            ccontact: req.body[`child_contact_${i}`] })
            } 
        // console.log(childrendetails)
        // console.log(req.body)
        const trial = new Register({
        name: req.body.name,
        middle_name: req.body.middle_name,
        last_name: req.body.last_name,
        address: req.body.address,
        birthdate: req.body.birthdate,
        age: req.body.age,
        gender: req.body.gender,
        email: req.body.email,
        citizenship: req.body.citizenship_proof,
        citiproof: req.body.citizenship_proof_upload,
        state: req.body.state,
        city: req.body.city,
        pincode: req.body.pin_code,
        emergency: req.body.emergency_contact,
        education: req.body.education_status,
        eduproof: req.body.education_proof,
        edudoc: req.body.education_proof_upload,
        institute: req.body.nameuniversity,
        gradyear: req.body.gradyear,
        employer: req.body.employment,
        eaddress: req.body.em_add,
        branch: req.body.branchname,
        edate: req.body.em_date,
        allergies: req.body.allergies,
        pastmeds: req.body.pastmeds,
        immu: req.body.immu,
        bloodgrp: req.body.bldgrp,
        diet: req.body.diet,
        exercise: req.body.ex,
        rh: req.body.repro,
        smoke: req.body.smoke,
        alcohol: req.body.alcohol,
        drugs: req.body.drugs,
        meds: req.body.medicines,
        btransp: req.body.btrans,
        bp: req.body.BP,
        diabetes: req.body.Diabetes,
        asthma: req.body.Asthma,
        hypertension: req.body.Hypertension,
        cardiac: req.body.CardiacConditions,
        mentalhealth: req.body.Psychological,
        anemia: req.body.Anemia,
        fammedhist: req.body.medicalhist,
        illness: req.body.ill,
        surgery: req.body.surgery,
        hospi: req.body.hosp,
        medaddonhist: req.body.Add_Info,
        username: req.body.username,
        password: req.body.pass,
        uid: req.body.generatedID,
        maritalstatus: {
            status: req.body.marital_status,
            spouse: {
                cname: req.body.spouse_name,
                cage: req.body.spouse_age,
                ccontact: req.body.spouse_contact
            }
        },
        cno: {
            childrenno: numChildren,
            childrendetails: childrendetails
        }
    })
    //console.log(trial)
    await trial.save()
return res.redirect('/Front.html')
} catch (err) {
        console.log(err)
    }
// upload.single('img')
})

app.post('/login.html', async (req,res) => {
    try{
        const emaillg = req.body.email;
        const passwordlg = req.body.password;
        const user = await Register.findOne({ email: emaillg, password: passwordlg })
        if(user == null){
            res.send('Please register')
        }else{
            return res.render('main.hbs',{layout: 'index.hbs', 
            name: user.name, 
            middle_name: user.middle_name,
            last_name: user.last_name,
            address: user.address,
            citizenship: user.citizenship,
            citiproof: user.citiproof,
            state: user.state,
            city: user.city,
            pincode: user.pincode,
            birthdate: user.birthdate,
            age: user.age,
            gender: user.gender,
            email: user.email,
            emergency: user.emergency,
            education: user.education,
            eduproof: user.eduproof,
            edudoc: user.edudoc,
            institute: user.institute,
            gradyear: user.gradyear,
            employer: user.employer,
            eaddress: user.eaddress,
            branch: user.branch,
            edate: user.edate,
            allergies: user.allergies,
            pastmeds: user.pastmeds,
            immu: user.immu,
            bloodgrp: user.bloodgrp,
            diet: user.diet,
            exercise: user.exercise,
            rh: user.rh,
            smoke: user.smoke,
            alcohol: user.alcohol,
            drugs: user.drugs,
            meds: user.meds,
            btransp: user.btransp,
            bp: user.bp,
            diabetes: user.diabetes,
            asthma: user.asthma,
            hypertension: user.hypertension,
            cardiac: user.cardiac,
            mentalhealth: user.mentalhealth,
            anemia: user.anemia,
            fammedhist: user.fammedhist,
            illness: user.illness,
            surgery: user.surgery,
            hospi: user.hospi,
            medaddonhist: user.medaddonhist,
            maritalstatus: {
                status: user.maritalstatus.status,
                spouse: {
                    cname: user.maritalstatus.spouse.cname,
                    cage: user.maritalstatus.spouse.cage,
                    ccontact: user.maritalstatus.spouse.ccontact
                }
            },
            cno: {
                childrenno: user.cno.childrenno,
                childrendetails: user.cno.childrendetails
            },
            uid: user.uid
        })
        }
    } catch (err){
        console.log(err)
    }
})
app.post('/contactblack.html', async (req,res) => {
    try{
    const trial2 = new ContactUs({
        namer: req.body.names,
        emailid: req.body.emailid,
        message: req.body.message
    })
    await trial2.save()
return res.redirect('/Front.html')
} catch(err) {
    console.log(err)
}
})

//action in form in html is which page get request will be sent for redirection after post request is sent out
app.listen(3000, async () => {
    await connectDB();
    console.log(`http://localhost:3000`);
  });
