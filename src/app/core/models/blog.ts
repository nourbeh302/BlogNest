export class Blog {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public imgSrc: string,
    public tags: string[],
    public postedOn: Date
  ) {}
}
