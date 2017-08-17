//next is like the done callback in passport
module.exports = (req, res, next) => {
  //if req.user does not exist, terminate
  if(!req.user){
    return res.status(401).send({error: "You must log in"});
  }

  //continue on to next middleware if user is logged in
  next();
}
