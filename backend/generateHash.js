import bcrypt from "bcrypt";

const password = "DevWeb28";

bcrypt.hash(password, 10).then(hash => {
    console.log("Hash généré :", hash);
});
