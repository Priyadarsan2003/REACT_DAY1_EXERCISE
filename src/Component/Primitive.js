function Primitive()
{
        let age=18;
        let name="kiran";
        let setStatus=false;
        let userDefault=undefined;
        let responseValue=null;

        console.log(age,name,setStatus,userDefault,responseValue);

        let oldage=age;
        age=25;
        let status=setStatus;
        setStatus=true;

        console.log(age,setStatus);
        <button onClick={alert("Check the console")}></button>
        // alert("Check the console");
}

export default Primitive;