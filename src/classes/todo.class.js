

export class todo{

static fromJsaon({id,tarea,completado,creado}){
    const tempTodo = new todo(tarea);
    tempTodo.id = id;
    tempTodo.completado = completado;
    tempTodo.creado =creado ;

    return tempTodo;

}

    constructor(tarea){
        this.tarea = tarea;
        this.id = new Date().getTime();
        this.completado = false;
        this.creado = new Date();

    }
    imprimirClase(){
        console.log(`${this.tarea}-${this.id}`);
    }
}














