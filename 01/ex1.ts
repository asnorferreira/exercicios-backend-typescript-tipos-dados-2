import fs from "fs";

interface User {
  name: string;
  email: string;
  idade: number;
}

interface File {
  user: User[];
}

const readFile = (filePath: string): File | null => {
  try {
    const fileJSON = fs.readFileSync(filePath, "utf-8");
    const file = JSON.parse(fileJSON) as File;
    return file;
    // const fileJSON = fs.readFileSync(filePath, "utf-8");
    // const parsedData = JSON.parse(fileJSON) as File;

    // if (parsedData && Array.isArray(parsedData.user)) {
    //   return parsedData.user;
    // } else {
    //   console.error("Conteúdo inválido no arquivo.");
    //   return null;
    // }
  } catch (error) {
    console.error("Error ao ler o arquivo: ", error);
    return null;
  }
};

const file = readFile("../bd.json");
if (file) {
  console.log("Conteúdo:" + JSON.stringify(file));
} else {
  console.log("Arquivo não encontrado");
}

// const readInOther = (file: string): File => {
//     const fileJSON = fs.readFileSync(file, "utf-8");
//     const parsedData = JSON.parse(fileJSON);
//     const arrayJson = JSON.stringify(parsedData);
//     return JSON.parse(arrayJson) as File;
// }

// const files = readInOther("../bd.json");
// if (files) {
//   console.log("Conteúdo:" + JSON.stringify(files));
// } else {
//   console.log("Arquivo não encontrado");
// }

const writeFile = (path: string, users: User[]): void => {
  try {
    let fileContent: File = { user: [] };

    if (fs.existsSync(path)) {
      const fileJSON = fs.readFileSync(path, "utf-8");
      fileContent = JSON.parse(fileJSON) as File;
    }

    fileContent.user.push(...users);
    fs.writeFileSync(path, JSON.stringify(fileContent), "utf-8");
    console.log("Arquivo criado com sucesso!");
  } catch (error) {
    console.error("Error ao escrever no arquivo: ", error);
  }
};

const newUsersToAdd: User[] = [
  { name: "Frank", email: "email123123@example.com", idade: 28 },
  { name: "Zoraid", email: "email67@example.com", idade: 29 },
];

writeFile("../bd.json", newUsersToAdd);
