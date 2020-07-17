# PASSWORD MADNESS!

## Practice with Parameters and Return Values
![](https://media.giphy.com/media/3orieXilvlk5psxl7y/giphy.gif)
Have you ever gone to a website and had that frustrating experience where the password expectations are crazy? In this lab, you'll be working on building password generators and verifiers, using parameters and return statements.

Remember that function syntax in with a parameter and a return looks like this:

```js
// defining a function
function myFunc(name){
  return "hello " + name
}

// calling a function
myFunc("Taylor") // Returns "hello Taylor"
```

### Mild
#### 1. `basicPasswordCheck`
Create a function called `basicPasswordCheck` that takes in a password string and returns "This is a valid password" if the password has 10 or more characters, and "This password is too short" if the password has less than 10 characters.

Example:

```js
basicPasswordCheck("hello") // Returns "This password is too short"
basicPasswordCheck("thisisalongpassword") // Returns "This is a valid password"

```

#### 2. `confirmUncommonPassword`
Create a function called `confirmUncommonPassword` that checks to make sure that a given password isn't a variation of the two most common passwords: `"password1"` and `"abcd1234"`. These passwords are easily guessed, so if a user's password includes one of these two phrases (even if there are extra letters or numbers), it should return `false`. If the user's password does not include one of these two phrases,

Example:

```js
confirmUncommonPassword("abcd1234") // Returns false
confirmUncommonPassword("Password123") // Returns false
confirmUncommonPassword("UniqueElephant7") // Returns true

```

#### 3. `confirmSamePasswords`
Create a function called `confirmSamePasswords` that checks to make sure that two inputted strings are the same. If the two strings are the same, it should return `true`. If the two strings are different, it should return `false`.

Example:

```js
confirmSamePasswords("donut2AreDeliciou3!", "donut2AreDeliciou3!") // Returns true
confirmSamePasswords("Dogs&CatsRGr8", "IlikePeanutButter") // Returns false

```

### Medium

#### 4. `checkInvalidCharacters`
Some older databases can't handle special characters like spaces, @, #, $, etc. Create a function called `checkInvalidCharacters` that checks to see if a string contains any of the following invalid characters: ` ` (a space), `!`, `@`, `#`, or `$`. If the string contains one of those characters, it should return `true`. If the string doesn't contain one of those characters, it should return `false`.

Example:

```js
checkInvalidCharacters("batman and robin") // Returns true
checkInvalidCharacters("jokerAndPenguin") // Returns false

```

#### 5. `requireSpecialCharacters`
On the other hand, newer sites **require** that users include one or more special characters in their passwords. Create a function called `requireSpecialCharacters` that checks to see if a string contains _two or more_ of the following special characters: ` ` (a space), `!`, `@`, `#`, `$`, `%`, `^`, `&`, `-`, `_`, or `*`. If the string contains two or more of those characters, it should return `true`. If the string contains one or fewer of those characters, it should return `false`.

Example:

```js
requireSpecialCharacters("mighty-Morphin_p0wer Rangers!") // Returns true
requireSpecialCharacters("hereWeG0!") // Returns false
requireSpecialCharacters("ohnoanotherbadguy") // Returns false

```

#### 6. `mediumPasswordGenerator`
Now write a function called `mediumPasswordGenerator` that generates a random password and takes in two arguments: the total length of the password and the number of special characters (see #5) the password should have. If the second argument is greater than the first, the function should return `false`.

Example:

```js
mediumPasswordGenerator(5, 2) // Returns "a&g$c" or "BU#7!" or "^%876" or any other 5 character string with two special characters.
mediumPasswordGenerator(7, 10) // Returns false

```

> Try using your `requireSpecialCharacters` function to check that the `mediumPasswordGenerator(n, m)` (n > m, m > 1) function creates a password with two or more special characters.

### Spicy

#### 7. `checkMultipleSymbols`
Newer sites also require that passwords contain a combination of the following: uppercase letters, lowercase letters, numbers, and special characters (see #5). Create a function called `checkMultipleSymbols` that checks to see if a string contains one of each of these types of characters.

Example:

```js
checkMultipleSymbols("This1sMyBestP@ssw0rd") // Returns true
checkMultipleSymbols("NotGoodEnough!") // Returns false
checkMultipleSymbols("eventhoughthisisareallylongpassworditstillisntgoodenough") // Returns false

```

#### 8. `securePasswordGenerator`
Now write a function called `securePasswordGenerator` that generates a random password and takes in one argument: the total length of the password. This time, however, the password generated should contain at least one uppercase letter, one lowercase letter, one number, and one special character (see #5). Consider under what conditions the function should return `false`.

Example:

```js
securePasswordGenerator(5) // Returns "A1a!n" or "0&yTb" or "^%87d" or any other 5 character string with one uppercase letter, one lowercase letter, one number, and one special character.

```

> Try using your `checkMultipleSymbols` function to check that the `securePasswordGenerator` function always creates a secure password.

#### 9. `checkMultipleSymbols` Part 1
Update your `checkMultipleSymbols` function to return a message to the user indicating which type of character is missing from their proposed password. If the password contains all four types of characters, then return "Great password!"

Example:

```js
checkMultipleSymbols("This1sMyBestP@ssw0rd") // Returns "Great password"
checkMultipleSymbols("NotGoodEnough!") // Returns "Missing a special character"
checkMultipleSymbols("eventhoughthisisareallylongpassworditstillisntgoodenough") // Returns "Missing a capital letter, a number, and a special character"

```

#### 10. `checkMultipleSymbols` Part 2
Update your `checkMultipleSymbols` function again to provide a user with some visual feedback about the strength of their password. This could be in the form of a color-coded message or progress bar or something of your own design. For example, if the password contains all four types of characters, then it could return "Great password!" on a green background. If it's missing one type of character, maybe the message is on a yellow background; if it's missing two, it could be on an orange background; and if it's missing three, it could be on a red background. Use your creativity to help the user generate a secure password!
