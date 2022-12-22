class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null
         let count = 0;
    }
    
    // function isEmpty(){
    //     if(this.head === null){
    //         console.log('empty linked list')
    //         return
    //     }
    // }
    
    // add the node to the begning

    prepend(data){
         this.count = this.count +1;
        console.log('inside prepend function')
        // to add the node in the fitst position the first thigs we have to do is to create new node
        const newnode = new Node(data)
        // it means if the linked list is null
        if(this.head === null){
            console.log('linked was empty')
            this.head = newnode
        }else{
            // this means if the linked list is not null
            newnode.next = this.head
            this.head = newnode
        }
    }
    
    // this function will return all the data node
    showData(){
        if(this.head === null){
            console.log('empty linked list')
            return
        }
        let current = this.head
        
        while(current){
            console.log(current.data)
            current = current.next
        }
    }
    
    // this function will add the node at the last
    append(data){
        const newNode = new Node(data)
        if(this.head === null){
            this.head = newNode
        }else{
            let current = this.head
            while(current){
                if(current.next === null){
                    current.next = newNode
                    return
                }
                current = current.next
            }
        }
    }
    
    // this funtion will delete the node which have given data
    delete(data){
        if(this.head === null){
            console.log('empty linked list')
            return
        }
        
        let current = this.head
        let prev = current
        while(current){
            
            if(current.data === data){
                //delete node here 
                prev.next = current.next
                current = null
                return
            }
            prev = current
            current = current.next
        }
    }
    
    // this funciton will update the current value to the update value
    update(currentData, newData){
        if(this.head === null){
            console.log('empty linked list')
            return
        }
        
        let current = this.head
        while(current){
            if(current.data === currentData){
                current.data = newData
                return
            }
            current = current.next
        }
    }
    
}

const linkedList = new LinkedList();
linkedList.prepend(3);
linkedList.prepend(5);
linkedList.prepend(3);
linkedList.prepend(10);
linkedList.append(10);
// linkedList.delete(5)
linkedList.update(5,9)







linkedList.showData()




