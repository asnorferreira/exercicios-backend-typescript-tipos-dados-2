import { Crud, User } from "../03/ex3";

export class CrudTwo extends Crud {
  constructor(p: string) {
    super(p);
  }

  public deleteUserByCpf(cpf: string): User | null {
    try {
      const fileUser = super.readFile();
      const userIndex = fileUser.users.findIndex((user) => user.cpf === cpf);

      if (userIndex === -1) {
        console.log("User not found!");
        return null;
      }

      const deletedUser = fileUser.users.splice(userIndex, 1)[0];

      super.writeFile(fileUser);
      console.log("User deleted:", deletedUser);
      return deletedUser;
    } catch (error) {
      console.error("Error deleting user:", error);
      return null;
    }
  }
}
