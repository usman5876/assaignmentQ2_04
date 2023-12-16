import { friend } from "../types/commontypes"

export default function home(){

    const stdData = [  
        {  
           name:'arun',
           gender:'Male',
           physics:88,
           maths:87,
           english:78
        },
        {  
           name:'rajesh',
           gender:'Male',
           physics:96,
           maths:100,
           english:95
        },
        {  
           name:'moorthy',
           gender:'Male',
           physics:89,
           maths:90,
           english:70
        },
        {  
           name:'raja',
           gender:'Male',
           physics:30,
           maths:25,
           english:40
        },
        {  
           name:'usha',
           gender:'Female',
           physics:67,
           maths:45,
           english:78
        },
        {  
           name:'priya',
           gender:'Female',
           physics:56,
           maths:46,
           english:78
        },
        {  
           name:'Sundar',
           gender:'Male',
           physics:12,
           maths:67,
           english:67
        },
        {  
           name:'Kavitha',
           gender:'Female',
           physics:78,
           maths:71,
           english:67
        },
        {  
           name:'Dinesh',
           gender:'Male',
           physics:56,
           maths:45,
           english:67
        },
        {  
           name:'Hema',
           gender:'Female',
           physics:71,
           maths:90,
           english:23
        },
        {  
           name:'Gowri',
           gender:'Female',
           physics:100,
           maths:100,
           english:100
        },
        {  
           name:'Ram',
           gender:'Male',
           physics:78,
           maths:55,
           english:47
        },
        {  
           name:'Murugan',
           gender:'Male',
           physics:34,
           maths:89,
           english:78
        },
        {  
           name:'Jenifer',
           gender:'Female',
           physics:67,
           maths:88,
           english:90
        }
     ]





    const frndname:friend[] = [
        {
            name:"ali",
            age:25,
            city:"lhr"
        },
        {
            name:"awais",
            age:27,
            city:"mlt"
        },
        {
            name:"hasan",
            age:25,
            city:"mly"
        }]


    return(
        <div>
            <table style={{border:"dotted"}}>
            <tr>
                <th>Student Name</th>
                <th>Gender</th>
                <th>Physics Marks</th>
                <th>Math Marks</th>
                <th>English Marks</th>
            </tr>
            
            {stdData.map((value,index)=>{
                return(                            
                            <tr key={index}>
                                <td>{value.name}</td>
                                <td>{value.gender}    </td>
                                <td>{value.physics}    </td>
                                <td>{value.maths}    </td>
                                <td>{value.english}</td>
                            </tr>
                )
            })}   
            </table>

        </div>
    )
}