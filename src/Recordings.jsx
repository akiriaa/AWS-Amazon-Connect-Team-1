import Amplify, {API} from 'aws-amplify';
import Nav from './Nav';

Amplify.configure(awsconfig);

const Recordings = () => {
    const fetchRecordings = async () => {
      try{
        catch audioData = await API.graphql
      } catch (error){

      }
    }
  
    const [recording, setRecording] = useState([]);


    useEffect(() => {
        fetchRecordings();
    }, []);

    const [recordingPlaying, setRecordingPlaying] = useState('');

    const toggleRecording = async idx => {
        if (recordingPlaying === idx){
            setRecordingPlaying(' ')
            return
        }

        setRecordingPlaying(idx)
        return

    }
    return (  
      <main className="body-content">
        {/* <Nav /> */}
        <div className="home-title">
          <h1> Recordings </h1>
        </div>
  
        
      </main>
    );
  }
   
  export default Recordings;