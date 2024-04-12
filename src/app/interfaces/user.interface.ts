interface rol {
  id: number;
  nombre : string;
}

export interface UserInterface{
  id : number;
  name : string;
  email: string;
  rol_id : number;
  rol : rol;
}
