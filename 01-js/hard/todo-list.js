/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  
  list=[];
   add(todo){
   this.list.push(todo);
   return this.list;
  }

  remove(indexOfTodo){
    this.list.splice(indexOfTodo,1);
    return this.list;

  }
  update(index, updatedTodo){
    if(index>=this.list.length){
      return this.list;
    }
    this.list.splice(index,1,updatedTodo);
    return this.list;
  }
  getAll(){

  return this.list;
  }
  get(indexOfTodo){
    if(indexOfTodo>=this.list.length){
      return null;
    }
    return this.list[indexOfTodo];
  }
  clear(){
return this.list.splice(0,this.list.length);
  }

}

module.exports = Todo;
