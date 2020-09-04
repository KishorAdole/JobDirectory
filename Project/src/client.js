const registerUsingPost = async () => {

    const First_Name= document.querySelector('#fname').value;
    const Last_Name=document.querySelector('#lname').value;
    const Email = document.querySelector('#email').value;
    const Password = document.querySelector('#pw').value;
    const Confirm_Password = document.querySelector('#cpw').value;
    

    const input = {
       First_Name,
       Last_Name,
        Email,
        Password,
        Confirm_Password
    };

    const url = "http://localhost:3000/register";

    await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(input)

    });


}