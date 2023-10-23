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

    // Pop Function
    pop(){
        if(this.head==null){
            console.log("Linklist is already empty");
        }
        else if(this.head.next==null){
            this.delete_head()
        }
        else{
            let curr_node=this.head
            while(curr_node.next.next!=null){
                curr_node=curr_node.next
            }
            curr_node.next=curr_node.next.next
            this.total_node-=1
        }
    }

    // Remove Function
    remove(index){
        if(index==0){
            this.delete_head()
        }
        else if(index==this.total_node-1){
            this.pop()
        }
        else if (index>=this.total_node){
            console.log("Index out of range")
        }
        else{
            let counter=1
            let curr_node=this.head
            while(curr_node.next!=null){
                if(counter==index){
                    curr_node.next=curr_node.next.next
                    this.total_node-=1
                }
                counter+=1
                curr_node=curr_node.next
            }
        }
    }
    
    // Clear function
    clear(){
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
l.append(10000)
// l.append("last_item")
// l.append("programer")
// l.insert(5,1000)
// l.pop()
// l.pop()
// l.pop()
// l.pop()
l.remove(7)
console.log(l.traverse());