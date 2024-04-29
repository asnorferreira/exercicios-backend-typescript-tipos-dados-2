import fs from "fs";

export interface Adress {
  cep: string;
  rua: string;
  complemento?: string;
  bairro: string;
  cidade: string;
}

export interface User {
  nome: string;
  email: string;
  cpf: string;
  profissao?: string;
  endereco: Adress | null;
}

export interface FileUser {
  users: User[];
}

export class Crud {
  private path: string;

  constructor(p: string) {
    this.path = p;
  }

  protected writeFile(data: FileUser): void {
    try {
      fs.writeFileSync(this.path, JSON.stringify(data, null, 2), "utf-8");
      console.log("Arquivo salvo com sucesso!");
    } catch (error) {
      console.error("Erro ao escrever: ", error);
    }
  }

  protected readFile(): FileUser {
    try {
      if (fs.existsSync(this.path)) {
        const data = fs.readFileSync(this.path, "utf-8");
        return JSON.parse(data) as FileUser;
      } else {
        return { users: [] };
      }
    } catch (error) {
      console.error("Erro ao ler: ", error);
      return { users: [] };
    }
  }

  public registerUser = (user: User): User | null => {
    try {
      const fileUser = this.readFile();

      fileUser.users.push(user);

      this.writeFile(fileUser);

      return user;
    } catch (error) {
      console.error("Error ao registrar: ", error);
      return null;
    }
  };

  public listUser = (): User[] => {
    try {
      const fileUser = this.readFile();

      return fileUser.users;
    } catch (error) {
      console.error("Error ao ler: ", error);
      return [];
    }
  };

  public uploadUser = (cpf: string, newData: User): User | null => {
    try {
      const fileUser = this.readFile();
      const userIndex = fileUser.users.findIndex((user) => user.cpf === cpf);

      if (userIndex === -1) {
        console.log("User not found!");
        return null;
      }

      fileUser.users[userIndex] = { ...fileUser.users[userIndex], ...newData };
      this.writeFile(fileUser);

      return fileUser.users[userIndex];
    } catch (error) {
      console.error("Error to update user:", error);
      return null;
    }
  };

  public getUserByCpf(cpf: string): User | null {
    try {
        const fileUser = this.readFile();
        const user = fileUser.users.find((user) => user.cpf === cpf);

        if(!user){
            console.log("User not found!");
            return null;
        }

        return user;
    } catch (error) {
        console.error("Error reading: ", error);
        return null;
    }
  }
}


