import { Crud, User } from "../03/ex3";

export class CrudThree extends Crud {
  constructor(p: string) {
    super(p);
  }

  public listUserWithFilter(profissao?: string): User[] {
    try {
      const fileUser = super.readFile();

      if (profissao) {
        return fileUser.users.filter((user) => user.profissao === profissao);
      } else {
        return fileUser.users;
      }
    } catch (error) {
      console.log("Erro ao listar usuários: ", error);
      return [];
    }
  }
}
