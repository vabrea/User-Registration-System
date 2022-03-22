const LS_KEY="users";

function saveUser(user){
    let val= JSON.stringify(user);
    localStorage.setItem(LS_KEY, val);
}