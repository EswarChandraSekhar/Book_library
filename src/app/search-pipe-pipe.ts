import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: false
})
export class SearchPipePipe implements PipeTransform {

  transform(value: any[], ...args: any[]): any[] {
    let searchbook = args[0]
    let genrevalue = args[1]
    if(genrevalue !== 'all'){
      value = value.filter((obj)=>{
        if(obj.genre === genrevalue){
          return true;
        }
        else { 
          return false;
        }
      })
    }
    searchbook = searchbook.trim()
    if(searchbook === ''){
      return value;
    }
    let final_array = value.filter(
                          (obj)=>{
                            if(obj.title.toLowerCase().includes(searchbook.toLowerCase()) ||
                              obj.author.toLowerCase().includes(searchbook.toLowerCase()) ){
                              return true;
                            }
                            else {
                              return false;
                                }
                            }
                          )
    return final_array;
  }

}
