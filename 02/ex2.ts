import fs from "fs";

interface Adress {
  cep: string;
  rua: string;
  complemento?: string;
  bairro: string;
  cidade: string;
}

interface User {
  nome: string;
  email: string;
  cpf: string;
  profissao?: string;
  endereco: Adress | null;
}

interface FileUser {
  users: User[];
}

const writeFile = (path: string, data: FileUser): void => {
  try {
    fs.writeFileSync(path, JSON.stringify(data, null, 2), "utf-8");
    console.log("Arquivo salvo com sucesso!");
  } catch (error) {
    console.error("Error ao escrever: ", error);
  }
};

const readFile = (path: string): FileUser => {
  try {
    if (fs.existsSync(path)) {
      const data = fs.readFileSync(path, "utf-8");
      return JSON.parse(data) as FileUser;
    } else {
      return { users: [] };
    }
  } catch (error) {
    console.error("Error ao ler: ", error);
    return { users: [] };
  }
};

const registerUser = (user: User): User | null => {
  try {
    const path = "../bd.json";
    const fileUser = readFile(path);

    fileUser.users.push(user);

    writeFile(path, fileUser);

    return user;
  } catch (error) {
    console.error("Error ao registrar: ", error);
    return null;
  }
};

const listUser = (): User[] => {
  try {
    const path = "../bd.json";
    const fileUser = readFile(path);

    return fileUser.users;
  } catch (error) {
    console.error("Error ao ler: ", error);
    return [];
  }
};

const newUser: User = {
  nome: "Fulano",
  email: "fulano@example.com",
  cpf: "123.456.789-00",
  profissao: "Desenvolvedor",
  endereco: {
    cep: "12345-678",
    rua: "Rua das Flores",
    bairro: "Centro",
    cidade: "Cidade A",
  },
};

const newUserRegister = registerUser(newUser);
if (newUserRegister) {
  console.log("Usuário registrado com sucesso!");
}
if (!newUserRegister) {
  console.log("Erro ao registrar usuário!");
}

const listUsers = listUser();
console.log(listUsers);
