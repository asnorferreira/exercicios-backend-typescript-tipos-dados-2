import { Crud, User } from "./03/ex3";
import { CrudTwo } from "./04/ex4";
import { CrudThree } from "./05/ex5";

class Main {
  constructor() {
    // const crud = new Crud("./bd.json");
    // const updateUser: User = {
    //   nome: "Beltrano",
    //   email: "exe3@example.com",
    //   cpf: "123.456.789-10",
    //   profissao: "Desenvolvedor Back-end",
    //   endereco: {
    //     cep: "12345-678",
    //     rua: "Rua das Flores",
    //     bairro: "Centro",
    //     cidade: "Cidade C",
    //   },
    // };
    //   const getUserCpf = "123.456.789-10";
    //   this.updateOldUser(crud, updateUser);
    //   this.getByUser(crud, getUserCpf);
    // }
    //   const newUser: User = {
    //     nome: "Fulano",
    //     email: "fulano@example.com",
    //     cpf: "123.456.789-00",
    //     profissao: "Desenvolvedor",
    //     endereco: {
    //       cep: "12345-678",
    //       rua: "Rua das Flores",
    //       bairro: "Centro",
    //       cidade: "Cidade A",
    //     },
    //   };
    //   this.listUsers(crud);
    //   this.registerNewUser(crud, newUser);
    // }
    // const crudTwo = new CrudTwo("./bd.json");
    // const getCpf = "123.456.789-10";
    // this.deleteUser(crudTwo, getCpf);
    const crudThree = new CrudThree("./bd.json");
    this.listFilter(crudThree, "Desenvolvedor Back-end");
  }
  // public listUsers(crud: Crud): void {
  //   const listUsers = crud.listUser();
  //   console.log("Lista de usuários:", listUsers);
  // }
  // private registerNewUser(crud: Crud, newUser: User): void {
  //   const newUserRegister = crud.registerUser(newUser);
  //   if (newUserRegister) {
  //     console.log("Usuário registrado com sucesso!");
  //   } else {
  //     console.log("Erro ao registrar usuário!");
  //   }
  // }
  // private updateOldUser(crud: Crud, updateUser: User): void {
  //   const userCpf = updateUser.cpf;
  //   const userUpdate = crud.uploadUser(userCpf, updateUser);
  //   if (userUpdate) {
  //     console.log("Usuário atualizado com sucesso:", userUpdate);
  //   } else {
  //     console.log("Erro ao atualizar usuário!");
  //   }
  // }
  // private getByUser(crud: Crud, userCpf: string): void {
  //   const user = crud.getUserByCpf(userCpf);
  //   if (user) {
  //     console.log("Usuário encontrado:", user);
  //   } else {
  //     console.log("Usuário não encontrado!");
  //   }
  // }
  // public deleteUser(crud: CrudTwo, getCpf: string): void {
  //   const userDelete = crud.deleteUserByCpf(getCpf);
  //   if (userDelete) {
  //     console.log("Usuário deletado com sucesso!");
  //   } else {
  //     console.log("Erro ao deletar usuário!");
  //   }
  // }
  public listFilter(crud: CrudThree, profession: string): void {
    const filteredUsers = crud.listUserWithFilter(profession);
    console.log(`Usuários com a profissão "${profession}":`, filteredUsers);
  }
}

new Main();
