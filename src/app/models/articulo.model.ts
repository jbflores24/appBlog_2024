export class ArticleModel{
  constructor(
    public id: number,
    public titulo : string,
    public imagen: string,
    public texto: string,
    public user_id : any
  ){}
}
