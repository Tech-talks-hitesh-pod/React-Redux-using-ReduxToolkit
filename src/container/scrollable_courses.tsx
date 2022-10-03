import * as React from "react";
import { LeftArrow, RightArrow } from "../component/arrow";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import Course from "../component/course";
import axios from 'axios';
import Courses_tag from "../component/course";

type Courses = {
    description: string;
    id: number;
    title: string;
};

type GetCourseResponse = {
  data: Courses[];
};


function Scrollable_courses(props: any) {
    //const [items,setCourses] = React.useState(getItems);
    const [Courses,setCourses] = React.useState({data:[{
        id: 0,
        description:"",
        title:""
      }]});

    const fetchCourses = React.useCallback(async()=>{
        let response = await axios.get("http://127.0.0.1:8082/course/");
        const Course:GetCourseResponse = {data: response.data}
        setCourses(Course)
    },[])

    React.useEffect(() => {
        fetchCourses()
      }, [fetchCourses]);

    //console.log(Courses)
  
    return (
      <>
        <div className="example" style={{ paddingTop: "10px" }}>
            
            <ScrollMenu
            key={"unique_id"}
            LeftArrow={LeftArrow}
            RightArrow= {RightArrow}
            >
                {Courses.data.map(({ id,title,description }) => (<Courses_tag key={id} {... {id,title,description}}/>))}

            </ScrollMenu>
          </div>
        
      </>
    );
  }

export default Scrollable_courses;
//{items.map(({ id }) => (<Course {...items}/>))}
//{courses.map((course: { id: any }) => <div>{course.id}</div>)}
/*
class Scrollable_courses extends React.Component <any,GetCourseResponse>{
    
    constructor(props: any) {
      super(props);
      this.state = {data:[{
        id: 0,
        description:"",
        title:""
      }]};
    }
  
    componentDidMount() {
      const fetchCourses = async () => {
        const response = await axios.get("http://127.0.0.1:8081/course/");
        const data:GetCourseResponse = {data:await response.data};
        console.log(data)
        this.setState({data:data.data});
      };
      fetchCourses();
      console.log(this.state)
    }
  
    render() {
      return (
        <div>
            <>
        <div className="example" style={{ paddingTop: "100px" }}>
            
            <ScrollMenu
              LeftArrow={LeftArrow}
              RightArrow={RightArrow}
            >
                {this.state.data.map(({ id,title,description }) => (<Courses_tag {... {id,title,description}}/>))}

            </ScrollMenu>
          </div>
        
      </>
            
            
        </div>
      );
    }
  }
*/
//const elemPrefix = "test";