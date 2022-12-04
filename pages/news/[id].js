// useRouter for get the url dynamic value [such as news/1 1 will show dynamiclly]
import { useRouter } from "next/router";

const NewsPostDetails = () => {
    const router = useRouter();

    const { id } = router.query;

    // console.log(router);

    return ( 
        <div>
            <h1> News dynamic page works id is - {id} </h1>
        </div>
    );
}
 
export default NewsPostDetails;