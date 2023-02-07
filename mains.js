
const users=[
    {
      name: "Leanne Graham",
      age: 30,
      email: "Sincere@april.biz",
      country: "England",
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org"
    },
    {
      name: "Ervin Howell",
      age: 27,
      email: "Shanna@melissa.tv",
      country: "New Zealand",
      phone: "010-692-6593 x09125",
      website: "anastasia.net",
    }
  ]
  const dat='age';
const getUsersData = (user,dat) => {
    
    return user.map(use=>{
         return use[dat]
    })
}

console.log(getUsersData(users,dat)); 