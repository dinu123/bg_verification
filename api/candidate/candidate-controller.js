const Candidte = require("./candidte"); // Ensure the correct path
const CandidateAddress = require("../candidate-address/candidate-address");
const REST_API = require("../../util/api-util");
const mailer = require('../../config/mailer');
const User = require("../user/user");
const CandidteCibil = require("../candidate-cibil/candidte-cibil");
const CandidteVerification = require("../candidate-verification/candidte-verification");


// Define the createCandidate controller function
const createCandidate = async (req, res) => {
  const candidateEmail = req.body.email_id;
  if(req.body.id) {
    return res.status(200).json({msg:"Something went wrong Please try again !!",isError:'true'})
    
  }
  const candidateList = await Candidte.findAll({
    where: { 'email_id': candidateEmail },
  });
  if(candidateList.length > 0) {
    return res.status(200).json({msg:"Email is already exist",isError:'true'});
  } else {
    const userList = await User.findAll({
      where: { 'email': candidateEmail },
    });
    if(userList.length > 0) {
      return res.status(200).json({msg:"user already Exist!!!",isError:'true'});
    }

    const candidateResponse = await Candidte.create({...req.body,persent_completed:15});
    const userResponse = await User.create({username:candidateEmail,password:req.body.mobile_no,user_role:3,email:candidateEmail,user_source_id:candidateResponse.id});
    await CandidteVerification.create({status:0,candidate_id:candidateResponse.id, created_by:req.user.id,updated_by:req.user.id});
    console.log(userResponse);
    console.log("**********")
    if(Object.keys(userResponse).length > 0) {
      Candidte.update({user_id:userResponse.id}, {
        where: {
          id: candidateResponse.id,
        },
      });
      const mailOptions = {
        from: 'info@restaurantapp.in',
        to: candidateEmail, 
        subject: "Please fill your Form", 
        html: `UserName: ${userResponse.username} <br>
        Password: ${userResponse.password} <br>
        <a href="http://localhost:3000/auth/login">Login</a>`
    };
    mailer.sendMail(mailOptions, (error, info) => {
          if (error) {
              console.log(error);
              return res.status(500).send(error.toString());
          }
          console.log('Message sent: %s', info.messageId);
          res.status(200).send('Email sent successfully');
      });
    }
    res.status(200).json(candidateResponse);
  }
};

const getCandidteList = async (req, res) => {
  const response = await Candidte.findAll({
    include: CandidateAddress
  });
  if(req.user.user_role === 3) {
    const candidateData = await Candidte.findAll({
      where: { 'user_id': req.user.id },
    })
    if(Object.keys(candidateData).length > 0) {
      res.status(200).json(candidateData);
    } else {
      res.status(200).json(response);
    }
  } else {

    res.status(200).json(response);
  }
};

const getCandidteById = async (req, res) => {
  const { candidateId } = req.params;
  const response = await Candidte.findOne({
    include: CandidateAddress
  })
  res.status(201).json(response);
};
const updateCandidte = async (req, res) => {
  const response = await REST_API._update(req, res, Candidte);
  res.status(201).json(response);
};

const deleteCandidate = async (req, res) => {
  const response = await REST_API._delete(req, res, Candidte);
  res.status(201).json(response);
};

exports.createCandidate = createCandidate;
exports.getCandidteList = getCandidteList;
exports.getCandidteById = getCandidteById;
exports.updateCandidte = updateCandidte;
exports.deleteCandidate = deleteCandidate;
