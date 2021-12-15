//Make sure we are connected
console.log('Connected!')

//1. Create a function called basicPasswordCheck that takes in a password string and returns "This is a valid password" if the password has 10 or more characters, and "This password is too short" if the password has less than 10 characters.
function basicPasswordCheck(password){
	if(password.length >= 10){
		return "This is a valid password"
	}
	else {
		return "This password is too short"
	}
}

console.log(basicPasswordCheck("testingsome"))
console.log(basicPasswordCheck("password"))



//2. Create a function called confirmUncommonPassword that checks to make sure that a given password isn't a variation of the two most common passwords: "password1" and "abcd1234". These passwords are easily guessed, so if a user's password includes one of these two phrases (even if there are extra letters or numbers), it should return false. If the user's password does not include one of these two phrases, it should return true.
function confirmUncommonPassword(password){
	return password == "password1" ? false
         : password == "abcd1234" ? false
         : true;
}

console.log(confirmUncommonPassword("password1"))
console.log(confirmUncommonPassword("password"))


//3. Create a function called confirmSamePasswords that checks to make sure that two inputted strings are the same. If the two strings are the same, it should return true. If the two strings are different, it should return false.
function confirmSamePasswords(string1, string2){
	if(string1 == string2){
		return true
	}
	else {
		return false
	}
}




// MEDIUM
//4. Some older databases can't handle special characters like spaces, @, #, $, etc. Create a function called checkInvalidCharacters that checks to see if a string contains any of the following invalid characters: (a space), !, @, #, or $. If the string contains one of those characters, it should return true. If the string doesn't contain one of those characters, it should return false.
function checkInvalidCharacters(password){
	if(password.includes("@") || password.includes("!") || password.includes(" ") || password.includes("#") || password.includes("$") ){
		return true
	}
	return false
}


console.log(checkInvalidCharacters("@testing"))
console.log(checkInvalidCharacters(" testing"))
console.log(checkInvalidCharacters("testing"))


//5. On the other hand, newer sites require that users include one or more special characters in their passwords. Create a function called requireSpecialCharacters that checks to see if a string contains two or more of the following special characters: (a space), !, @, #, $, %, ^, &, -, _, or *. If the string contains two or more of those characters, it should return true. If the string contains one or fewer of those characters, it should return false.
function requireSpecialCharacters(password){
	let sum = 0;
	for(let i = 0; i < password.length; i++){
		if(password[i].includes("@") || password[i].includes("!") || password[i].includes(" ") || password[i].includes("#") || password[i].includes("$") || password[i].includes("^") || password[i].includes("%") || password[i].includes("-") || password[i].includes("_") || password[i].includes("*")){
			sum++
		}
	}
	if(sum >= 2){
		return true
	}
	return false
}




//6. Now write a function called mediumPasswordGenerator that generates a random password and takes in two arguments: the total length of the password and the number of special characters (see #5) the password should have. If the second argument is greater than the first, the function should return false.
function mediumPasswordGenerator(size, numSpecial){
	if(numSpecial > size){
		return false
	}
	let password = ""
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	const specialCharacters = "@!#$-_* ^%"
	const specialLength = specialCharacters.length
  const charactersLength = characters.length;
	for(let i = 0; i < size; i++){
		password += characters.charAt(Math.floor(Math.random() * charactersLength))
	}
	for(let i = 0; i < numSpecial; i++){
		let character = specialCharacters.charAt(Math.floor(Math.random() * specialLength))
		let randomIndex = Math.floor(Math.random()*password.length)
		// For some reason this part isn't working
		console.log(character)
		password[randomIndex] = character
		console.log(password)
	}

	return password
}

console.log(mediumPasswordGenerator(8, 1))



// SPICY
//7. Newer sites also require that passwords contain a combination of the following: uppercase letters, lowercase letters, numbers, and special characters (see #5). Create a function called checkMultipleSymbols that checks to see if a string contains one of each of these types of characters.
//EXAMPLE:
// checkMultipleSymbols("This1sMyBestP@ssw0rd") // Returns true
// checkMultipleSymbols("NotGoodEnough!") // Returns false
// checkMultipleSymbols("eventhoughthisisareallylongpassworditstillisntgoodenough") // Returns false





//8. Now write a function called securePasswordGenerator that generates a random password and takes in one argument: the total length of the password. This time, however, the password generated should contain at least one uppercase letter, one lowercase letter, one number, and one special character (see #5). Consider under what conditions the function should return false.
//EXAMPLE:
//securePasswordGenerator(5) // Returns "A1a!n" or "0&yTb" or "^%87d" or any other 5 character string with one uppercase letter, one lowercase letter, one number, and one special character.








//9. Update your checkMultipleSymbols function to return a message to the user indicating which type of character is missing from their proposed password. If the password contains all four types of characters, then return "Great password!"
//EXAMPLE:
// checkMultipleSymbols("This1sMyBestP@ssw0rd") // Returns "Great password"
// checkMultipleSymbols("NotGoodEnough!") // Returns "Missing a special character"
// checkMultipleSymbols("eventhoughthisisareallylongpassworditstillisntgoodenough") // Returns "Missing a capital letter, a number, and a special character"







//10. Update your checkMultipleSymbols function again to provide a user with some visual feedback about the strength of their password. This could be in the form of a color-coded message or progress bar or something of your own design. For example, if the password contains all four types of characters, then it could return "Great password!" on a green background. If it's missing one type of character, maybe the message is on a yellow background; if it's missing two, it could be on an orange background; and if it's missing three, it could be on a red background. Use your creativity to help the user generate a secure password!

