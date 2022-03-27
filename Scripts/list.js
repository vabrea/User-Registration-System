function displayUsers(users){
    //travel the array
    $("#usersTable tbody").html("");
    let data = "";
    for(let i=0; i<users.length; i++){
        data = data + createUser(users[i], i);
    }

    $("#usersTable tbody").html(data);

}

function createUser(user, index){
    return `<tr> 
                <td>${user.firstName}</td>
                <td>${user.lastName}</td>
                <td>${user.email}</td>
                <td>${user.age}</td>
                <td>${user.address}</td>
                <td><input type='button' value='Delete' onclick='removeUser(${index})'/> </td>
           </tr>`;
}


function removeUser(index){
    remove(index);
    let users=readUsers();
    displayUsers(users);
}


function init(){
    console.log("Listing users");
    let users=readUsers();
    displayUsers(users);
}

window.onload=init;



// previous code
// function init(){
//     let users=readUsers();
//     displayUsers(users);
// }
// window.onload=init;



// function displayUsers(users){
    //     //travel the array
    //       let row="";
    //       let x=readUsers();
    //       for(let i=0;i<x.length;i++){
    //           row+=`
    //           <tr id="${x[i].id}">
    //           <td>${x[i].firstName}</td>
    //           <td>${x[i].lastName}</td>
    //           <td>${x[i].email}</td>
    //           <td>${x[i].age}</td>
    //           <td>${x[i].address}</td>
    //           <td><input type="button" onclick="removeUser(${index});" value ="Delete"/> </td>
    //           </tr>
    //           `;
    //       }
    //     //get each user
      
    //     //display the user
    //     document.getElementById("users-table").innerHTML=row;
    //     //append the user to the table
    // }
    
    // function removeUser(index){
    //     remove(index);
    //     let users = readUsers();
    //     displayUsers(users);
    
    
    
    //     // let x =readUsers();
    //     // for(let i=0;i<x.length;i++){
    //     //     if(x[i].id==userId){
    //     //         deleteIndex=i;
                
    
    //     //     }
    //     // }
    //     // x.splice(deleteIndex,1);
    //     // document.getElementById(userId).remove();
    // }