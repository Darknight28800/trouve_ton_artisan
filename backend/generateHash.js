import bcrypt from "bcrypt";

const password = "REDACTED";

bcrypt.hash(password, 10).then(hash => {
    console.log("Hash généré :", hash);
});
