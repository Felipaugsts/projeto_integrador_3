
import { axios } from 'axios'

export async function getJobId(ID) {
  try {
    let job = null;
    await axios.get('https://localhost:3000', ID).then((response) => { 
      job = response.data
    })
    return Promise.resolve({ error: null, result: job });
  } catch (err) {
    return Promise.resolve({ error: err.message, result: null });
  }
}

function deleteJob(ID) {
  return axios.delete('https://localhost:3000/delete', ID)
    .then((res) => {
      return res;
    });
}