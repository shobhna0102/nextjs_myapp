import MeetupDetail from "../../components/meetups/MeetupDetail";
function MeetupDetails() {
    return (
        <>
            <MeetupDetail
                img
                src="myimg.jpeg"
                alt="not found"
                title="First Meetup"
                address="Some Street 5,Some City"
                description="The Meetup Description"
            />
        </>
    );
}
export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;
    return {
        props: {
            meetupData: {
                image: "myimg.jpeg",
                id: meetupId,
                title: "First  Mrrtup",
                address: "Some City.Some Street 5",
                description: "The Meetup Description",
            },
        },
    };
}

export default MeetupDetails;
