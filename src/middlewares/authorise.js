// permittedRoles = ["seller", "admin"]

const authorise = (permittedRoles) => {
     console.log("111",permittedRoles)
    return (req,res,next) => {
        // getting the user;
        const user = req.user;
        let isPermitted = false;

console.log("222",user)
        // checking if he has permitted role
        permittedRoles.map(role => {
            if(user.role.includes(role)){
                isPermitted = true;
                console.log(permittedRoles)
            }
        })

        // if permitted, he can go ahead
          if(isPermitted){
              return next()
          }
          else{
              return res.status(401).send({message : "You are not authorised to perform this operation"})
          }
      }

}


module.exports = authorise