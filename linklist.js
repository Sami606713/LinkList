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
    append(value){
        const new_node=new Node(value)
        if (this.head==null) {
            this.head=new_node
            this.total_node+=1
            // return -> optonal if you use else 
        }
        else{
            let curr_node=this.head
            while (curr_node.next!=null) {
                curr_node=curr_node.next
            }
            curr_node.next=new_node
            this.total_node+=1
        }

    }
    insert(index,value){
        const new_node=new Node(value)
        if (index==0) {
            this.prepand(value)
        
        }
        else {
            let counter =1
            let curr_node=this.head
            while (curr_node.next!=null) {
                if (index==counter) {
                    // curr_node.next=new_node
                    new_node.next=curr_node.next
                    curr_node.next=new_node
                    this.total_node+=1
                }
                counter+=1
                curr_node=curr_node.next
            }
        }
    }
    // Delete Head 
    delete_head(){
        if(this.head==null){
            console.log("The Linked List is already empty.\nNo action is performed.");
        }
        else{
            this.head=this.head.next
            this.total_node-=1
        }
    }
    
    // Clear function
    clear(){
        // this.head=null 
        // this.total_node=0
        this.head=null 
        this.total_node=0
    }
    traverse(){
        let curr_node=this.head
        let result=[]
        while (curr_node!=null) {
            result.push(curr_node.value)
            curr_node=curr_node.next
        }
        return result
    }
}
// Make a object
let l= new Linklist()
l.prepand(90)
l.prepand("sami")
l.prepand("python")
l.prepand("C+=")
// l.append(10000)
l.append("last_item")
l.append("programer")
l.insert(5,1000)
// console.log(l.total_node);
// l.delete_head()
// l.delete_head()
// l.delete_head()
// l.delete_head()
// l.clear()
// l.clear()
console.log(l.traverse());