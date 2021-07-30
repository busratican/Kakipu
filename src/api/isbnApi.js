import axios from 'axios';


axios.defaults.baseURL = 'https://api2.isbndb.com/book';

// Important: If axios is used with multiple domains, the AUTH_TOKEN will be sent to all of them.
// See below for an example using Custom instance defaults instead.
axios.defaults.headers.common['Authorization'] = '46440_fc485f105ab6133f3ec23c523ac1f099';

axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.defaults.headers.Host = 'api2.isbndb.com';


let headers = {
    "Content-Type": 'application/json',
    "Authorization": '46440_fc485f105ab6133f3ec23c523ac1f099',
    "User-Agent": "insomnia/5.12.4",
    "Host": "api2.isbndb.com"
  }


export default axios.create({
  baseURL: 'https://api2.isbndb.com/book'
});

