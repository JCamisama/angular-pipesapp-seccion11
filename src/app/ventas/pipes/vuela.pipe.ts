import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'vuela'
})

export class VuelaPipe implements PipeTransform{

  public transform(vuela: boolean): string {
    return (vuela) ? 'sí' : 'no';
  }
}
