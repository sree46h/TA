import React,{useState} from 'react'
import { Card, Grid,Button } from 'semantic-ui-react'
import NewApplication from './NewApplication'

const Applicant = () => {
    let courses = [{ title: "Software Engineering", professor: "Hanqi Zuang", dept: 'Computer Science', description: 'Software engineering course is an intro of well organised set of software descriptions..' }, { title: "Analysis of Algorithms", professor: "Tony Stark", dept: 'Computer Science', description: 'AOA is a well designed onlince course of modern computing problom and with a set of algorithms and standard solutions..' }, { title: "Data Science", professor: "Steve Rogers", dept: 'Computer Science', description: 'Data Science course is an intro of well organised set of software descriptions..' }, { title: "Theory and Inplementation", professor: "Thor", dept: 'Computer Science', description: 'Theory and Implementation course is an intro of well organised set of software descriptions..' }]
    const [isOpenModal,openModal]=useState(false)
    const closeModalHandler=()=>{
        openModal(false)
    }
    return (
        <div>
            {isOpenModal && <NewApplication onClose={closeModalHandler} isOpend={openModal}/>}
            <div className='top-header'>
                <div className='bottom-header'>
                    <p className='link-styles' style={{ fontWeight: 'bolder', marginRight: 'auto' }}>Welcome User</p>
                    <p className='link-styles'>My jobs</p>
                    <p className='link-styles'>Notifications</p>
                    <p className='link-styles'>Logout</p>
                </div>
            </div>
            <div style={{padding:"30px 30px 30px 0px"}}>
                <Grid style={{margin:0}}>
                    <Grid.Row columns={3}>
                  
                        {courses.map((val, idx) => {
                            return <Grid.Column style={{padding:0,paddingLeft:30,marginBottom:30}}>
                                <Card style={{width:'100%'}}>
                                    <Card.Content header={val.title} />
                                    <Card.Content  >
                                        <p>
                                            <span style={{fontWeight:'600'}}>Professor: </span>
                                            <span style={{fontStyle:'italic'}}>{val.professor}</span>
                                        </p>
                                        <p>
                                            <span style={{fontWeight:'600'}}>Department: </span>
                                            <span style={{fontStyle:'italic'}}>{val.dept}</span>
                                        </p>
                                        <p>
                                            <span style={{fontWeight:'600'}}>Description: </span>
                                            <span style={{fontStyle:'italic'}}>{val.description}</span>
                                        </p>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <Button onClick={()=>openModal(true)}>Apply Here...</Button>
                                    </Card.Content>
                                </Card>
                                
                            </Grid.Column>
                        })}
                    </Grid.Row>
                </Grid>

            </div>
        </div>
    )
}
export default Applicant;