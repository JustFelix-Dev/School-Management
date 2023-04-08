var editMe = []
var allStudents = []

function submit() {
   if(fname.value =="" || lname.value=="" || email.value=="" ||pass.value==""){
        alert("Please kindly check your details correctly. Something might be missing!.")
    }else{
        var mySelf = {
        firstName: fname.value,
        lastName: lname.value,
        email: email.value,
        passWord: pass.value,
    }
    allStudents.push(mySelf)
    localStorage.setItem("localStudents", JSON.stringify(allStudents))
        fname.value = ""
    lname.value = ""
    email.value = ""
    pass.value = ""
    displayTable()
    }
}

function displayTable() {
    if(allStudents.length == 0){
        disp.innerHTML = "There are currently no Student's Record."
    } else {
        render.innerHTML = ` <tr>
            <th>S/N</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Actions</th>
        </tr>`

    for (let index = 0; index < allStudents.length; index++) {
        render.innerHTML += `
        <tr>
    <td>${index + 1} </td>
    <td> ${allStudents[index].firstName} </td>
    <td>${allStudents[index].lastName}</td>
    <td>${allStudents[index].email}</td>
    <td>${allStudents[index].passWord}</td>
    <td><button onclick="edit(${index})" style="background-color:yellow;color:black;"data-bs-toggle="modal" data-bs-target="#staticBackdrop">Edit User</button>
        <button onclick="del(${index})" style="background-color:red;color:black;">Delete User</button></td>
</tr>
    `
    }
   
    }
}

function del(btndel) {
    var userResponse = confirm('This user details would be permanently deleted. Click "Ok" to confirm')
    if (userResponse == true) {
        allStudents.splice(btndel, 1)
        displayTable()
    } else {}

}
 function edit(btnedit) {
     editMe = btnedit
     cname.value = allStudents[btnedit].firstName
     clname.value = allStudents[btnedit].lastName
     cemail.value = allStudents[btnedit].email
     cpass.value = allStudents[btnedit].passWord

}
function change (){
    allStudents[editMe] = {
        firstName: cname.value,
        lastName: clname.value,
        email : cemail.value,
        passWord: cpass.value,
    }
    displayTable()

}
