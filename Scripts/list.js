function displayUsers(users){
    //travel the array
      let row="";
      let x=readUsers();
      for(let i=0;i<x.length;i++){
          row+=`
          <tr id="${x[i].id}">
          <td>${x[i].firstName}</td>
          <td>${x[i].lastName}</td>
          <td>${x[i].email}</td>
          </tr>
          `;
      }
    //get each user
  
    //display the user
    document.getElementById("users-table").innerHTML=row;
    //append the user to the table
}

function init(){
    console.log("listing users")
    let users=readUsers();
    displayUsers(users);
}
window.onload=init;