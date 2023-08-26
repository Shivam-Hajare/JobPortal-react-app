import axios from "axios";

const searchFunction = async (type, value) => {
    // type => title, status, type
    const searchType = type.trim();
    if(searchType === "type") {
        return serachByTypeOfJob(value);
    }else if (searchType === "status") {
        return searchByStatus(value);
    }else if( searchType !== "" || !isNaN(searchType)  ){
        return searchByText(value);
    }else {
        alert("put valid text");
    }

  }
 

  const serachByTypeOfJob = async(value) => {
    try {
        const response = await axios.get(`http://localhost:8080/jobseeker/get/jobtype/${value}`);
        return response.data;
      } catch (error) {
        console.error("Error fetching by type:", error);
        return null;
      }
  }

  const searchByStatus = async(value) => {
    try {
        const jobSeekerId = 1;
        const response = await axios.get(`http://localhost:8080/jobseeker/get/${value}/${jobSeekerId}`);
        return response.data;
      } catch (error) {
        console.error("Error fetching by status:", error);
        return null;
      }
  }

  const searchByText = async(value) => {
    alert("search by text => " + value);
    try {
      const jobSeekerId = 1;
      const response = await axios.get(`http://localhost:8080/jobseeker/get/title/${value}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching by status:", error);
      return null;
    }
  }
export default searchFunction;
