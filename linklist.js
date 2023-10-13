class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
// Linklist class
class Linklist{
    constructor(){
        this.head=null 
        this.total_node=0
    }
    // Prepand
    prepand(value){
    const new_node=new Node(value)
    // make a connection
    new_node.next=this.head 
    // reassign head 
    this.head=new_node
    // increment length
    this.total_node+=1
    }
}
// Make a object
let l= new Linklist()
l.prepand(90)
l.prepand("sami")
l.prepand("python")
l.prepand("sjavi")
l.prepand("C#")
l.prepand("C+=")
console.log(l.total_node);