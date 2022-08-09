import { useEffect ,useState} from "react";
import MeetupList from "../components/meetups/MeetupList"


const DUMMY_MEETUPS = [{
  id: 1,
  title: "Afirst Meetup",
  image: "myimg.jpeg",
  address:"some address  10,some city",
  description: "This is a first meetup"
},
{
  id: 2,
  title: "Afirst Meetup",
  image: "img.jpg",
  address:"some address  10,some city",
  description: "This is a first meetup"
},
]
function HomePage(props) {
  const [loadeMeetups,setLoadedMeetups]=useState([]);

  useEffect(()=>{
setLoadedMeetups(DUMMY_MEETUPS);
  },[])
  return <MeetupList meetups={props.meetups} />



}
// export async function getServerSideProps(context){
//   const req=context.req;
//   const res=context.res;

//   return{
//     props:{meetup:DUMMY_MEETUPS}
//   }
// }
export async function getStaticProps(){
  return {
    props:{meetups:DUMMY_MEETUPS},
    revalidate:1
  };
}

export default HomePage;
