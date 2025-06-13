'use client'
import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import Form from 'next/form'
const ReactTable = (props) => {

    const columns= [
        {
            name: 'ID',
            selector: row => row.id,
            sortable: true
        },  {
            name: 'Name',
            selector: row => row.name,
            sortable: true
        },
        {
            name: 'E-mail',
            selector : row => row.email,
            sortable: true
        },
         {
            name: 'Age',
            selector : row => row.age,
            sortable: true
        }
    ]

    const data= [
    {
        "id": 1,
        "name": "kim",
        "email": "rebeccaschmidt@hotmail.com",
        "age": 18
    },
    {
        "id": 2,
        "name": "christina",
        "email": "chelseahall@gmail.com",
        "age": 54
    },
    {
        "id": 3,
        "name": "robert",
        "email": "joneslisa@yahoo.com",
        "age": 37
    },
    {
        "id": 4,
        "name": "alex",
        "email": "ggill@gmail.com",
        "age": 58
    },
    {
        "id": 5,
        "name": "catherine",
        "email": "apoole@haney-bishop.com",
        "age": 28
    },
    {
        "id": 6,
        "name": "angela",
        "email": "lisa14@gmail.com",
        "age": 48
    },
    {
        "id": 7,
        "name": "patrick",
        "email": "emilymyers@hotmail.com",
        "age": 22
    },
    {
        "id": 8,
        "name": "ebony",
        "email": "shannon91@miller.net",
        "age": 28
    },
    {
        "id": 9,
        "name": "steven",
        "email": "grodriguez@franklin.biz",
        "age": 53
    },
    {
        "id": 10,
        "name": "brian",
        "email": "kmiller@knight-todd.net",
        "age": 51
    },
    {
        "id": 11,
        "name": "maria",
        "email": "cookrose@hawkins-jones.info",
        "age": 47
    },
    {
        "id": 12,
        "name": "savannah",
        "email": "ysmith@hotmail.com",
        "age": 55
    },
    {
        "id": 13,
        "name": "emily",
        "email": "sean51@cole.info",
        "age": 53
    },
    {
        "id": 14,
        "name": "kathy",
        "email": "smithfrank@hotmail.com",
        "age": 57
    },
    {
        "id": 15,
        "name": "thomas",
        "email": "sfrederick@cooper.com",
        "age": 31
    },
    {
        "id": 16,
        "name": "jason",
        "email": "griffincameron@hotmail.com",
        "age": 45
    },
    {
        "id": 17,
        "name": "gary",
        "email": "kimberlywebb@pierce.com",
        "age": 55
    },
    {
        "id": 18,
        "name": "julie",
        "email": "amanda21@daugherty.biz",
        "age": 47
    },
    {
        "id": 19,
        "name": "shannon",
        "email": "ktaylor@jackson.biz",
        "age": 31
    },
    {
        "id": 20,
        "name": "kelli",
        "email": "vrodriguez@hotmail.com",
        "age": 53
    },
    {
        "id": 21,
        "name": "lindsay",
        "email": "dickersonpaul@hotmail.com",
        "age": 31
    },
    {
        "id": 22,
        "name": "dustin",
        "email": "ycole@gmail.com",
        "age": 53
    },
    {
        "id": 23,
        "name": "stephanie",
        "email": "gregory27@taylor.com",
        "age": 19
    },
    {
        "id": 24,
        "name": "jeffrey",
        "email": "brian95@washington.biz",
        "age": 47
    },
    {
        "id": 25,
        "name": "nicole",
        "email": "zachary99@yahoo.com",
        "age": 40
    },
    {
        "id": 26,
        "name": "debra",
        "email": "joystokes@ortega-cox.com",
        "age": 38
    },
    {
        "id": 27,
        "name": "sara",
        "email": "sanchezrandy@sullivan.com",
        "age": 44
    },
    {
        "id": 28,
        "name": "vicki",
        "email": "richolivia@gmail.com",
        "age": 20
    },
    {
        "id": 29,
        "name": "tina",
        "email": "jeanettefletcher@hardin.com",
        "age": 36
    },
    {
        "id": 30,
        "name": "john",
        "email": "cantushelly@yahoo.com",
        "age": 54
    },
    {
        "id": 31,
        "name": "kevin",
        "email": "changkevin@gmail.com",
        "age": 55
    },
    {
        "id": 32,
        "name": "russell",
        "email": "stephanie06@gmail.com",
        "age": 30
    },
    {
        "id": 33,
        "name": "sara",
        "email": "samanthafrey@hotmail.com",
        "age": 43
    },
    {
        "id": 34,
        "name": "mary",
        "email": "michael47@west-chavez.biz",
        "age": 52
    },
    {
        "id": 35,
        "name": "daniel",
        "email": "gbarnes@yahoo.com",
        "age": 44
    },
    {
        "id": 36,
        "name": "henry",
        "email": "webbmark@hernandez-martinez.com",
        "age": 40
    },
    {
        "id": 37,
        "name": "crystal",
        "email": "churchangelica@phelps.org",
        "age": 53
    },
    {
        "id": 38,
        "name": "courtney",
        "email": "shaunphillips@lynn.net",
        "age": 42
    },
    {
        "id": 39,
        "name": "theresa",
        "email": "dhardin@hotmail.com",
        "age": 44
    },
    {
        "id": 40,
        "name": "elizabeth",
        "email": "knappjessica@vasquez.com",
        "age": 43
    },
    {
        "id": 41,
        "name": "austin",
        "email": "mendezcynthia@brown.com",
        "age": 29
    },
    {
        "id": 42,
        "name": "patrick",
        "email": "danielphillips@gmail.com",
        "age": 24
    },
    {
        "id": 43,
        "name": "kevin",
        "email": "davidnavarro@hotmail.com",
        "age": 32
    },
    {
        "id": 44,
        "name": "jeremy",
        "email": "fyork@burch-foster.info",
        "age": 54
    },
    {
        "id": 45,
        "name": "eric",
        "email": "josephmiller@hotmail.com",
        "age": 39
    },
    {
        "id": 46,
        "name": "joshua",
        "email": "jesse16@mitchell.com",
        "age": 24
    },
    {
        "id": 47,
        "name": "elizabeth",
        "email": "rmcclure@yahoo.com",
        "age": 49
    },
    {
        "id": 48,
        "name": "jennifer",
        "email": "rodriguezwilliam@soto.com",
        "age": 18
    },
    {
        "id": 49,
        "name": "linda",
        "email": "waltonallison@norton.com",
        "age": 28
    },
    {
        "id": 50,
        "name": "william",
        "email": "sandrabauer@webb-arroyo.com",
        "age": 23
    },
    {
        "id": 51,
        "name": "brittany",
        "email": "brownstacey@yahoo.com",
        "age": 18
    },
    {
        "id": 52,
        "name": "thomas",
        "email": "fergusonkatie@hotmail.com",
        "age": 47
    },
    {
        "id": 53,
        "name": "elizabeth",
        "email": "stevenhudson@hotmail.com",
        "age": 24
    },
    {
        "id": 54,
        "name": "brooke",
        "email": "hughesheather@yahoo.com",
        "age": 57
    },
    {
        "id": 55,
        "name": "tammy",
        "email": "jonathanfoster@hotmail.com",
        "age": 47
    },
    {
        "id": 56,
        "name": "laura",
        "email": "meagan30@yahoo.com",
        "age": 47
    },
    {
        "id": 57,
        "name": "jasmine",
        "email": "berryjeremy@yahoo.com",
        "age": 53
    },
    {
        "id": 58,
        "name": "christopher",
        "email": "shannon42@hotmail.com",
        "age": 52
    },
    {
        "id": 59,
        "name": "lisa",
        "email": "tyu@johnson-rosario.com",
        "age": 44
    },
    {
        "id": 60,
        "name": "isaiah",
        "email": "castillolindsey@hotmail.com",
        "age": 50
    },
    {
        "id": 61,
        "name": "laura",
        "email": "andrea32@gardner.net",
        "age": 51
    },
    {
        "id": 62,
        "name": "jerry",
        "email": "stewartstacy@curry.org",
        "age": 38
    },
    {
        "id": 63,
        "name": "alexandra",
        "email": "tarajefferson@gmail.com",
        "age": 51
    },
    {
        "id": 64,
        "name": "susan",
        "email": "rgraham@yahoo.com",
        "age": 36
    },
    {
        "id": 65,
        "name": "matthew",
        "email": "tmartin@torres-wong.com",
        "age": 27
    },
    {
        "id": 66,
        "name": "lisa",
        "email": "acowan@gmail.com",
        "age": 26
    },
    {
        "id": 67,
        "name": "melanie",
        "email": "fieldslaura@gmail.com",
        "age": 44
    },
    {
        "id": 68,
        "name": "james",
        "email": "dlee@jordan-young.com",
        "age": 49
    },
    {
        "id": 69,
        "name": "susan",
        "email": "fmcmahon@gmail.com",
        "age": 18
    },
    {
        "id": 70,
        "name": "jeffrey",
        "email": "davidsmith@hotmail.com",
        "age": 40
    },
    {
        "id": 71,
        "name": "debra",
        "email": "justin87@donovan.net",
        "age": 40
    },
    {
        "id": 72,
        "name": "samantha",
        "email": "whoover@bennett-mccoy.com",
        "age": 20
    },
    {
        "id": 73,
        "name": "curtis",
        "email": "kshaw@hotmail.com",
        "age": 24
    },
    {
        "id": 74,
        "name": "mary",
        "email": "aparker@yahoo.com",
        "age": 49
    },
    {
        "id": 75,
        "name": "julie",
        "email": "stephanievaughn@yahoo.com",
        "age": 20
    },
    {
        "id": 76,
        "name": "rhonda",
        "email": "qsims@white.com",
        "age": 27
    },
    {
        "id": 77,
        "name": "susan",
        "email": "yjones@grant.com",
        "age": 40
    },
    {
        "id": 78,
        "name": "christopher",
        "email": "ushelton@taylor-woods.com",
        "age": 38
    },
    {
        "id": 79,
        "name": "william",
        "email": "hopkinsashley@hall-cherry.com",
        "age": 48
    },
    {
        "id": 80,
        "name": "jesse",
        "email": "holtmaria@gmail.com",
        "age": 34
    },
    {
        "id": 81,
        "name": "paul",
        "email": "hsanchez@norris.com",
        "age": 45
    },
    {
        "id": 82,
        "name": "john",
        "email": "sherry65@yahoo.com",
        "age": 55
    },
    {
        "id": 83,
        "name": "julie",
        "email": "jeffreylara@marsh-buck.com",
        "age": 36
    },
    {
        "id": 84,
        "name": "david",
        "email": "cmiller@schneider.com",
        "age": 41
    },
    {
        "id": 85,
        "name": "kenneth",
        "email": "donnawilliams@yahoo.com",
        "age": 36
    },
    {
        "id": 86,
        "name": "john",
        "email": "brandy60@gmail.com",
        "age": 19
    },
    {
        "id": 87,
        "name": "sue",
        "email": "fschwartz@gmail.com",
        "age": 24
    },
    {
        "id": 88,
        "name": "nicholas",
        "email": "laurenhicks@gmail.com",
        "age": 46
    },
    {
        "id": 89,
        "name": "david",
        "email": "whiteselena@hotmail.com",
        "age": 38
    },
    {
        "id": 90,
        "name": "vanessa",
        "email": "lhawkins@hotmail.com",
        "age": 43
    },
    {
        "id": 91,
        "name": "barbara",
        "email": "jonathan72@hotmail.com",
        "age": 21
    },
    {
        "id": 92,
        "name": "scott",
        "email": "hardindavid@hotmail.com",
        "age": 27
    },
    {
        "id": 93,
        "name": "wyatt",
        "email": "miguelsanchez@gmail.com",
        "age": 26
    },
    {
        "id": 94,
        "name": "sarah",
        "email": "christopherkaufman@massey.net",
        "age": 51
    },
    {
        "id": 95,
        "name": "roy",
        "email": "rreyes@yahoo.com",
        "age": 52
    },
    {
        "id": 96,
        "name": "christopher",
        "email": "erinhall@yahoo.com",
        "age": 33
    },
    {
        "id": 97,
        "name": "jenny",
        "email": "andrewsronald@gmail.com",
        "age": 56
    },
    {
        "id": 98,
        "name": "daniel",
        "email": "johnsonlisa@yahoo.com",
        "age": 37
    },
    {
        "id": 99,
        "name": "victor",
        "email": "darrenkim@sanders.com",
        "age": 18
    },
    {
        "id": 100,
        "name": "renee",
        "email": "millerdillon@gmail.com",
        "age": 24
    }
]

    const [records, setRecords] = useState(data);

    const handleFilter = (event)=>{
        const newData= data.filter( row =>{
            return row.name.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setRecords(newData);
    }
const customStyles = {
	rows: {
		style: {
			minHeight: '50px', // override the row height
		},
	},
	headCells: {
		style: {
			paddingLeft: '8px', // override the cell padding for head cells
			paddingRight: '8px',
            backgroundColor: '#c1f9f4',
		},
	},
	cells: {
		style: {
			paddingLeft: '8px', // override the cell padding for data cells
			paddingRight: '8px',
		},
	},
};



    return (
        <div className='flex flex-col items-center '>
        <h1 className='text-3xl text-center w-1/2 mt-24  bg-red-100'>React Data Table Component</h1>
        <div className='flex justify-end  container mt-5'>
            <span className=' mx-2'>Filter by name: </span>
             <input placeholder=' name'   type='text' className=' flex  border rounded-sm '
             onChange={handleFilter}/>
        </div>
            <div className='container   mt-2'>
             <DataTable 
             columns={columns}
             data={records}
            //  selectableRows
             fixedHeader
             pagination
             title="React Data Table Practice"
             customStyles={customStyles}
             striped
             ></DataTable>

 

            </div>
           </div>
    );
};




export default ReactTable;