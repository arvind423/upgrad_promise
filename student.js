const student=[
    {
        name:"a",
        roll_number:1,
        course:"cs"

    },
    {
        name:"b",
        roll_number:2,
        course:"ec"

    }
]

function getItem()
{
    console.log("inside the getItem func");
    setTimeout(()=>{
        student.forEach((item)=>{
            console.log(item.name);
        })
    },5000)
    
}

function createItem(newItem)
{
    console.log("inside the createItem func");
    setTimeout(()=>{
        student.push(newItem);
    },1000);
}

function createItem(newItem)
{
    console.log("creating");
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            student.push(newItem);
            var flag=false;
            if(flag){
                res();
            }
            else{
                rej("problem occured");
            }
        },1000)
    })
}

getItem();
createItem({name:"c",roll_number:3,course:"me"}).then(getItem).catch(err=>console.log(err));
