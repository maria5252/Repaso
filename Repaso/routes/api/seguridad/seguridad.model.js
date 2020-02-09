

var userModel = {};

var userCollection = [];


var userTemplate = {
  userEmail:"",
  userPswd:"",
  userCompleteName:"",
  userID:"",
  userrDateCreated: null
}

userModel.getAll = ()=>{
  return userCollection;
}

userModel.getById = (id)=>{
  var filteredUsers = userCollection.filter(
    (o)=>{
      return o.userID === id;
    }
  );
  if(filteredUsers.length){
    return filteredUsers[0];
  }else{
    return null;
  }
}


userCollection.push(
  Object.assign(
    {},
    userTemplate,
    {
      userEmail:"poons@gmail.com",
      userPswd:"12345678",
      userCompleteName:"Maria Lozano",
      userID:"1",
      userrDateCreated: new Date().getTime()
    }
  )
);

userCollection.push(
  Object.assign(
    {},
    userTemplate,
    {
      userEmail:"edicius@gmail.com",
      userPswd:"12345678",
      userCompleteName:"Dariel Vasquez",
      userID:"2",
      userrDateCreated: new Date().getTime()
    }
  )
);

module.exports = userModel;
