import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: false
})

export class SearchPipePipe implements PipeTransform {

  transform(value: any[], ...args: any[]): any[] {
    
    let search_a_book = args[0]
    let genrevalue = args[1]
    
   if(genrevalue !== 'all'){
    value = value.filter((obj)=>{
      if(obj.genre === genrevalue){
        return true;
      }
      else{
        return false;
      }
    })
   }
  
    search_a_book = search_a_book.trim()
    if(search_a_book === ''){
      return value;
    }

    let final_array = value.filter((obj)=>{
      if(obj.title.toLowerCase().includes(search_a_book.toLowerCase()) ||
        obj.author.toLowerCase().includes(search_a_book.toLowerCase())){
          return true;
        }
        else{
          return false;
        }
       })

    
    return final_array;

  }

}
