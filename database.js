
const{MongoClient}= require("mongodb")
const url="mongodb+srv://alokkumar41558:dJY2IBRXBiPfWvDV@namstenode.4yk3e.mongodb.net/"

// it's create new client
const client=new MongoClient(url)
// dbName
const dbName="helloworld";
// main-function 
async function main(){
  await client.connect();
  console.log("Connected successfully to server");
  const db=client.db(dbName)
  const collection=db.collection('user') 
  // all these code in doc read https://www.npmjs.com/package/mongodb
  // insert data
  const data={
    firstName:"Mantosh",
    lastName:"pattank"
  }
//   // count result
//   const countResult=await collection.countDocuments({})
//   console.log("count the doc in  the user collection=>",countResult);
//  const insertResult = await collection.insertMany([data]);
//  console.log('Inserted documents =>', insertResult);
//   //  // Read database  (find all doc)
//   const findResult = await collection.find({}).toArray();
//   console.log("Found documents =>", findResult);
//   // Update the document
//   const updateResult = await collection.updateOne(
//     {firstName:"Mantosh"},
//     { $set: { firstName: "Sachin" } }
//   );
//   console.log('Updated documents =>', updateResult);
//      // Delete documents where firstName is 'Mantosh'
//      const deleteResult = await collection.deleteMany({ firstName: "sachin" });
//      console.log('Deleted documents =>', deleteResult);

// find all doc with a filter of firstName
// const filterName=await collection.find({firstName:'Sachin'}).toArray();
// console.log("Result=>", filterName);
// insert one
const dataone={
  firtName:"Ranvier",
  lastName:"singh"
}
const insertone=await collection.insertOne(dataone)
console.log("inserone data=>", insertone);
  return "done.";
}
main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());



// // NOTES
// // Go to mongodb website
// // Create a free M0 cluster
// // Create a user
// // Get the connection string
// // Install Mongo DB compass
// // Create a database
// // INstall mongodb package
// // Create a connection from code
// // Documents CRUD - CReate, REad, Update, Delete
