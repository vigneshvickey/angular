export class Hero {

  constructor(
    public id: number,
      public element: number,
    public name: string,
    public power: string,
      public data: string,
    public alterEgo?: string,
      photoPath?:string
  ) {  }
}
