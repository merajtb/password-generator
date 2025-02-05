document.getElementById("generateBtn").addEventListener("click", function () {
  const passwordLength = parseInt(
    document.getElementById("passwordLength").value
  );
  const includeNumbers = document.getElementById("includeNumber").checked;
  const includeUppercase = document.getElementById("includeUppercase").checked;
  const includeLowercase = document.getElementById("includeLowercase").checked;
  const includeSymbols = document.getElementById("includeSymbol").checked;

  if (passwordLength < 4 || passwordLength > 100) {
    alert("Password length must be between 4 and 100!");
    return;
  }

  const password = generatePassword(
    passwordLength,
    includeLowercase,
    includeUppercase,
    includeNumbers,
    includeSymbols
  );

  document.getElementById("passwordText").textContent = password;
});

document.getElementById("passwordText").addEventListener("click", function () {
  const password = this.textContent;

  if (password && password !== "Click to copy") {
    navigator.clipboard
      .writeText(password)
      .then(() => {
        alert("Password copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  }
});

function generatePassword(
  length,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols
) {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+=";

  let allowedChars = "";
  let password = "";

  if (includeLowercase) allowedChars += lowercaseChars;
  if (includeUppercase) allowedChars += uppercaseChars;
  if (includeNumbers) allowedChars += numberChars;
  if (includeSymbols) allowedChars += symbolChars;

  if (allowedChars.length === 0) {
    return "Select at least one option!";
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

  return password;
}
