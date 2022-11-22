import { v4 as uuidv4 } from 'uuid';
let users=[
    /*{
        firstName:"Vishal",
        lastNAme: "Jaiswal",
        age: 21,
    } */   
]


export  const getMain =(req,resp)=>{
    console.log(users);
    resp.send(users);
}


export  const createUser =(req,resp)=>{
    console.log('POST ROUTE REACHED');
    let user = req.body;     //'req.body' contains data that can be posted.
    //let userId = uuidv4();
    //let userwithId = {...user, id:uuidv4()};
    users.push({...user, id : uuidv4()});   //pushing the postable data to the array above and giving it an unique id using UUID.
    resp.send('POST ROUTE REACHED');
};


export  const getUser =(req,resp)=>{
    const {id} = req.params;
    const foundUser = users.find((user) => user.id == id);
    resp.send(foundUser);
};


export const deleteUser =(req,resp)=>{
    const {id} = req.params;
    users = users.filter((user)=>user.id != id); //Returns all users except the one giving false.
    //filter() function keeps the data if its true and filter it out of the array if false.
    resp.send(`User with id ${id} deleted from the database.`)
};


export const updateSpecific =(req,resp)=>{
    const {id} = req.params;
    const {firstName, lastNAme, age} = req.body;  //receiving the parsed data (data is parsed using body.parser()).......
    const user = users.find((user)=>user.id ==id);

    if(firstName){ user.firstName = firstName};
    if(lastNAme){ user.lastNAme = lastNAme};
    if(age){ user.age = age};

    resp.send(`User with id ${id} updated in the database.`);
};