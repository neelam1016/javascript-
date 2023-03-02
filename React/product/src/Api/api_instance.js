import axios from 'axios';
          const instance=axios.create({
             baseURL:'http://localhost:9999/',
            //  headers:{
            //     Authorization:'',
            //     Content-Type:""
            //  }
          })
export default instance;