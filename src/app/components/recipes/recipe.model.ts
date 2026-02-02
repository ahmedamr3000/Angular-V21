export class recipe {
  public index?: number;
  public name?: string;
  public description?: string;
  public imagePath?: string;
  constructor(index: number, name: string, desc: string, imagePath: string) {
    this.index = index;
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }
}
